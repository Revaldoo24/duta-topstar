"use client";

import Image from "next/image";
import Link from "next/link";

import { programContent } from "@/data/program-content";
import type { Locale } from "@/types/program";
import { MotionProvider } from "@/components/landing/motion";
import { SiteHeader } from "@/components/landing/site-header";
import { HeroSection } from "@/components/landing/sections/hero-section";
import { AboutSection } from "@/components/landing/sections/about-section";
import { IncomeSection } from "@/components/landing/sections/income-section";
import { BenefitsSection } from "@/components/landing/sections/benefits-section";
import { TimelineSection } from "@/components/landing/sections/timeline-section";
import { OutcomesSection } from "@/components/landing/sections/outcomes-section";
import { AmbassadorsSection } from "@/components/landing/sections/ambassadors-section";
import { GallerySection } from "@/components/landing/sections/gallery-section";
import { CompaniesSection } from "@/components/landing/sections/companies-section";
import { FaqSection } from "@/components/landing/sections/faq-section";
import { FinalCtaSection } from "@/components/landing/sections/final-cta-section";
import { Button } from "@/components/ui/button";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 448 512"
    aria-hidden="true"
    focusable="false"
    className={className}
  >
    <path
      fill="currentColor"
      d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
    />
  </svg>
);

export function LandingPage() {
  const locale: Locale = "id";
  const whatsappNumber = "628888555591";
  const whatsappDisplay = "+62 888-8555-591";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <MotionProvider>
      <div className="relative overflow-x-clip text-slate-900 dark:text-slate-100">
        <SiteHeader
          locale={locale}
          brand={programContent.brand}
          navItems={programContent.nav}
        />

        <main>
          <HeroSection
            locale={locale}
            content={programContent.hero}
            galleryItems={programContent.gallery.items}
          />
          <AboutSection locale={locale} content={programContent.about} />
          <IncomeSection locale={locale} content={programContent.income} />
          <BenefitsSection locale={locale} content={programContent.benefits} />
          <TimelineSection locale={locale} content={programContent.timeline} />
          <OutcomesSection
            locale={locale}
            content={programContent.outcomes}
            ambassadors={programContent.ambassadors.items}
          />
          <AmbassadorsSection locale={locale} content={programContent.ambassadors} />
          <GallerySection locale={locale} content={programContent.gallery} />
          <CompaniesSection locale={locale} />
          <FaqSection locale={locale} content={programContent.faq} />
          <FinalCtaSection
            locale={locale}
            ctaContent={programContent.finalCta}
            formContent={programContent.form}
          />
        </main>

        <Button
          asChild
          size="lg"
          className="fixed bottom-5 right-5 z-[60] size-12 rounded-full bg-[#25D366] text-sm font-semibold text-white shadow-[0_12px_24px_rgba(37,211,102,0.35)] transition hover:-translate-y-0.5 hover:bg-[#1EBE5D] focus-visible:ring-[#25D366]/60 sm:bottom-6 sm:right-6"
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            aria-label={`Chat WhatsApp ${whatsappDisplay}`}
          >
            <WhatsAppIcon className="size-5" />
          </a>
        </Button>

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
                      href="https://www.instagram.com/dutateladanunivstekom/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Instagram
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
