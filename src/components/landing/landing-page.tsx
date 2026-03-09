"use client";

import Image from "next/image";
import Link from "next/link";

import { programContent } from "@/data/program-content";
import type { Locale } from "@/types/program";
import { MotionProvider } from "@/components/landing/motion";
import { SiteHeader } from "@/components/landing/site-header";
import { HeroSection } from "@/components/landing/sections/hero-section";
import { AboutSection } from "@/components/landing/sections/about-section";
import { TrainingSection } from "@/components/landing/sections/training-section";
import { IncomeSection } from "@/components/landing/sections/income-section";
import { BenefitsSection } from "@/components/landing/sections/benefits-section";
import { TimelineSection } from "@/components/landing/sections/timeline-section";
import { OutcomesSection } from "@/components/landing/sections/outcomes-section";
import { AmbassadorsSection } from "@/components/landing/sections/ambassadors-section";
import { GallerySection } from "@/components/landing/sections/gallery-section";
import { FaqSection } from "@/components/landing/sections/faq-section";
import { FinalCtaSection } from "@/components/landing/sections/final-cta-section";

export function LandingPage() {
  const locale: Locale = "id";

  return (
    <MotionProvider>
      <div className="relative overflow-x-clip text-slate-900 dark:text-slate-100">
        <SiteHeader
          locale={locale}
          brand={programContent.brand}
          navItems={programContent.nav}
        />

        <main>
          <HeroSection locale={locale} content={programContent.hero} />
          <AboutSection locale={locale} content={programContent.about} />
          <TrainingSection locale={locale} content={programContent.training} />
          <IncomeSection locale={locale} content={programContent.income} />
          <BenefitsSection locale={locale} content={programContent.benefits} />
          <TimelineSection locale={locale} content={programContent.timeline} />
          <OutcomesSection locale={locale} content={programContent.outcomes} />
          <AmbassadorsSection locale={locale} content={programContent.ambassadors} />
          <GallerySection locale={locale} content={programContent.gallery} />
          <FaqSection locale={locale} content={programContent.faq} />
          <FinalCtaSection
            locale={locale}
            ctaContent={programContent.finalCta}
            formContent={programContent.form}
          />
        </main>

        <footer className="relative mt-12 overflow-hidden border-t border-slate-200/80 bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-800 sm:mt-14 dark:border-white/10 dark:from-[#04070f] dark:via-[#040a16] dark:to-[#060c18] dark:text-slate-200">
          <div className="pointer-events-none absolute inset-x-0 bottom-[-220px] h-[460px] bg-[radial-gradient(circle_at_50%_100%,rgba(148,163,184,0.28),rgba(59,130,246,0.12)_36%,rgba(255,255,255,0)_72%)] dark:bg-[radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.58),rgba(91,128,223,0.17)_36%,rgba(4,7,15,0)_72%)]" />
          <div className="mx-auto w-full max-w-7xl px-4 pt-10 pb-8 sm:px-8 sm:pt-14 sm:pb-10 lg:px-10 lg:pt-16">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-12">
              <div className="space-y-5 sm:col-span-2 sm:space-y-7 lg:col-span-1">
                <span className="inline-flex h-14 w-[200px] items-center justify-center rounded-xl border border-slate-300/70 bg-white/85 px-4 backdrop-blur-sm sm:h-16 sm:w-[260px] dark:border-white/15 dark:bg-white/8">
                  <Image
                    src="/images/logoduta.png"
                    alt="Logo Duta Teladan Universitas STEKOM"
                    width={360}
                    height={86}
                    unoptimized
                    className="h-8 w-auto sm:h-10"
                  />
                </span>

                <p className="max-w-md text-sm leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
                  Platform pengembangan content creator untuk memaksimalkan personal branding dan pertumbuhan akun.
                </p>

                <p className="max-w-md text-sm leading-relaxed text-slate-600 sm:text-[1.13rem] dark:text-slate-300">
                  <span className="font-semibold text-slate-900 dark:text-white">Universitas STEKOM</span>
                  <br />
                  Jl. Majapahit 605, Pedurungan, Kota Semarang,
                  <br />
                  Jawa Tengah 50192.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900 sm:text-2xl dark:text-white">Menu</h4>
                <ul className="mt-4 space-y-3 text-base font-medium text-slate-600 sm:mt-5 sm:space-y-4 sm:text-xl dark:text-slate-300">
                  <li>
                    <Link className="transition hover:text-slate-900 dark:hover:text-white" href="#hero">Home</Link>
                  </li>
                  <li>
                    <Link className="transition hover:text-slate-900 dark:hover:text-white" href="#tentang">About</Link>
                  </li>
                  <li>
                    <Link className="transition hover:text-slate-900 dark:hover:text-white" href="#duta">Top Duta</Link>
                  </li>
                  <li>
                    <Link className="transition hover:text-slate-900 dark:hover:text-white" href="#daftar">Contact</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900 sm:text-2xl dark:text-white">Legal</h4>
                <ul className="mt-4 space-y-3 text-base font-medium text-slate-600 sm:mt-5 sm:space-y-4 sm:text-xl dark:text-slate-300">
                  <li>
                    <a className="transition hover:text-slate-900 dark:hover:text-white" href="#faq">Privacy Policy</a>
                  </li>
                  <li>
                    <a className="transition hover:text-slate-900 dark:hover:text-white" href="#faq">Terms of Service</a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900 sm:text-2xl dark:text-white">Socials</h4>
                <ul className="mt-4 space-y-3 text-base font-medium text-slate-600 sm:mt-5 sm:space-y-4 sm:text-xl dark:text-slate-300">
                  <li>
                    <a
                      className="transition hover:text-slate-900 dark:hover:text-white"
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition hover:text-slate-900 dark:hover:text-white"
                      href="https://discord.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Discord
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative mt-10 border-t border-slate-200/80 pt-6 text-center sm:mt-12 sm:pt-8 dark:border-white/10">
              <p className="text-sm font-medium text-slate-500 sm:text-lg dark:text-slate-400">
                © 2026 Duta Teladan Universitas STEKOM. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </MotionProvider>
  );
}
