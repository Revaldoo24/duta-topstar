"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type ThemeMode = "light" | "dark";

const themeStorageKey = "duta-teladan-theme";
const themeEventName = "duta-theme-change";

function getPreferredTheme(): ThemeMode {
  if (typeof window === "undefined") return "light";

  const stored = window.localStorage.getItem(themeStorageKey);
  if (stored === "light" || stored === "dark") return stored;

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: ThemeMode) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

interface ThemeToggleProps {
  className?: string;
  compact?: boolean;
}

export function ThemeToggle({ className, compact = false }: ThemeToggleProps) {
  const [theme, setTheme] = useState<ThemeMode>("light");
  const isDark = theme === "dark";

  useEffect(() => {
    const syncTheme = () => {
      const current = getPreferredTheme();
      setTheme(current);
      applyTheme(current);
    };

    syncTheme();
    window.addEventListener(themeEventName, syncTheme);

    return () => {
      window.removeEventListener(themeEventName, syncTheme);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme: ThemeMode = isDark ? "light" : "dark";
    setTheme(nextTheme);
    applyTheme(nextTheme);
    window.localStorage.setItem(themeStorageKey, nextTheme);
    window.dispatchEvent(new Event(themeEventName));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-lg backdrop-blur-sm transition hover:scale-[1.02] hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-primary/45 focus-visible:outline-none dark:border-slate-600/80 dark:bg-slate-900/85 dark:text-slate-100 dark:hover:text-white",
        compact && "size-10 p-0",
        className,
      )}
      aria-label={isDark ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
      aria-pressed={isDark}
    >
      {isDark ? <Moon className="size-4" /> : <Sun className="size-4" />}
      {!compact && <span>{isDark ? "Dark" : "Light"}</span>}
    </button>
  );
}
