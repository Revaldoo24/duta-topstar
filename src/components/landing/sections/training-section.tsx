"use client";

import { PlayCircle } from "lucide-react";

import { t } from "@/data/program-content";
import type { Locale, ProgramContent } from "@/types/program";
import { SectionShell } from "@/components/landing/section-shell";

interface TrainingSectionProps {
  locale: Locale;
  content: ProgramContent["training"];
}

export function TrainingSection({ locale, content }: TrainingSectionProps) {
  const rawVideoUrl = process.env.NEXT_PUBLIC_TRAINING_VIDEO_URL;
  const videoUrl = rawVideoUrl
    ? (() => {
        const match = rawVideoUrl.match(/\/file\/d\/([^/]+)/);
        if (match) {
          return `https://drive.google.com/file/d/${match[1]}/preview`;
        }
        return rawVideoUrl;
      })()
    : "";

  return (
    <SectionShell
      id="pelajari"
      eyebrow={t(content.eyebrow, locale)}
      title={t(content.title, locale)}
      description={t(content.description, locale)}
      className="relative"
      contentClassName="mt-10 sm:mt-12"
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-[linear-gradient(150deg,#eef5ff_0%,#f2f8ff_36%,#fff2f9_100%)] p-4 shadow-xl shadow-blue-100/60 sm:p-8 lg:p-10 dark:border-slate-700/70 dark:bg-[linear-gradient(150deg,#141f36_0%,#1a2640_36%,#2a1d37_100%)] dark:shadow-none">
        <div className="absolute -left-14 top-10 h-40 w-40 rounded-full bg-blue-300/30 dark:bg-blue-700/25" />
        <div className="absolute right-0 bottom-0 h-44 w-44 rounded-full bg-pink-300/25 dark:bg-fuchsia-700/20" />

        <div className="relative grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600 dark:border-slate-700/70 dark:bg-slate-900/70 dark:text-slate-300">
              <PlayCircle className="size-3.5 text-primary" />
              Video Materi
            </div>
            <h3 className="text-xl font-bold text-slate-900 sm:text-2xl dark:text-slate-100">
              {locale === "id"
                ? "Tonton materi inti langsung dari Universitas STEKOM."
                : "Watch the core training directly from Universitas STEKOM."}
            </h3>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
              {locale === "id"
                ? "Video ini merangkum kurikulum utama yang akan kamu pelajari selama program berlangsung."
                : "This video summarizes the main curriculum you will learn throughout the program."}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-blue-100/80 bg-white/90 shadow-lg shadow-blue-100/40 dark:border-slate-700/80 dark:bg-slate-900/85 dark:shadow-none">
            <div className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600 shadow-sm dark:border-slate-700/70 dark:bg-slate-900/80 dark:text-slate-300">
              Materi Resmi
            </div>
            <div className="aspect-video w-full bg-slate-100 dark:bg-slate-800">
              {videoUrl ? (
                <iframe
                  title="Materi Duta Teladan Universitas STEKOM"
                  src={videoUrl}
                  className="h-full w-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-2 text-center text-sm text-slate-500 dark:text-slate-400">
                  <PlayCircle className="size-10 text-slate-400" />
                  <p>
                    {locale === "id"
                      ? "Link video belum diatur. Tambahkan NEXT_PUBLIC_TRAINING_VIDEO_URL."
                      : "Video link not set. Add NEXT_PUBLIC_TRAINING_VIDEO_URL."}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
