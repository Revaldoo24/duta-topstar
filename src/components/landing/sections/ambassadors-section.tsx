"use client";

import Image from "next/image";
import { Crown, Medal, Sparkles } from "lucide-react";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { t } from "@/data/program-content";
import { cn } from "@/lib/utils";
import type { AmbassadorItem, Locale, ProgramContent } from "@/types/program";
import { FadeInUp, StaggerGroup, StaggerItem } from "@/components/landing/motion";
import { SectionShell } from "@/components/landing/section-shell";

const rankStyles = [
  {
    ring: "ring-blue-200/90",
    badge: "from-blue-600 to-blue-500",
    panel: "from-blue-600 via-blue-500 to-sky-500",
    progress: "from-blue-500 via-sky-500 to-cyan-400",
  },
  {
    ring: "ring-violet-200/90",
    badge: "from-violet-600 to-fuchsia-500",
    panel: "from-violet-600 via-fuchsia-500 to-pink-500",
    progress: "from-violet-500 via-fuchsia-500 to-pink-500",
  },
  {
    ring: "ring-rose-200/90",
    badge: "from-rose-600 to-orange-500",
    panel: "from-rose-600 via-orange-500 to-amber-500",
    progress: "from-rose-500 via-orange-500 to-amber-400",
  },
  {
    ring: "ring-emerald-200/90",
    badge: "from-emerald-600 to-teal-500",
    panel: "from-emerald-600 via-teal-500 to-cyan-500",
    progress: "from-emerald-500 via-teal-500 to-cyan-500",
  },
];

const followersFormatter = new Intl.NumberFormat("en-US");
const SLOW_TAIL_DIGITS = 200;
const POPUP_WIDTH_PX = 420;
const POPUP_HEIGHT_PX = 316;
const POPUP_IMAGE_SIZE_PX = 168;

interface TailSchedule {
  stepMs: number;
  startDelayMs: number;
}

interface RankedAmbassador extends AmbassadorItem {
  topPlatform: "TikTok" | "Instagram";
  topFollowers: number;
}

const TAIL_SCHEDULE_BY_RANK: Record<number, TailSchedule> = {
  1: { stepMs: 4000, startDelayMs: 320 },
  2: { stepMs: 2000, startDelayMs: 780 },
  3: { stepMs: 1000, startDelayMs: 160 },
  4: { stepMs: 500, startDelayMs: 640 },
  5: { stepMs: 1500, startDelayMs: 1080 },
};

function formatFollowers(value: number) {
  return followersFormatter.format(value);
}

function getTopPlatform(item: AmbassadorItem): Pick<RankedAmbassador, "topPlatform" | "topFollowers"> {
  if (item.tiktokFollowers >= item.instagramFollowers) {
    return {
      topPlatform: "TikTok",
      topFollowers: item.tiktokFollowers,
    };
  }

  return {
    topPlatform: "Instagram",
    topFollowers: item.instagramFollowers,
  };
}

function sortAmbassadors(items: AmbassadorItem[]): RankedAmbassador[] {
  return items
    .map((item) => ({ ...item, ...getTopPlatform(item) }))
    .sort((a, b) => b.topFollowers - a.topFollowers);
}

