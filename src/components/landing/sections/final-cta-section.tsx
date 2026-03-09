"use client";

import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";

import { t } from "@/data/program-content";
import type { Locale, ProgramContent } from "@/types/program";
import { FadeInUp } from "@/components/landing/motion";
import { SectionShell } from "@/components/landing/section-shell";
import { Button } from "@/components/ui/button";
import { RegistrationForm } from "@/components/landing/registration-form";

interface FinalCtaSectionProps {
  locale: Locale;
  ctaContent: ProgramContent["finalCta"];
  formContent: ProgramContent["form"];
}

export function FinalCtaSection({
  locale,
  ctaContent,
  formContent,
}: FinalCtaSectionProps) {
  const reducedMotion = useReducedMotion();

  return (
    <SectionShell id="daftar" className="pb-24 sm:pb-28" contentClassName="mt-0">
      <div className="overflow-hidden rounded-3xl border border-blue-100/60 bg-[linear-gradient(145deg,#ebf4ff_0%,#e7f0ff_36%,#ffdff0_100%)] p-5 shadow-xl shadow-blue-100/70 sm:p-8 lg:p-10 dark:border-slate-700/70 dark:bg-[linear-gradient(145deg,#141f36_0%,#192540_36%,#291d3a_100%)] dark:shadow-none">
        <FadeInUp className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-2xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl dark:text-slate-100">
            {t(ctaContent.title, locale)}
          </h2>
          <p className="mt-3 text-pretty text-sm text-slate-700 sm:mt-4 sm:text-lg dark:text-slate-300">
            {t(ctaContent.subtitle, locale)}
          </p>

          <m.div
            className="mt-7"
            animate={
              reducedMotion
                ? undefined
                : {
                    y: [0, -3, 0],
                  }
            }
            transition={
              reducedMotion
                ? undefined
                : {
                    duration: 2.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
          >
            <Button
              asChild
              size="lg"
              className="w-full rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground hover:bg-primary/90 sm:w-auto"
            >
              <Link href="#registration-form">{t(ctaContent.button, locale)}</Link>
            </Button>
          </m.div>
        </FadeInUp>

        <div id="registration-form" className="mt-8 sm:mt-10">
          <RegistrationForm locale={locale} formContent={formContent} />
        </div>
      </div>
    </SectionShell>
  );
}
