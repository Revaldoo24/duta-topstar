"use client";

import { Quote } from "lucide-react";

import { t } from "@/data/program-content";
import type { Locale, ProgramContent } from "@/types/program";
import { FadeInUp, StaggerGroup, StaggerItem } from "@/components/landing/motion";
import { SectionShell } from "@/components/landing/section-shell";

interface OutcomesSectionProps {
  locale: Locale;
  content: ProgramContent["outcomes"];
}

export function OutcomesSection({ locale, content }: OutcomesSectionProps) {
  return (
    <SectionShell
      id="hasil"
      eyebrow={t(content.eyebrow, locale)}
      title={t(content.title, locale)}
      description={t(content.description, locale)}
      contentClassName="mt-10 sm:mt-12"
    >
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.03fr_0.97fr] lg:items-start">
        <StaggerGroup className="grid gap-3.5 sm:grid-cols-2 sm:gap-4" stagger={0.08}>
          {content.items.map((item) => (
            <StaggerItem key={item.id}>
              <article className="h-full rounded-2xl border border-slate-200/70 bg-white/95 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-100/70 sm:p-5 dark:border-slate-700/80 dark:bg-slate-900/85 dark:shadow-none dark:hover:shadow-[0_16px_30px_-22px_rgba(59,130,246,0.5)]">
                <h3 className="text-base font-semibold text-slate-900 sm:text-lg dark:text-slate-100">
                  {t(item.title, locale)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
                  {t(item.description, locale)}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <FadeInUp>
          <aside className="relative overflow-hidden rounded-3xl border border-blue-100 bg-[linear-gradient(145deg,#f5f9ff_0%,#eef5ff_40%,#fff4f9_100%)] p-5 shadow-sm sm:p-8 dark:border-slate-700/80 dark:bg-[linear-gradient(145deg,#141f36_0%,#18243e_40%,#281d39_100%)]">
            <div className="absolute -bottom-12 -right-8 h-36 w-36 rounded-full bg-pink-300/25 dark:bg-fuchsia-700/20" />
            <Quote className="size-7 text-primary" />
            <blockquote className="mt-3.5 text-sm leading-relaxed text-slate-700 sm:mt-4 sm:text-lg dark:text-slate-200">
              {t(content.quote, locale)}
            </blockquote>
            <footer className="mt-5 text-sm font-semibold text-slate-900 dark:text-slate-100">
              {t(content.quoteSource, locale)}
            </footer>
          </aside>
        </FadeInUp>
      </div>
    </SectionShell>
  );
}
