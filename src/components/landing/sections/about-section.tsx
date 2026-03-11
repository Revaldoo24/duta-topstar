"use client";

import { PlayCircle, Sparkle, TrendingUp, WalletCards } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { t } from "@/data/program-content";
import type { Locale, ProgramContent } from "@/types/program";
import { getPublicConfig } from "@/lib/public-config";
import { FadeInUp, StaggerGroup, StaggerItem } from "@/components/landing/motion";
import { SectionShell } from "@/components/landing/section-shell";

const aboutIcons = [Sparkle, TrendingUp, WalletCards];

interface AboutSectionProps {
  locale: Locale;
  content: ProgramContent["about"];
}

export function AboutSection({ locale, content }: AboutSectionProps) {
  const rawVideoUrl = process.env.NEXT_PUBLIC_TRAINING_VIDEO_URL ?? "";
  const [runtimeVideoUrl, setRuntimeVideoUrl] = useState("");

  useEffect(() => {
    if (rawVideoUrl) return;
    let isActive = true;

    getPublicConfig().then((config) => {
      if (!isActive) return;
      setRuntimeVideoUrl(config.trainingVideoUrl ?? "");
    });

    return () => {
      isActive = false;
    };
  }, [rawVideoUrl]);

  const resolvedVideoUrl = (rawVideoUrl || runtimeVideoUrl).trim();
  const videoUrl = useMemo(() => {
    if (!resolvedVideoUrl) return "";
    const match = resolvedVideoUrl.match(/\/file\/d\/([^/]+)/);
    if (match) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
    return resolvedVideoUrl;
  }, [resolvedVideoUrl]);

  return (
    <SectionShell
      id="tentang"
      eyebrow={t(content.eyebrow, locale)}
      title={t(content.title, locale)}
      description={t(content.description, locale)}
      contentClassName="mt-10 sm:mt-12"
    >
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-10">
        <FadeInUp className="relative overflow-hidden rounded-3xl border border-blue-100 bg-[linear-gradient(145deg,#f8fbff_0%,#f4f8ff_42%,#fff3f8_100%)] p-5 shadow-sm sm:p-8 dark:border-slate-700/70 dark:bg-[linear-gradient(145deg,#162138_0%,#1a2742_42%,#2a1f3c_100%)]">
          <div className="absolute -top-10 right-10 h-28 w-28 rounded-full bg-blue-200/40 dark:bg-blue-700/30" />
          <div className="absolute -bottom-10 left-6 h-28 w-28 rounded-full bg-pink-200/40 dark:bg-fuchsia-700/25" />
          <div className="relative space-y-4 sm:space-y-5">
            <h3 className="text-xl font-bold text-slate-900 sm:text-3xl dark:text-slate-100">
              {locale === "id"
                ? "Program resmi pengembangan content creator Universitas STEKOM."
                : "An official content creator development program by Universitas STEKOM."}
            </h3>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
              {locale === "id"
                ? "Dirancang untuk membentuk peserta yang aktif, kreatif, produktif, dan siap tampil sebagai representasi resmi Universitas STEKOM di platform digital."
                : "Built to shape active, creative, and productive participants ready to represent Universitas STEKOM across digital platforms."}
            </p>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
              {locale === "id"
                ? "Tidak ada biaya program untuk peserta. Kamu mendapatkan pelatihan intensif sekaligus peluang uang saku dan bonus performa berdasarkan evaluasi berkala."
                : "There is no program fee for participants. You receive intensive training while having opportunities to earn stipends and performance bonuses based on regular evaluations."}
            </p>
          </div>
        </FadeInUp>

        <StaggerGroup className="grid gap-3.5 sm:gap-4" stagger={0.09} delay={0.05}>
          {content.highlights.map((item, index) => {
            const Icon = aboutIcons[index % aboutIcons.length];
            return (
              <StaggerItem key={item.id}>
                <article className="group rounded-2xl border border-slate-200/80 bg-white/95 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg hover:shadow-blue-100/70 sm:p-5 dark:border-slate-700/80 dark:bg-slate-900/85 dark:shadow-none dark:hover:shadow-[0_16px_30px_-22px_rgba(59,130,246,0.5)]">
                  <div className="flex items-start gap-4">
                    <span className="rounded-xl bg-blue-50 p-2.5 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground dark:bg-slate-800 dark:group-hover:bg-primary">
                      <Icon className="size-5" />
                    </span>
                    <div className="space-y-2">
                      <h4 className="text-base font-semibold text-slate-900 sm:text-lg dark:text-slate-100">
                        {t(item.title, locale)}
                      </h4>
                      <p className="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
                        {t(item.description, locale)}
                      </p>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>

        <div className="mt-10 sm:mt-12">
        <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-[linear-gradient(150deg,#eef5ff_0%,#f2f8ff_36%,#fff2f9_100%)] p-4 shadow-xl shadow-blue-100/60 sm:p-8 lg:p-10 dark:border-slate-700/70 dark:bg-[linear-gradient(150deg,#141f36_0%,#1a2640_36%,#2a1d37_100%)] dark:shadow-none">
          <div className="absolute -left-14 top-10 h-40 w-40 rounded-full bg-blue-300/30 dark:bg-blue-700/25" />
          <div className="absolute right-0 bottom-0 h-44 w-44 rounded-full bg-pink-300/25 dark:bg-fuchsia-700/20" />

          <div className="relative grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600 dark:border-slate-700/70 dark:bg-slate-900/70 dark:text-slate-300">
                <PlayCircle className="size-3.5 text-primary" />
                Video Profil
              </div>
              <h3 className="text-xl font-bold text-slate-900 sm:text-2xl dark:text-slate-100">
                {locale === "id"
                  ? "Tonton video profil Duta Teladan Universitas STEKOM."
                  : "Watch the profile video of Duta Teladan Universitas STEKOM."}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
                {locale === "id"
                  ? "Video ini memperkenalkan profil serta aktivitas Duta Teladan Universitas STEKOM secara ringkas."
                  : "This video introduces the profile and activities of Duta Teladan Universitas STEKOM."}
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-blue-100/80 bg-white/90 shadow-lg shadow-blue-100/40 dark:border-slate-700/80 dark:bg-slate-900/85 dark:shadow-none">
              <div className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600 shadow-sm dark:border-slate-700/70 dark:bg-slate-900/80 dark:text-slate-300">
                Profil Duta
              </div>
              <div className="aspect-video w-full bg-slate-100 dark:bg-slate-800">
                {videoUrl ? (
                  <iframe
                    title="Video Profil Duta Teladan Universitas STEKOM"
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
                        ? "Link video belum diatur. Tambahkan NEXT_PUBLIC_TRAINING_VIDEO_URL untuk video profil Duta Teladan."
                        : "Video link not set. Add NEXT_PUBLIC_TRAINING_VIDEO_URL for the Duta Teladan profile video."}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
