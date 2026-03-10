"use client";

import {
  Award,
  BadgeCheck,
  BriefcaseBusiness,
  GraduationCap,
  Network,
  PlayCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useMemo } from "react";

import { t } from "@/data/program-content";
import type { Locale, ProgramContent } from "@/types/program";
import { StaggerGroup, StaggerItem } from "@/components/landing/motion";
import { SectionShell } from "@/components/landing/section-shell";

const benefitIcons = [
  GraduationCap,
  Award,
  BriefcaseBusiness,
  BadgeCheck,
  Network,
  ShieldCheck,
  Sparkles,
];

interface BenefitsSectionProps {
  locale: Locale;
  content: ProgramContent["benefits"];
}

export function BenefitsSection({ locale, content }: BenefitsSectionProps) {
  const rawVideoUrl = process.env.NEXT_PUBLIC_BENEFITS_VIDEO_URL;
  const videoUrl = useMemo(() => {
    if (!rawVideoUrl) return "";
    const embedMatch = rawVideoUrl.match(/youtube\.com\/embed\/([^?&]+)/);
    if (embedMatch) return rawVideoUrl;
    const watchMatch = rawVideoUrl.match(/[?&]v=([^?&]+)/);
    if (watchMatch) return `https://www.youtube.com/embed/${watchMatch[1]}?rel=0&modestbranding=1`;
    const shortMatch = rawVideoUrl.match(/youtu\.be\/([^?&]+)/);
    if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}?rel=0&modestbranding=1`;
    return rawVideoUrl;
  }, [rawVideoUrl]);

  return (
    <SectionShell
      id="benefit"
      eyebrow={t(content.eyebrow, locale)}
      title={t(content.title, locale)}
      description={t(content.description, locale)}
      contentClassName="mt-10 sm:mt-12"
    >
      <StaggerGroup className="grid gap-3.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3" stagger={0.08} delay={0.05}>
        {content.items.map((item, index) => {
          const Icon = benefitIcons[index % benefitIcons.length];
          return (
            <StaggerItem key={item.id}>
              <article className="group rounded-2xl border border-slate-200/70 bg-white/95 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:border-primary/20 hover:shadow-lg hover:shadow-blue-100/70 sm:p-5 dark:border-slate-700/80 dark:bg-slate-900/85 dark:shadow-none dark:hover:shadow-[0_16px_30px_-22px_rgba(59,130,246,0.5)]">
                <span className="inline-flex rounded-xl bg-blue-50 p-2.5 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground dark:bg-slate-800 dark:group-hover:bg-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-3.5 text-base font-semibold text-slate-900 sm:mt-4 sm:text-lg dark:text-slate-100">
                  {t(item.title, locale)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
                  {t(item.description, locale)}
                </p>
              </article>
            </StaggerItem>
          );
        })}
      </StaggerGroup>

      <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200/70 bg-white/95 shadow-lg shadow-blue-100/60 dark:border-slate-700/80 dark:bg-slate-900/85 dark:shadow-none">
        <div className="flex items-center gap-2 border-b border-slate-200/70 px-3 py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600 sm:px-4 sm:py-3 sm:text-xs dark:border-slate-700/70 dark:text-slate-300">
          <PlayCircle className="size-4 text-primary" />
          {locale === "id" ? "Video Kegiatan" : "Activity Video"}
        </div>
        <div className="aspect-video w-full bg-slate-100 dark:bg-slate-800">
          {videoUrl ? (
            <iframe
              title="Benefit Program Duta Teladan Universitas STEKOM"
              src={videoUrl}
              className="h-full w-full"
              allow="encrypted-media"
              allowFullScreen
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-2 text-center text-sm text-slate-500 dark:text-slate-400">
              <PlayCircle className="size-10 text-slate-400" />
              <p>
                {locale === "id"
                  ? "Link video belum diatur. Tambahkan NEXT_PUBLIC_BENEFITS_VIDEO_URL."
                  : "Video link not set. Add NEXT_PUBLIC_BENEFITS_VIDEO_URL."}
              </p>
            </div>
          )}
        </div>
      </div>
    </SectionShell>
  );
}
