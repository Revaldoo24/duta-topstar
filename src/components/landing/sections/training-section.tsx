"use client";

import {
  BadgeCheck,
  Camera,
  Clapperboard,
  Megaphone,
  Mic2,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import { t } from "@/data/program-content";
import type { Locale, ProgramContent } from "@/types/program";
import { StaggerGroup, StaggerItem } from "@/components/landing/motion";
import { SectionShell } from "@/components/landing/section-shell";
  
const trainingIcons = [
  TrendingUp,
  BadgeCheck,
  Mic2,
  Clapperboard,
  Camera,
  Sparkles,
  Megaphone,
];

interface TrainingSectionProps {
  locale: Locale;
  content: ProgramContent["training"];
}

export function TrainingSection({ locale, content }: TrainingSectionProps) {
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

        <StaggerGroup className="relative grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3" stagger={0.08}>
          {content.items.map((item, index) => {
            const Icon = trainingIcons[index % trainingIcons.length];
            return (
              <StaggerItem key={item.id}>
                <article className="group h-full rounded-2xl border border-blue-100/80 bg-white/90 p-4 transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_0_0_1px_rgba(88,130,255,0.14),0_18px_34px_-20px_rgba(63,107,222,0.45)] sm:p-5 dark:border-slate-700/80 dark:bg-slate-900/85 dark:shadow-none dark:hover:shadow-[0_16px_30px_-22px_rgba(59,130,246,0.5)]">
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
      </div>
    </SectionShell>
  );
}
