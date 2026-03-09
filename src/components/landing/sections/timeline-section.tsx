"use client";

import { Award, Compass, Rocket, Sparkles, TrendingUp } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";

import { t } from "@/data/program-content";
import type { Locale, ProgramContent } from "@/types/program";
import { StaggerGroup, StaggerItem } from "@/components/landing/motion";
import { SectionShell } from "@/components/landing/section-shell";

interface TimelineSectionProps {
  locale: Locale;
  content: ProgramContent["timeline"];
}

const stepIcons = [Compass, Award, Rocket, Sparkles, TrendingUp];

export function TimelineSection({ locale, content }: TimelineSectionProps) {
  const reducedMotion = useReducedMotion();
  const stepWord = locale === "id" ? "Tahap" : "Step";

  return (
    <SectionShell
      id="alur"
      eyebrow={t(content.eyebrow, locale)}
      title={t(content.title, locale)}
      description={t(content.description, locale)}
      contentClassName="mt-10 sm:mt-12"
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-[linear-gradient(135deg,#f5f9ff_0%,#eef4ff_42%,#fff3f9_100%)] p-4 shadow-xl shadow-blue-100/70 sm:p-8 dark:border-slate-700/70 dark:bg-[linear-gradient(135deg,#141f36_0%,#18243e_42%,#281d39_100%)] dark:shadow-none">
        {!reducedMotion && (
          <>
            <m.div
              className="pointer-events-none absolute -top-16 -right-10 h-44 w-44 rounded-full bg-blue-300/20 dark:bg-blue-700/20"
              animate={{ scale: [0.95, 1.08, 0.95] }}
              transition={{ duration: 7.4, repeat: Infinity, ease: "easeInOut" }}
            />
            <m.div
              className="pointer-events-none absolute -bottom-20 -left-10 h-52 w-52 rounded-full bg-pink-300/20 dark:bg-fuchsia-700/20"
              animate={{ scale: [1.05, 0.92, 1.05] }}
              transition={{ duration: 8.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}

        <div className="relative hidden md:block">
          <div className="pointer-events-none absolute top-12 left-4 h-px w-[calc(100%-2rem)] bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10 dark:from-primary/20 dark:via-primary/60 dark:to-primary/20" />
          <m.div
            className="pointer-events-none absolute top-12 left-4 h-px bg-gradient-to-r from-primary/20 via-primary to-primary/20"
            initial={{ width: reducedMotion ? "calc(100% - 2rem)" : "0%" }}
            whileInView={{ width: "calc(100% - 2rem)" }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: reducedMotion ? 0 : 1, ease: "easeOut" }}
          />

          <StaggerGroup className="relative grid grid-cols-5 gap-4 pt-4 lg:gap-5" stagger={0.08}>
            {content.steps.map((step, index) => {
              const Icon = stepIcons[index % stepIcons.length];

              return (
                <StaggerItem key={step.id}>
                  <article className="group relative h-full rounded-2xl border border-white/80 bg-white/92 p-4 pt-10 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg hover:shadow-blue-100/80 lg:p-5 lg:pt-11 dark:border-slate-700/80 dark:bg-slate-900/85 dark:shadow-none dark:hover:shadow-[0_16px_30px_-22px_rgba(59,130,246,0.5)]">
                    <span className="absolute top-0 left-1/2 inline-flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/25 bg-white text-primary shadow-sm dark:bg-slate-900">
                      <Icon className="size-4" />
                    </span>
                    <p className="text-[11px] font-semibold tracking-[0.18em] text-primary/85 uppercase">
                      {stepWord} {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 text-sm font-semibold text-slate-900 lg:text-base dark:text-slate-100">
                      {t(step.title, locale)}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 lg:text-sm dark:text-slate-300">
                      {t(step.description, locale)}
                    </p>
                  </article>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>

        <div className="relative md:hidden">
          <div className="pointer-events-none absolute top-6 left-[1.08rem] h-[calc(100%-3rem)] w-px bg-gradient-to-b from-primary/5 via-primary/45 to-primary/5" />
          <m.div
            className="pointer-events-none absolute top-6 left-[1.08rem] w-px bg-gradient-to-b from-primary/30 via-primary to-primary/30"
            initial={{ height: reducedMotion ? "calc(100% - 3rem)" : "0%" }}
            whileInView={{ height: "calc(100% - 3rem)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: reducedMotion ? 0 : 0.85, ease: "easeOut" }}
          />

          <StaggerGroup className="space-y-3.5 sm:space-y-4" stagger={0.09}>
            {content.steps.map((step, index) => {
              const Icon = stepIcons[index % stepIcons.length];

              return (
                <StaggerItem key={step.id}>
                  <article className="relative overflow-hidden rounded-2xl border border-white/80 bg-white/92 p-3.5 pl-12 shadow-sm sm:p-4 sm:pl-14 dark:border-slate-700/80 dark:bg-slate-900/85 dark:shadow-none">
                    <span className="absolute top-4 left-3 inline-flex size-7 items-center justify-center rounded-full border border-primary/20 bg-white text-primary dark:bg-slate-900">
                      <Icon className="size-3.5" />
                    </span>
                    <p className="text-[11px] font-semibold tracking-[0.16em] text-primary/85 uppercase">
                      {stepWord} {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-1.5 text-sm font-semibold text-slate-900 sm:text-base dark:text-slate-100">
                      {t(step.title, locale)}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {t(step.description, locale)}
                    </p>
                  </article>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </div>
    </SectionShell>
  );
}