function ProfileGlassPreview({
  item,
  locale,
  ringClassName,
  avatarSize,
  avatarClassName,
  popupWidthPx = POPUP_WIDTH_PX,
  popupHeightPx = POPUP_HEIGHT_PX,
  popupImageSize = POPUP_IMAGE_SIZE_PX,
  wrapperClassName,
  popupPositionClassName,
}: {
  item: RankedAmbassador;
  locale: Locale;
  ringClassName: string;
  avatarSize: number;
  avatarClassName: string;
  popupWidthPx?: number;
  popupHeightPx?: number;
  popupImageSize?: number;
  wrapperClassName?: string;
  popupPositionClassName?: string;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const popupRef = useRef<HTMLDivElement | null>(null);
  const OFFSET = 12;
  const SCREEN_MARGIN = 10;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const updatePopupPosition = () => {
      const trigger = triggerRef.current;
      if (!trigger) return;

      const rect = trigger.getBoundingClientRect();
      const effectivePopupWidth = Math.min(
        popupWidthPx,
        window.innerWidth - SCREEN_MARGIN * 2,
      );
      const effectivePopupHeight = Math.min(
        popupHeightPx,
        window.innerHeight - SCREEN_MARGIN * 2,
      );
      let left = rect.right + OFFSET;
      let top = rect.top + rect.height / 2 - effectivePopupHeight / 2;

      if (left + effectivePopupWidth > window.innerWidth - SCREEN_MARGIN) {
        left = rect.left - effectivePopupWidth - OFFSET;
      }

      if (left < SCREEN_MARGIN) {
        left = SCREEN_MARGIN;
      }

      if (top + effectivePopupHeight > window.innerHeight - SCREEN_MARGIN) {
        top = window.innerHeight - effectivePopupHeight - SCREEN_MARGIN;
      }

      if (top < SCREEN_MARGIN) {
        top = SCREEN_MARGIN;
      }

      setPopupPosition({ top, left });
    };

    updatePopupPosition();
    window.addEventListener("resize", updatePopupPosition);
    window.addEventListener("scroll", updatePopupPosition, true);

    return () => {
      window.removeEventListener("resize", updatePopupPosition);
      window.removeEventListener("scroll", updatePopupPosition, true);
    };
  }, [open, popupHeightPx, popupWidthPx]);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (
        !triggerRef.current?.contains(target) &&
        !popupRef.current?.contains(target)
      ) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className={cn("relative inline-flex", wrapperClassName)}>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((previous) => !previous)}
        className={cn(
          "relative inline-flex rounded-full bg-white p-1.5 transition hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-primary/45 focus-visible:outline-none dark:bg-slate-900",
          ringClassName,
        )}
        aria-expanded={open}
        aria-label={locale === "id" ? `Lihat profil ${item.name}` : `View ${item.name} profile`}
      >
        <Image
          src={item.photo}
          alt={`Foto ${item.name}`}
          width={avatarSize}
          height={avatarSize}
          className={cn("rounded-full object-cover", avatarClassName)}
          unoptimized
        />
      </button>

      {mounted &&
        createPortal(
          <div
            ref={popupRef}
            style={{
              left: popupPosition.left,
              top: popupPosition.top,
              width: popupWidthPx,
              maxWidth: `calc(100vw - ${SCREEN_MARGIN * 2}px)`,
            }}
            className={cn(
              "fixed z-[120] w-[min(92vw,24rem)] transition-all duration-280",
              popupPositionClassName,
              open
                ? "pointer-events-auto scale-100 opacity-100"
                : "pointer-events-none scale-95 opacity-0",
            )}
          >
            <article className="rounded-2xl border border-white/25 bg-[linear-gradient(145deg,rgba(8,15,28,0.72)_0%,rgba(20,29,46,0.62)_55%,rgba(5,12,25,0.72)_100%)] p-3 text-white shadow-[0_18px_48px_-20px_rgba(15,23,42,0.95)] backdrop-blur-xl">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                <Image
                  src={item.photo}
                  alt={`Foto ${item.name}`}
                  width={popupImageSize}
                  height={popupImageSize}
                  style={{
                    width: popupImageSize,
                    height: popupImageSize,
                    maxWidth: "100%",
                    maxHeight: "55vw",
                  }}
                  className="h-auto w-full rounded-xl object-cover sm:h-auto sm:w-auto"
                  unoptimized
                />
                <div className="min-w-0">
                  <p className="line-clamp-2 text-sm font-extrabold leading-tight">{item.name}</p>
                  <p className="mt-1 line-clamp-2 text-xs text-slate-200">{item.school}</p>
                  <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.09em] text-blue-200">
                    {locale === "id" ? "Followers Tertinggi" : "Highest Followers"}
                  </p>
                  <p className="mt-0.5 text-lg font-extrabold text-white">
                    {formatFollowers(item.topFollowers)}
                  </p>
                </div>
              </div>
            </article>
          </div>,
          document.body,
        )}
    </div>
  );
}

