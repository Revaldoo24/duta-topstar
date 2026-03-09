"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { t } from "@/data/program-content";
import type { GalleryItem, Locale } from "@/types/program";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

interface GalleryLightboxProps {
  locale: Locale;
  items: GalleryItem[];
  openIndex: number | null;
  onOpenChange: (nextIndex: number | null) => void;
}

export function GalleryLightbox({
  locale,
  items,
  openIndex,
  onOpenChange,
}: GalleryLightboxProps) {
  const activeItem = openIndex !== null ? items[openIndex] : null;

  const move = (direction: "prev" | "next") => {
    if (openIndex === null) return;

    const offset = direction === "next" ? 1 : -1;
    const nextIndex = (openIndex + offset + items.length) % items.length;
    onOpenChange(nextIndex);
  };

  return (
    <Dialog
      open={openIndex !== null}
      onOpenChange={(open) => {
        if (!open) onOpenChange(null);
      }}
    >
      {activeItem && (
        <DialogContent className="max-w-4xl border-white/80 bg-white p-4 sm:p-6 dark:border-slate-700/80 dark:bg-slate-950/95">
          <DialogTitle className="sr-only">{t(activeItem.title, locale)}</DialogTitle>
          <DialogDescription className="sr-only">
            {t(activeItem.alt, locale)}
          </DialogDescription>

          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-900">
            <Image
              src={activeItem.src}
              alt={t(activeItem.alt, locale)}
              width={activeItem.width}
              height={activeItem.height}
              className="h-auto w-full object-cover"
              priority={false}
            />
          </div>

          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-medium text-slate-600 sm:text-base dark:text-slate-300">
              {t(activeItem.title, locale)}
            </p>
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                size="icon-sm"
                className="rounded-full"
                onClick={() => move("prev")}
              >
                <ChevronLeft />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon-sm"
                className="rounded-full"
                onClick={() => move("next")}
              >
                <ChevronRight />
              </Button>
            </div>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}
