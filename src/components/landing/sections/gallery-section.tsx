"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Expand } from "lucide-react";

import { t } from "@/data/program-content";
import { cn } from "@/lib/utils";
import type { Locale, ProgramContent } from "@/types/program";
import { FadeInUp } from "@/components/landing/motion";
import { SectionShell } from "@/components/landing/section-shell";

const DynamicGalleryLightbox = dynamic(
  () =>
    import("@/components/landing/gallery-lightbox").then(
      (module) => module.GalleryLightbox,
    ),
  {
    ssr: false,
    loading: () => null,
  },
);

interface GallerySectionProps {
  locale: Locale;
  content: ProgramContent["gallery"];
}

function getGalleryLayout(index: number, total: number) {
  if (total >= 6) {
    const featuredPattern = [
      { wrapper: "sm:col-span-2 lg:col-span-7", media: "aspect-[16/10]" },
      { wrapper: "sm:col-span-1 lg:col-span-5", media: "aspect-[4/3]" },
      { wrapper: "sm:col-span-1 lg:col-span-5", media: "aspect-[4/3]" },
      { wrapper: "sm:col-span-2 lg:col-span-7", media: "aspect-[16/10]" },
      { wrapper: "sm:col-span-1 lg:col-span-6", media: "aspect-[5/4]" },
      { wrapper: "sm:col-span-1 lg:col-span-6", media: "aspect-[5/4]" },
    ];

    return (
      featuredPattern[index] ?? {
        wrapper: "sm:col-span-1 lg:col-span-4",
        media: "aspect-[4/3]",
      }
    );
  }

  return {
    wrapper: "sm:col-span-1 lg:col-span-4",
    media: "aspect-[4/3]",
  };
}

export function GallerySection({ locale, content }: GallerySectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionShell
      id="galeri"
      eyebrow={t(content.eyebrow, locale)}
      title={t(content.title, locale)}
      description={t(content.description, locale)}
      contentClassName="mt-10 sm:mt-12"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
        {content.items.map((item, index) => {
          const layout = getGalleryLayout(index, content.items.length);

          return (
            <FadeInUp key={item.id} className={layout.wrapper}>
              <button
                type="button"
                onClick={() => setOpenIndex(index)}
                className={cn(
                  "group relative block w-full overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-100/80 dark:border-slate-700/80 dark:bg-slate-900/85 dark:shadow-none dark:hover:shadow-[0_16px_30px_-22px_rgba(59,130,246,0.5)]",
                  layout.media,
                )}
              >
                <Image
                  src={item.src}
                  alt={t(item.alt, locale)}
                  width={item.width}
                  height={item.height}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-slate-950/55 via-slate-900/10 to-transparent p-4 opacity-100 sm:opacity-0 sm:transition sm:duration-300 sm:group-hover:opacity-100">
                  <div className="flex w-full items-center justify-between gap-2 rounded-xl bg-white/90 px-3 py-2 backdrop-blur-sm dark:bg-slate-900/90">
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                      {t(item.title, locale)}
                    </p>
                    <Expand className="size-4 text-slate-500 dark:text-slate-300" />
                  </div>
                </div>
              </button>
            </FadeInUp>
          );
        })}
      </div>

      <DynamicGalleryLightbox
        locale={locale}
        items={content.items}
        openIndex={openIndex}
        onOpenChange={setOpenIndex}
      />
    </SectionShell>
  );
}