function useCountUp(
  target: number,
  isActive: boolean,
  fastDuration: number,
  finalDigits: number,
  tailStepMs: number,
  tailStartDelayMs: number,
) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    let rafId = 0;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const normalizedTarget = Math.max(Math.round(target), 0);
    const normalizedFinalDigits = Math.max(Math.round(finalDigits), 0);
    const normalizedTailStepMs = Math.max(Math.round(tailStepMs), 16);
    const normalizedTailStartDelayMs = Math.max(Math.round(tailStartDelayMs), 0);
    const slowStart = Math.max(normalizedTarget - normalizedFinalDigits, 0);
    const startedAt = performance.now();

    const runSlowTail = (from: number) => {
      let current = from;

      const step = () => {
        if (current >= normalizedTarget) return;

        current = Math.min(current + 1, normalizedTarget);
        setValue(current);

        if (current < normalizedTarget) {
          timeoutId = setTimeout(step, normalizedTailStepMs);
        }
      };

      timeoutId = setTimeout(step, normalizedTailStepMs + normalizedTailStartDelayMs);
    };

    const tick = (now: number) => {
      const elapsed = now - startedAt;
      const progress = Math.min(elapsed / fastDuration, 1);

      const easedProgress = 1 - Math.pow(1 - progress, 4);
      const nextValue = Math.round(slowStart * easedProgress);

      setValue((previous) => (nextValue > previous ? nextValue : previous));

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setValue(slowStart);
        if (slowStart < normalizedTarget) {
          runSlowTail(slowStart);
        }
      }
    };

    setValue(0);
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [target, isActive, fastDuration, finalDigits, tailStepMs, tailStartDelayMs]);

  return isActive ? value : 0;
}

function AnimatedFollowers({
  target,
  fastDuration = 900,
  finalDigits = 2,
  tailStepMs = 1000,
  tailStartDelayMs = 0,
  className,
}: {
  target: number;
  fastDuration?: number;
  finalDigits?: number;
  tailStepMs?: number;
  tailStartDelayMs?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.55 });
  const value = useCountUp(
    target,
    isInView,
    fastDuration,
    finalDigits,
    tailStepMs,
    tailStartDelayMs,
  );

  return (
    <span ref={ref} className={className}>
      {formatFollowers(value)}
    </span>
  );
}

