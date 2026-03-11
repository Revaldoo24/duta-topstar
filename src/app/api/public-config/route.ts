import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const trainingVideoUrl = process.env.NEXT_PUBLIC_TRAINING_VIDEO_URL ?? "";
  const benefitsVideoUrl = process.env.NEXT_PUBLIC_BENEFITS_VIDEO_URL ?? "";

  return NextResponse.json(
    {
      trainingVideoUrl,
      benefitsVideoUrl,
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}
