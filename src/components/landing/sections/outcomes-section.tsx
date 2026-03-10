"use client";

import Image from "next/image";
import { Quote } from "lucide-react";

import { t } from "@/data/program-content";
import type { Locale, ProgramContent } from "@/types/program";
import { FadeInUp, StaggerGroup, StaggerItem } from "@/components/landing/motion";
import { SectionShell } from "@/components/landing/section-shell";

interface OutcomesSectionProps {
  locale: Locale;
  content: ProgramContent["outcomes"];
  ambassadors: ProgramContent["ambassadors"]["items"];
}

export function OutcomesSection({ locale, content, ambassadors }: OutcomesSectionProps) {
  const testimonials = ambassadors.slice(0, 4).map((ambassador, index) => {
    const fallbackQuotes = [
      "Program ini bikin aku lebih percaya diri tampil di depan kamera. Mentornya jelas, tugasnya terarah, dan hasilnya terasa di engagement.",
      "Aku ngerasa lebih siap masuk dunia digital. Konsisten bikin konten jadi kebiasaan, dan networking-nya juga luas.",
      "Dapet insight konten yang praktis, bukan cuma teori. Aku jadi paham cara bikin konten yang relevan buat audiens.",
      "Kegiatannya rapi, terstruktur, dan bikin portofolio aku makin kuat. Banyak exposure dan peluang kolaborasi.",
    ];

    return {
      ...ambassador,
      quote: fallbackQuotes[index % fallbackQuotes.length],
    };
  });

  return (
    <SectionShell
      id="testimoni"
      eyebrow={t(content.eyebrow, locale)}
      title={t(content.title, locale)}
      description={t(content.description, locale)}
      contentClassName="mt-10 sm:mt-12"
    >
      <div className="grid gap-5 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <FadeInUp>
          <article className="relative overflow-hidden rounded-3xl border border-blue-100 bg-[linear-gradient(145deg,#f5f9ff_0%,#eef5ff_40%,#fff4f9_100%)] p-4 shadow-sm sm:p-7 dark:border-slate-700/80 dark:bg-[linear-gradient(145deg,#141f36_0%,#18243e_40%,#281d39_100%)]">
            <div className="absolute -bottom-12 -right-8 h-36 w-36 rounded-full bg-pink-300/25 dark:bg-fuchsia-700/20" />
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-white/80 bg-white/90 shadow-sm dark:border-slate-700/80 dark:bg-slate-900/80">
                <Image
                  src={testimonials[0]?.photo || "/images/topduta/placeholder.png"}
                  alt={testimonials[0]?.name || "Duta Teladan"}
                  fill
                  className="object-cover"
                  sizes="64px"
                  unoptimized
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {testimonials[0]?.name}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  {testimonials[0]?.school}
                </p>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/80">
                  Duta Teladan Universitas STEKOM
                </p>
              </div>
            </div>
            <Quote className="mt-5 size-7 text-primary" />
            <blockquote className="mt-3.5 text-sm leading-relaxed text-slate-700 sm:mt-4 sm:text-lg dark:text-slate-200">
              {testimonials[0]?.quote}
            </blockquote>
          </article>
        </FadeInUp>

        <StaggerGroup className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1" stagger={0.08}>
          {testimonials.slice(1).map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <article className="rounded-2xl border border-slate-200/70 bg-white/95 p-3.5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-100/70 sm:p-4 dark:border-slate-700/80 dark:bg-slate-900/85 dark:shadow-none dark:hover:shadow-[0_16px_30px_-22px_rgba(59,130,246,0.5)]">
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-white/80 bg-white/90 shadow-sm dark:border-slate-700/80 dark:bg-slate-900/80">
                    <Image
                      src={testimonial.photo}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                      unoptimized
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      {testimonial.school}
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {testimonial.quote}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </SectionShell>
  );
}