function AmbassadorRow({
  item,
  locale,
  rank,
  maxFollowers,
  styleIndex,
  followersLabel,
  tailSchedule,
}: {
  item: RankedAmbassador;
  locale: Locale;
  rank: number;
  maxFollowers: number;
  styleIndex: number;
  followersLabel: string;
  tailSchedule: TailSchedule;
}) {
  const style = rankStyles[styleIndex % rankStyles.length];
  const contribution = Math.max((item.topFollowers / maxFollowers) * 100, 10);

  return (
    <article className="group relative isolate overflow-hidden rounded-2xl border border-white/70 bg-white/85 p-3 shadow-[0_14px_42px_-30px_rgba(15,23,42,0.9)] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_52px_-30px_rgba(37,99,235,0.65)] sm:p-4 dark:border-slate-700/80 dark:bg-slate-900/85 dark:shadow-none dark:hover:shadow-[0_16px_30px_-22px_rgba(59,130,246,0.5)]">
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-white/55 via-white/10 to-white/45 opacity-0 transition duration-300 group-hover:opacity-100" />

      <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        <div className="flex min-w-0 items-center gap-2.5 sm:flex-1 sm:gap-3">
          <div className={cn("inline-flex min-w-[58px] items-center justify-center gap-1 rounded-full bg-gradient-to-r px-2.5 py-1 text-xs font-black tracking-[0.06em] text-white sm:w-fit sm:px-3", style.badge)}>
            <Medal className="size-3.5" />
            #{rank}
          </div>

          <ProfileGlassPreview
            item={item}
            locale={locale}
            ringClassName={cn("shadow-sm ring-2", style.ring)}
            avatarSize={44}
            avatarClassName="size-10 sm:size-12"
            popupWidthPx={POPUP_WIDTH_PX}
            popupHeightPx={POPUP_HEIGHT_PX}
            popupImageSize={POPUP_IMAGE_SIZE_PX}
          />

          <div className="min-w-0 flex-1">
            <h3 className="line-clamp-2 text-[0.95rem] font-bold leading-tight text-slate-900 sm:truncate sm:text-lg dark:text-slate-100" title={item.name}>
              {item.name}
            </h3>
            <p className="mt-0.5 line-clamp-1 text-xs font-medium text-slate-600 sm:truncate sm:text-sm dark:text-slate-300" title={item.school}>
              {item.school}
            </p>
          </div>
        </div>

        <div className={cn("rounded-xl bg-gradient-to-r px-3.5 py-2.5 text-white shadow-lg shadow-blue-200/70 sm:ml-auto sm:min-w-[182px] sm:px-4 sm:text-right", style.panel)}>
          <p className="text-[11px] font-semibold tracking-[0.1em] text-white/80 uppercase">
            {followersLabel}
          </p>
          <AnimatedFollowers
            target={item.topFollowers}
            fastDuration={900}
            finalDigits={SLOW_TAIL_DIGITS}
            tailStepMs={tailSchedule.stepMs}
            tailStartDelayMs={tailSchedule.startDelayMs}
            className="mt-1 block text-[1.75rem] font-black leading-none tracking-tight sm:text-2xl"
          />
        </div>
      </div>

      <div className="relative mt-3 h-1.5 overflow-hidden rounded-full bg-slate-200/80 sm:mt-3.5 dark:bg-slate-700/70">
        <div
          className={cn("h-full rounded-full bg-gradient-to-r transition-all duration-500", style.progress)}
          style={{ width: `${contribution}%` }}
        />
      </div>
    </article>
  );
}

interface AmbassadorsSectionProps {
  locale: Locale;
  content: ProgramContent["ambassadors"];
}

