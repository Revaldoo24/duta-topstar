"use client";

import { t } from "@/data/program-content";
import type { Locale, ProgramContent } from "@/types/program";
import { FadeInUp } from "@/components/landing/motion";
import { SectionShell } from "@/components/landing/section-shell";
import { ClientOnly } from "@/components/ui/client-only";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqSectionProps {
  locale: Locale;
  content: ProgramContent["faq"];
}

export function FaqSection({ locale, content }: FaqSectionProps) {
  return (
    <SectionShell
      id="faq"
      eyebrow={t(content.eyebrow, locale)}
      title={t(content.title, locale)}
      description={t(content.description, locale)}
      contentClassName="mt-10 sm:mt-12"
    >
      <FadeInUp>
        <div className="rounded-3xl border border-slate-200/70 bg-white/95 p-4 shadow-sm sm:p-8 dark:border-slate-700/80 dark:bg-slate-900/85 dark:shadow-none">
          <ClientOnly
            fallback={
              <div className="divide-y divide-slate-200/70 dark:divide-slate-700/80">
                {content.items.map((faqItem) => (
                  <div key={faqItem.id} className="py-4">
                    <p className="text-left text-sm font-semibold text-slate-900 sm:text-base dark:text-slate-100">
                      {t(faqItem.question, locale)}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
                      {t(faqItem.answer, locale)}
                    </p>
                  </div>
                ))}
              </div>
            }
          >
            <Accordion type="single" collapsible className="w-full">
              {content.items.map((faqItem) => (
                <AccordionItem key={faqItem.id} value={faqItem.id}>
                  <AccordionTrigger className="text-left text-sm font-semibold text-slate-900 hover:no-underline sm:text-base dark:text-slate-100">
                    {t(faqItem.question, locale)}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
                    {t(faqItem.answer, locale)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ClientOnly>
        </div>
      </FadeInUp>
    </SectionShell>
  );
}
