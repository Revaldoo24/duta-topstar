import { Readable } from "node:stream";
import { google } from "googleapis";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const REQUIRED_TEXT_FIELDS = [
  "fullName",
  "school",
  "email",
  "whatsapp",
  "tiktok",
  "instagram",
  "motivation",
] as const;

const MAX_FILE_SIZE_BYTES = 8 * 1024 * 1024;
const MAX_FILE_COUNT = 10;

type RequiredTextField = (typeof REQUIRED_TEXT_FIELDS)[number];
type RegistrationPayload = Record<RequiredTextField, string>;
type DriveClient = ReturnType<typeof google.drive>;
type SheetsClient = ReturnType<typeof google.sheets>;
const SUBMITTED_AT_TIME_ZONE = "Asia/Jakarta";

function getSubmittedAtUtc7(): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: SUBMITTED_AT_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  })
    .formatToParts(new Date())
    .reduce<Record<string, string>>((accumulator, part) => {
      if (part.type !== "literal") {
        accumulator[part.type] = part.value;
      }
      return accumulator;
    }, {});

  return `${parts.year}-${parts.month}-${parts.day} ${parts.hour}:${parts.minute}:${parts.second} UTC+7`;
}

function getEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

function getGoogleClients() {
  const clientId = getEnv("GOOGLE_OAUTH_CLIENT_ID");
  const clientSecret = getEnv("GOOGLE_OAUTH_CLIENT_SECRET");
  const refreshToken = getEnv("GOOGLE_OAUTH_REFRESH_TOKEN");

  const auth = new google.auth.OAuth2({
    clientId,
    clientSecret,
  });
  auth.setCredentials({
    refresh_token: refreshToken,
  });

  return {
    drive: google.drive({ version: "v3", auth }),
    sheets: google.sheets({ version: "v4", auth }),
  };
}

function readText(formData: FormData, field: RequiredTextField): string {
  const value = formData.get(field);
  return typeof value === "string" ? value.trim() : "";
}

function validateTextPayload(payload: RegistrationPayload): string | null {
  for (const field of REQUIRED_TEXT_FIELDS) {
    if (!payload[field]) {
      return `Field '${field}' is required.`;
    }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(payload.email)) {
    return "Email format is invalid.";
  }

  return null;
}

function getProofFiles(formData: FormData): File[] {
  const entries = formData.getAll("followProof");
  return entries.filter(
    (entry): entry is File => entry instanceof File && entry.size > 0,
  );
}

function validateProofFiles(files: File[]): string | null {
  if (files.length === 0) {
    return "At least one proof file is required.";
  }

  if (files.length > MAX_FILE_COUNT) {
    return `Maximum ${MAX_FILE_COUNT} proof files are allowed.`;
  }

  for (const file of files) {
    if (!file.type.startsWith("image/")) {
      return `File '${file.name}' must be an image.`;
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
      return `File '${file.name}' exceeds 8MB size limit.`;
    }
  }

  return null;
}

async function uploadFilesToDrive(
  drive: DriveClient,
  files: File[],
  folderId: string,
) {
  const proofUrls: string[] = [];

  for (const file of files) {
    const buffer = Buffer.from(await file.arrayBuffer());
    const created = await drive.files.create({
      requestBody: {
        name: `proof-${Date.now()}-${file.name}`,
        parents: [folderId],
        mimeType: file.type || undefined,
      },
      media: {
        mimeType: file.type || "application/octet-stream",
        body: Readable.from(buffer),
      },
      fields: "id, webViewLink, webContentLink",
      supportsAllDrives: true,
    });

    const fileId = created.data.id;
    if (!fileId) {
      throw new Error("Failed to upload proof file to Google Drive.");
    }

    await drive.permissions.create({
      fileId,
      requestBody: {
        role: "reader",
        type: "anyone",
      },
      supportsAllDrives: true,
    });

    const linkData = await drive.files.get({
      fileId,
      fields: "webViewLink, webContentLink",
      supportsAllDrives: true,
    });

    const fileUrl =
      linkData.data.webViewLink ??
      linkData.data.webContentLink ??
      `https://drive.google.com/file/d/${fileId}/view`;

    proofUrls.push(fileUrl);
  }

  return proofUrls;
}

async function appendToSheet(
  sheets: SheetsClient,
  payload: RegistrationPayload,
  proofUrls: string[],
) {
  const spreadsheetId = getEnv("GOOGLE_SHEETS_SPREADSHEET_ID");
  const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME || "Registrations";

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A:I`,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [
        [
          getSubmittedAtUtc7(),
          payload.fullName,
          payload.school,
          payload.email,
          payload.whatsapp,
          payload.tiktok,
          payload.instagram,
          payload.motivation,
          proofUrls.join("\n"),
        ],
      ],
    },
  });
}

function toMessage(error: unknown): string {
  if (
    typeof error === "object" &&
    error !== null &&
    "response" in error
  ) {
    const response = (error as { response?: { data?: { error?: { message?: string } } } }).response;
    const apiMessage = response?.data?.error?.message;
    if (apiMessage) {
      return apiMessage;
    }
  }

  if (error instanceof Error && error.message) {
    return error.message;
  }
  return "Unexpected server error.";
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const payload = Object.fromEntries(
      REQUIRED_TEXT_FIELDS.map((field) => [field, readText(formData, field)]),
    ) as RegistrationPayload;
    const proofFiles = getProofFiles(formData);

    const textError = validateTextPayload(payload);
    if (textError) {
      return NextResponse.json({ error: textError }, { status: 400 });
    }

    const fileError = validateProofFiles(proofFiles);
    if (fileError) {
      return NextResponse.json({ error: fileError }, { status: 400 });
    }

    const { drive, sheets } = getGoogleClients();
    const driveFolderId = getEnv("GOOGLE_DRIVE_FOLDER_ID");

    let proofUrls: string[];
    try {
      proofUrls = await uploadFilesToDrive(drive, proofFiles, driveFolderId);
    } catch (error) {
      throw new Error(`Drive upload failed: ${toMessage(error)}`);
    }

    try {
      await appendToSheet(sheets, payload, proofUrls);
    } catch (error) {
      throw new Error(`Sheets append failed: ${toMessage(error)}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: toMessage(error) },
      { status: 500 },
    );
  }
}
