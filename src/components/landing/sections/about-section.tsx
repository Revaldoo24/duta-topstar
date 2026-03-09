"use client";

import { Sparkle, TrendingUp, WalletCards } from "lucide-react";

import { t } from "@/data/program-content";
import type { Locale, ProgramContent } from "@/types/program";
import { FadeInUp, StaggerGroup, StaggerItem } from "@/components/landing/motion";
import { SectionShell } from "@/components/landing/section-shell";

const aboutIcons = [Sparkle, TrendingUp, WalletCards];

interface AboutSectionProps {
  locale: Locale;
  content: ProgramContent["about"];
}

export function AboutSection({ locale, content }: AboutSectionProps) {
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
                : "An official content creator development program by STEKOM University."}
            </h3>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
              {locale === "id"
                ? "Dirancang untuk membentuk peserta yang aktif, kreatif, produktif, dan siap tampil sebagai representasi resmi STEKOM di platform digital."
                : "Built to shape active, creative, and productive participants ready to represent STEKOM University across digital platforms."}
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
    </SectionShell>
  );
}
