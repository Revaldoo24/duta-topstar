"use client";

import Image from "next/image";

import type { Locale } from "@/types/program";
import { SectionShell } from "@/components/landing/section-shell";

const companyLogos = [
  {
    src: "/images/companies/1639532557_0d92b4396a2f2c1df96e (3).png",
    name: "Partner 1",
  },
  {
    src: "/images/companies/5N71zUDViF8gjbezG9NayWuiLyIeKWlpaJTOzOsU.png",
    name: "Partner 2",
  },
  {
    src: "/images/companies/Logo Toploker Verifikasi 2 (1).png",
    name: "TopLoker.com",
  },
];

interface CompaniesSectionProps {
  locale: Locale;
}

export function CompaniesSection({ locale }: CompaniesSectionProps) {
  return (
    <SectionShell
      id="didukung"
      title={locale === "id" ? "Didukung oleh" : "Supported by"}
      contentClassName="mt-8 sm:mt-10"
    >
      <div className="rounded-3xl border border-slate-200/70 bg-white/90 p-5 shadow-sm sm:p-8 dark:border-slate-700/80 dark:bg-slate-900/85 dark:shadow-none">
        <div className="grid items-center gap-4 sm:grid-cols-3 sm:gap-6">
          {companyLogos.map((logo) => (
            <div
              key={logo.src}
              className="flex items-center justify-center rounded-2xl border border-slate-200/70 bg-white px-4 py-4 shadow-sm sm:px-6 sm:py-5 dark:border-slate-700/70 dark:bg-slate-900/80"
            >
              <Image
                src={logo.src}
                alt={`Logo ${logo.name}`}
                width={320}
                height={140}
                className="h-10 w-auto object-contain sm:h-14"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
