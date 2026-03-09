"use client";

import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";

import { t } from "@/data/program-content";
import type { Locale, ProgramContent } from "@/types/program";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeInUp, StaggerGroup, StaggerItem } from "@/components/landing/motion";

interface HeroSectionProps {
  locale: Locale;
  content: ProgramContent["hero"];
}

export function HeroSection({ locale, content }: HeroSectionProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden px-4 pt-20 pb-16 sm:px-8 sm:pt-28 sm:pb-20 lg:px-10 lg:pt-32 lg:pb-24"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_12%_12%,rgba(110,164,255,0.28),transparent_35%),radial-gradient(circle_at_88%_0%,rgba(255,141,195,0.26),transparent_38%),linear-gradient(180deg,#fefeff_0%,#f9fbff_56%,#fff7fb_100%)] dark:bg-[radial-gradient(circle_at_12%_12%,rgba(87,120,214,0.36),transparent_35%),radial-gradient(circle_at_88%_0%,rgba(179,83,142,0.32),transparent_38%),linear-gradient(180deg,#0f1626_0%,#121a2d_56%,#141d31_100%)]" />
      <div className="absolute -top-16 left-[8%] -z-10 h-64 w-64 rounded-full bg-blue-300/30 dark:bg-blue-700/25" />
      <div className="absolute right-[5%] bottom-6 -z-10 h-56 w-56 rounded-full bg-pink-300/25 dark:bg-fuchsia-700/20" />

      {!reducedMotion && (
        <m.div
          className="absolute top-12 right-[18%] -z-10 h-32 w-32 rounded-full bg-blue-200/30 dark:bg-blue-700/25"
          animate={{ y: [-10, 10, -10], x: [0, -6, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <div className="mx-auto grid w-full max-w-6xl gap-10 sm:gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:items-center lg:gap-14">
        <FadeInUp className="space-y-6 sm:space-y-7">
          <Badge className="rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-[11px] text-primary sm:text-xs">
            {t(content.badge, locale)}
          </Badge>

          <h1 className="text-balance text-3xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-slate-100">
            {t(content.title, locale)}
          </h1>
          <p className="max-w-2xl text-pretty text-sm leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            {t(content.subtitle, locale)}
          </p>

          <div className="flex flex-wrap gap-2.5 pt-1.5 sm:gap-3 sm:pt-2">
            <Button
              asChild
              size="lg"
              className="w-full rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground hover:bg-primary/90 sm:w-auto"
            >
              <Link href="#daftar">{t(content.primaryCta, locale)}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full rounded-full border-pink-300 bg-pink-50 px-7 text-sm font-semibold text-pink-600 hover:bg-pink-100 hover:text-pink-700 dark:border-fuchsia-600/55 dark:bg-fuchsia-900/30 dark:text-fuchsia-200 dark:hover:bg-fuchsia-900/50 dark:hover:text-fuchsia-100 sm:w-auto"
            >
              <Link href="#pelajari">{t(content.secondaryCta, locale)}</Link>
            </Button>
          </div>
        </FadeInUp>

        <StaggerGroup className="grid gap-3 sm:grid-cols-2 sm:gap-4" stagger={0.1} delay={0.12}>
          {content.highlights.map((highlight, index) => (
            <StaggerItem key={highlight.id}>
              <div className="relative overflow-hidden rounded-2xl border border-white/70 bg-white/90 p-3.5 shadow-sm shadow-blue-100/70 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-100/90 sm:p-4 dark:border-slate-700/80 dark:bg-slate-900/80 dark:shadow-none dark:hover:shadow-[0_16px_30px_-22px_rgba(59,130,246,0.5)]">
                <div
                  className="absolute inset-x-0 top-0 h-1"
                  style={{
                    background:
                      index % 2 === 0
                        ? "linear-gradient(90deg,#6d97ff,#8cb4ff)"
                        : "linear-gradient(90deg,#ff88be,#ff9dc9)",
                  }}
                />
                <p className="pt-1.5 text-sm font-semibold text-slate-700 sm:pt-2 sm:text-base dark:text-slate-200">
                  {t(highlight.label, locale)}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
