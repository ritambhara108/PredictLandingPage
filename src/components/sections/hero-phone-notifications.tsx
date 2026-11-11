"use client";

/**
 * iPhone lock-screen notification demo (aimodel-style).
 * Kept for the About section — not used in the hero.
 */

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { BRAND } from "@/lib/brand";
import { cn } from "@/lib/utils";

const easeOut = [0.22, 1, 0.36, 1] as const;

const NOTIFICATIONS = [
  {
    id: "referral",
    title: "Referral commission",
    detail: "You earned 2.50 USDT from Priya S. joining.",
  },
  {
    id: "win",
    title: "You won this prediction",
    detail: "Nifty above 25,000 — payout 18.40 USDT.",
  },
  {
    id: "withdraw",
    title: "Withdrawal successful",
    detail: "49.20 USDT sent to your wallet.",
  },
  {
    id: "referral-2",
    title: "Referral commission",
    detail: "You earned 1.25 USDT from Kabir N.",
  },
  {
    id: "deposit",
    title: "Deposit credited",
    detail: "50.00 USDT is now in your balance.",
  },
] as const;

function readClock(date = new Date()) {
  return {
    time: date.toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "2-digit",
    }),
    date: date.toLocaleDateString(undefined, {
      weekday: "long",
      day: "numeric",
      month: "long",
    }),
  };
}

export function HeroPhoneNotifications({
  className = "",
}: {
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(reduce ? NOTIFICATIONS.length : 0);
  const [paused, setPaused] = useState(false);
  const [clock, setClock] = useState<{ time: string; date: string } | null>(
    null,
  );
  const visible = NOTIFICATIONS.slice(
    0,
    reduce ? NOTIFICATIONS.length : count,
  ).reverse();

  useEffect(() => {
    const tick = () => setClock(readClock());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (reduce || paused) return;
    const wait =
      count === 0 ? 600 : count >= NOTIFICATIONS.length ? 2200 : 1100;
    const id = window.setTimeout(() => {
      setCount((current) =>
        current >= NOTIFICATIONS.length ? 0 : current + 1,
      );
    }, wait);
    return () => window.clearTimeout(id);
  }, [count, paused, reduce]);

  return (
    <div
      className={cn(
        "w-[270px] max-w-full rounded-[40px] border border-hairline bg-canvas p-[8px]",
        "shadow-[0_1px_1px_rgba(0,0,0,0.04),0_28px_54px_-22px_rgba(14,118,255,0.28)]",
        "dark:shadow-[0_28px_54px_-22px_rgba(0,0,0,0.55)]",
        className,
      )}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-hidden
    >
      <div className="relative h-[500px] overflow-hidden rounded-[32px] bg-[radial-gradient(ellipse_at_top,color-mix(in_srgb,var(--primary)_14%,#eef2ff)_0%,var(--surface-soft)_44%,color-mix(in_srgb,var(--surface-card)_80%,transparent)_100%)] dark:bg-[radial-gradient(ellipse_at_top,color-mix(in_srgb,var(--primary)_22%,#0c0c0d)_0%,#0c0c0d_48%,#161618_100%)]">
        <div className="flex items-center justify-between px-5 pt-3 text-[11px] font-semibold tracking-[-0.02em] text-ink">
          <span>{clock?.time ?? "\u00a0"}</span>
          <span className="inline-flex items-center gap-1">
            <svg viewBox="0 0 18 12" className="h-2.5 w-4" aria-hidden>
              <rect x="0" y="7" width="3" height="5" rx="0.6" fill="currentColor" />
              <rect x="4.5" y="4.5" width="3" height="7.5" rx="0.6" fill="currentColor" />
              <rect x="9" y="2" width="3" height="10" rx="0.6" fill="currentColor" />
              <rect
                x="13.5"
                y="0"
                width="3"
                height="12"
                rx="0.6"
                fill="currentColor"
                opacity="0.35"
              />
            </svg>
            <svg viewBox="0 0 25 12" className="h-2.5 w-6" aria-hidden>
              <rect
                x="0.5"
                y="0.5"
                width="21"
                height="11"
                rx="2.5"
                fill="none"
                stroke="currentColor"
                strokeOpacity="0.45"
              />
              <rect x="2" y="2" width="14" height="8" rx="1.2" fill="currentColor" />
              <rect
                x="22.5"
                y="3.5"
                width="1.5"
                height="5"
                rx="0.6"
                fill="currentColor"
                opacity="0.45"
              />
            </svg>
          </span>
        </div>

        <span
          aria-hidden
          className="absolute top-2.5 left-1/2 h-[20px] w-[86px] -translate-x-1/2 rounded-full bg-[#111318]"
        />

        <p className="mt-7 text-center text-[36px] leading-none font-semibold tracking-[-0.04em] text-ink">
          {clock?.time ?? "\u00a0"}
        </p>
        <p className="mt-1 text-center text-[12px] text-muted">
          {clock?.date ?? "\u00a0"}
        </p>

        <ol className="mt-5 flex flex-col gap-2 px-2.5">
          <AnimatePresence initial={false}>
            {visible.map((item) => (
              <motion.li
                key={item.id}
                layout
                initial={reduce ? false : { opacity: 0, y: -28, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={reduce ? undefined : { opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.45, ease: easeOut }}
                className="flex items-start gap-2.5 rounded-[16px] bg-canvas/85 px-2.5 py-2 shadow-[0_10px_24px_-16px_rgba(0,0,0,0.35)] backdrop-blur-md dark:bg-surface-card/90"
              >
                <span className="grid size-8 shrink-0 place-items-center overflow-hidden rounded-[9px] bg-primary/10 ring-1 ring-primary/15">
                  <Image
                    src={BRAND.iconSrc}
                    alt=""
                    width={20}
                    height={20}
                    className="size-5 rounded-md object-cover"
                  />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-baseline justify-between gap-2">
                    <span className="text-[10px] font-semibold tracking-[-0.01em] text-ink">
                      {BRAND.wordmark}
                    </span>
                    <span className="font-mono text-[9px] text-muted">
                      {clock?.time ?? ""}
                    </span>
                  </span>
                  <span className="mt-0.5 block text-[12px] leading-4 font-semibold tracking-[-0.02em] text-ink">
                    {item.title}
                  </span>
                  <span className="mt-0.5 block truncate text-[11px] text-muted">
                    {item.detail}
                  </span>
                </span>
              </motion.li>
            ))}
          </AnimatePresence>
        </ol>
      </div>
    </div>
  );
}
