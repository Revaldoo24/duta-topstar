"use client";

import {
  Award,
  BadgeCheck,
  BriefcaseBusiness,
  GraduationCap,
  Network,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

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
    </SectionShell>
  );
}