export function AmbassadorsSection({ locale, content }: AmbassadorsSectionProps) {
  const rankedAmbassadors = sortAmbassadors(content.items);
  const leader = rankedAmbassadors[0];

  if (!leader) {
    return null;
  }

  const challengers = rankedAmbassadors.slice(1);
  const followersLabel = t(content.followersLabel, locale);
  const leaderTailSchedule = TAIL_SCHEDULE_BY_RANK[1];

  return (
    <SectionShell
      id="duta"
      eyebrow={t(content.eyebrow, locale)}
      title={t(content.title, locale)}
      description={t(content.description, locale)}
      contentClassName="mt-10 sm:mt-12"
    >
      <div className="relative isolate overflow-hidden rounded-[1.85rem] border border-white/65 bg-[linear-gradient(140deg,#eaf2ff_0%,#f2f6ff_35%,#fff5fb_100%)] p-3 shadow-[0_26px_70px_-44px_rgba(30,64,175,0.85)] sm:rounded-[2.1rem] sm:p-6 lg:p-8 dark:border-slate-700/70 dark:bg-[linear-gradient(140deg,#141f36_0%,#18243f_35%,#281d39_100%)] dark:shadow-none">
        <div className="pointer-events-none absolute -top-20 left-[15%] h-44 w-44 rounded-full bg-blue-300/30 blur-2xl" />
        <div className="pointer-events-none absolute -right-16 bottom-4 h-48 w-48 rounded-full bg-fuchsia-300/25 blur-2xl" />
        <div className="pointer-events-none absolute inset-x-4 top-4 h-20 rounded-2xl bg-[linear-gradient(90deg,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.18)_38%,rgba(255,255,255,0.68)_100%)] dark:bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.02)_38%,rgba(255,255,255,0.08)_100%)]" />

        <div className="relative grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <FadeInUp>
            <article className="relative isolate h-full overflow-hidden rounded-[1.6rem] border border-white/70 bg-[linear-gradient(160deg,rgba(255,255,255,0.94)_0%,rgba(248,252,255,0.89)_55%,rgba(242,249,255,0.94)_100%)] p-4 shadow-[0_22px_68px_-36px_rgba(15,23,42,0.75)] sm:rounded-[1.9rem] sm:p-7 dark:border-slate-700/80 dark:bg-[linear-gradient(160deg,rgba(15,23,42,0.88)_0%,rgba(17,24,39,0.84)_55%,rgba(30,27,52,0.88)_100%)] dark:shadow-none">
              <div className="pointer-events-none absolute -top-14 right-8 h-32 w-32 rounded-full bg-amber-300/35 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-8 h-36 w-36 rounded-full bg-blue-300/25 blur-2xl" />

              <div className="relative flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-100/90 px-3 py-1 text-xs font-black text-amber-700">
                  <Sparkles className="size-3.5" />
                  {locale === "id" ? "Champion" : "Champion"}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-3 py-1 text-xs font-black text-white">
                  <Crown className="size-3.5 text-amber-300" />
                  #1
                </span>
              </div>

              <div className="mt-5 flex items-center gap-3.5 sm:mx-auto sm:mt-6 sm:w-fit sm:flex-col sm:gap-0">
                <ProfileGlassPreview
                  item={leader}
                  locale={locale}
                  ringClassName="bg-white/95 p-1.5 shadow-lg ring-4 ring-amber-200/90 sm:p-2 dark:bg-slate-900/90 dark:ring-amber-400/70"
                  avatarSize={124}
                  avatarClassName="size-24 sm:size-[8.5rem]"
                  popupWidthPx={POPUP_WIDTH_PX}
                  popupHeightPx={POPUP_HEIGHT_PX}
                  popupImageSize={POPUP_IMAGE_SIZE_PX}
                />

                <div className="min-w-0 sm:mt-6 sm:text-center">
                  <h3 className="line-clamp-2 text-left text-xl font-extrabold leading-tight text-slate-900 sm:text-center sm:text-[2.25rem] dark:text-slate-100">
                    {leader.name}
                  </h3>
                  <p className="mt-1 text-left text-sm font-semibold text-slate-600 sm:text-center sm:text-base dark:text-slate-300">
                    {leader.school}
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 px-4 py-3 text-white shadow-lg shadow-blue-200/65 sm:mt-6 dark:shadow-[0_16px_30px_-22px_rgba(59,130,246,0.55)]">
                <p className="text-[11px] font-semibold tracking-[0.1em] text-white/80 uppercase">{followersLabel}</p>
                <AnimatedFollowers
                  target={leader.topFollowers}
                  fastDuration={1050}
                  finalDigits={SLOW_TAIL_DIGITS}
                  tailStepMs={leaderTailSchedule.stepMs}
                  tailStartDelayMs={leaderTailSchedule.startDelayMs}
                  className="mt-1 block text-[2rem] font-black leading-none tracking-tight sm:text-3xl"
                />
              </div>
            </article>
          </FadeInUp>

          <StaggerGroup className="grid gap-3.5 sm:gap-4" stagger={0.08} delay={0.06}>
            {challengers.map((item, index) => {
              const rank = index + 2;
              const tailSchedule = TAIL_SCHEDULE_BY_RANK[rank] ?? TAIL_SCHEDULE_BY_RANK[5];

              return (
                <StaggerItem key={item.id}>
                  <AmbassadorRow
                    item={item}
                    locale={locale}
                    rank={rank}
                    maxFollowers={leader.topFollowers}
                    styleIndex={index + 1}
                    followersLabel={followersLabel}
                    tailSchedule={tailSchedule}
                  />
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </div>
    </SectionShell>
  );
}
