"use client";

import { Award, Coins, Rocket, Wallet } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";

import { t } from "@/data/program-content";
import type { IncomeMetric, Locale, ProgramContent } from "@/types/program";
import { FadeInUp, StaggerGroup, StaggerItem } from "@/components/landing/motion";
import { SectionShell } from "@/components/landing/section-shell";

const metricIcons = [Wallet, Rocket, Award, Coins];

function IncomeCard({
  metric,
  locale,
  index,
}: {
  metric: IncomeMetric;
  locale: Locale;
  index: number;
}) {
  const Icon = metricIcons[index % metricIcons.length];

  return (
    <article className="rounded-2xl border border-blue-100 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-100/80 sm:p-5 dark:border-slate-700/80 dark:bg-slate-900/85 dark:shadow-none dark:hover:shadow-[0_16px_30px_-22px_rgba(59,130,246,0.5)]">
      <span className="inline-flex rounded-xl bg-blue-50 p-2.5 text-primary dark:bg-slate-800">
        <Icon className="size-5" />
      </span>
      <h3 className="mt-3.5 text-base font-semibold text-slate-900 sm:mt-4 sm:text-lg dark:text-slate-100">
        {t(metric.label, locale)}
      </h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{t(metric.helper, locale)}</p>
    </article>
  );
}

interface IncomeSectionProps {
  locale: Locale;
  content: ProgramContent["income"];
}

export function IncomeSection({ locale, content }: IncomeSectionProps) {
  const reducedMotion = useReducedMotion();

  return (
    <SectionShell
      id="penghasilan"
      eyebrow={t(content.eyebrow, locale)}
      title={t(content.title, locale)}
      description={t(content.description, locale)}
      className="relative"
      contentClassName="mt-10 sm:mt-12"
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-[linear-gradient(130deg,#f4f9ff_0%,#edf4ff_42%,#fff3f8_100%)] p-5 shadow-lg sm:p-8 dark:border-slate-700/70 dark:bg-[linear-gradient(130deg,#141f36_0%,#18243e_42%,#281d39_100%)] dark:shadow-none">
        {!reducedMotion && (
          <m.div
            className="absolute -right-10 -bottom-10 h-44 w-44 rounded-full bg-pink-300/25 dark:bg-fuchsia-700/20"
            animate={{ scale: [0.9, 1.05, 0.9] }}
            transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
          />
        )}

        <FadeInUp>
          <p className="max-w-3xl text-pretty text-base font-medium text-slate-700 sm:text-lg dark:text-slate-200">
            {t(content.statement, locale)}
          </p>
        </FadeInUp>

        <StaggerGroup className="relative mt-7 grid gap-3.5 sm:mt-8 sm:grid-cols-2 sm:gap-4" stagger={0.08} delay={0.1}>
          {content.metrics.map((metric, index) => (
            <StaggerItem key={metric.id}>
              <IncomeCard metric={metric} locale={locale} index={index} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </SectionShell>
  );
}
