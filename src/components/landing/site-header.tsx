"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { t } from "@/data/program-content";
import { cn } from "@/lib/utils";
import type { Locale, LocalizedText, NavItem } from "@/types/program";
import { ThemeToggle } from "@/components/landing/theme-toggle";

interface SiteHeaderProps {
  locale: Locale;
  brand: LocalizedText;
  navItems: NavItem[];
}

export function SiteHeader({
  locale,
  brand,
  navItems,
}: SiteHeaderProps) {
  const [activeHref, setActiveHref] = useState(navItems[0]?.href ?? "#hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeaderState = () => {
      setIsScrolled(window.scrollY > 8);

      const offset = 160;
      let currentHref = navItems[0]?.href ?? "#hero";

      for (const item of navItems) {
        if (!item.href.startsWith("#")) continue;

        const section = document.getElementById(item.href.slice(1));
        if (!section) continue;

        if (section.offsetTop - offset <= window.scrollY) {
          currentHref = item.href;
        }
      }

      setActiveHref(currentHref);
    };

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });
    window.addEventListener("resize", updateHeaderState);

    return () => {
      window.removeEventListener("scroll", updateHeaderState);
      window.removeEventListener("resize", updateHeaderState);
    };
  }, [navItems]);

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeOnDesktop);
    return () => window.removeEventListener("resize", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  const handleNavClick = (href: string) => {
    setActiveHref(href);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-white/70 bg-white/80 backdrop-blur-xl transition-all duration-300 dark:border-slate-700/70 dark:bg-slate-950/80",
        isScrolled &&
          "bg-white/90 shadow-[0_10px_30px_-20px_rgba(15,23,42,0.55)] dark:bg-slate-950/90 dark:shadow-[0_12px_34px_-24px_rgba(2,6,23,0.95)]",
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-7xl items-center justify-between gap-2 px-3 transition-all sm:gap-3 sm:px-8",
          isScrolled ? "h-14" : "h-16",
        )}
      >
        <Link
          href="#hero"
          className="inline-flex items-center transition hover:opacity-90"
          onClick={() => handleNavClick("#hero")}
        >
          <span
            className={cn(
              "inline-flex items-center justify-center rounded-md border border-slate-200/70 bg-white/90 shadow-sm transition-all dark:border-slate-700/80 dark:bg-slate-900/85",
              isScrolled
                ? "h-11 w-[154px] sm:w-[198px]"
                : "h-12 w-[164px] sm:w-[214px]",
            )}
          >
            <Image
              src="/images/logoduta.png"
              alt={t(brand, locale)}
              width={320}
              height={76}
              priority
              unoptimized
              className={cn("w-auto transition-all", isScrolled ? "h-6 sm:h-7" : "h-7 sm:h-8")}
            />
          </span>
          <span className="sr-only">{t(brand, locale)}</span>
        </Link>

        <nav className="hidden min-w-0 flex-1 justify-center lg:flex">
          <ul className="flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-white/80 bg-white/85 p-1 shadow-sm dark:border-slate-700/80 dark:bg-slate-900/85">
            {navItems.map((item) => {
              const isActive = activeHref === item.href;

              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "inline-flex whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium transition",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-slate-600 hover:bg-primary/10 hover:text-primary dark:text-slate-300 dark:hover:bg-primary/20",
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {t(item.label, locale)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle compact />

          <Link
            href="#daftar"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 sm:inline-flex"
          >
            Daftar
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex size-9 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-sm transition hover:border-primary/40 hover:text-primary dark:border-slate-700 dark:bg-slate-900/85 dark:text-slate-200 sm:size-10 lg:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
          >
            {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-slate-200/70 bg-white/95 px-4 backdrop-blur-xl transition-all duration-300 dark:border-slate-700/70 dark:bg-slate-950/95 lg:hidden",
          isMenuOpen
            ? "max-h-[calc(100dvh-4rem)] overflow-y-auto py-4 opacity-100 overscroll-contain"
            : "max-h-0 overflow-hidden py-0 opacity-0",
        )}
      >
        <nav className="mx-auto w-full max-w-7xl">
          <ul className="grid gap-2">
            {navItems.map((item) => {
              const isActive = activeHref === item.href;

              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-sm font-medium transition",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "bg-slate-50 text-slate-700 hover:bg-primary/10 hover:text-primary dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-primary/20",
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {t(item.label, locale)}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="#daftar"
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 inline-flex w-full justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 sm:hidden"
          >
            Daftar Sekarang
          </Link>
        </nav>
      </div>
    </header>
  );
}
