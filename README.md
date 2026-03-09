This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Google Sheets + Drive Integration

Form submit is wired to:
- Upload proof images to Google Drive folder
- Save text fields + image URLs to Google Sheets

### 1. Environment Variables

Copy `.env.example` to `.env.local` and fill all values:

```bash
cp .env.example .env.local
# Windows PowerShell:
Copy-Item .env.example .env.local
```

Required keys:
- `GOOGLE_OAUTH_CLIENT_ID`
- `GOOGLE_OAUTH_CLIENT_SECRET`
- `GOOGLE_OAUTH_REFRESH_TOKEN`
- `GOOGLE_DRIVE_FOLDER_ID`
- `GOOGLE_SHEETS_SPREADSHEET_ID`
- `GOOGLE_SHEETS_SHEET_NAME` (optional, default: `Registrations`)

### 2. Google Access Setup

- Enable Google Drive API and Google Sheets API in your Google Cloud project.
- Generate OAuth refresh token from the same Google account that owns the Drive folder and Spreadsheet.
- Make sure the OAuth scopes include Drive + Sheets access.

### 3. Expected Sheet Columns

Create columns in this order:

1. `submitted_at`
2. `full_name`
3. `school_or_institution`
4. `email`
5. `whatsapp`
6. `tiktok`
7. `instagram`
8. `motivation`
9. `proof_urls`

API endpoint used by frontend: `POST /api/register`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
