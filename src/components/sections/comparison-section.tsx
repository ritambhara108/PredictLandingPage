"use client";

import { IconXFilled } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { SectionShell } from "./section-shell";

function RulesEditIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <g clipPath="url(#comparison-rules-edit-clip)">
        <path
          opacity="0.4"
          d="M15.48 3H7.52C4.07 3 2 5.06 2 8.52V16.47C2 19.94 4.07 22 7.52 22H15.47C18.93 22 20.99 19.94 20.99 16.48V8.52C21 5.06 18.93 3 15.48 3Z"
        />
        <path d="M21.02 2.98028C19.23 1.18028 17.48 1.14028 15.64 2.98028L14.51 4.10028C14.41 4.20028 14.38 4.34028 14.42 4.47028C15.12 6.92028 17.08 8.88028 19.53 9.58028C19.56 9.59028 19.61 9.59028 19.64 9.59028C19.74 9.59028 19.84 9.55028 19.91 9.48028L21.02 8.36028C21.93 7.45028 22.38 6.58028 22.38 5.69028C22.38 4.79028 21.93 3.90028 21.02 2.98028Z" />
        <path d="M17.8601 10.4198C17.5901 10.2898 17.3301 10.1598 17.0901 10.0098C16.8901 9.88984 16.6901 9.75984 16.5001 9.61984C16.3401 9.51984 16.1601 9.36984 15.9801 9.21984C15.9601 9.20984 15.9001 9.15984 15.8201 9.07984C15.5101 8.82984 15.1801 8.48984 14.8701 8.11984C14.8501 8.09984 14.7901 8.03984 14.7401 7.94984C14.6401 7.83984 14.4901 7.64984 14.3601 7.43984C14.2501 7.29984 14.1201 7.09984 14.0001 6.88984C13.8501 6.63984 13.7201 6.38984 13.6001 6.12984C13.4701 5.84984 13.3701 5.58984 13.2801 5.33984L7.9001 10.7198C7.5501 11.0698 7.2101 11.7298 7.1401 12.2198L6.7101 15.1998C6.6201 15.8298 6.7901 16.4198 7.1801 16.8098C7.5101 17.1398 7.9601 17.3098 8.4601 17.3098C8.5701 17.3098 8.6801 17.2998 8.7901 17.2898L11.7601 16.8698C12.2501 16.7998 12.9101 16.4698 13.2601 16.1098L18.6401 10.7298C18.3901 10.6498 18.1401 10.5398 17.8601 10.4198Z" />
      </g>
      <defs>
        <clipPath id="comparison-rules-edit-clip">
          <rect width="24" height="24" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}

const othersPoints = [
  "Prediction volume buried --> You join before seeing the real size.",
  "Odds and returns stay unclear after you join.",
  "Payouts delayed with no clear settlement time.",
  "Deposit and withdrawal fees that quietly cut your balance.",
  "Alerts only for some events --> Easy to miss the rest.",
  "Long signup forms before you can even browse markets.",
  "Ticket queues --> No real person when you need help.",
] as const;

const oursPoints = [
  "Live USDT volume shown before you join a prediction.",
  "See real-time odds and returns --> Everything updates live.",
  "Settlements in real time --> No waiting after the result.",
  "Zero deposit and withdrawal charges --> keep what you earn.",
  "Alerts for everything: Joins, Settlements, Deposits, Withdrawals.",
  "Google or OTP sign-in --> Join your first market in minutes.",
  "One-to-one Discord support --> Talk to a real person, fast.",
] as const;

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20.707 6.293a1 1 0 0 1 0 1.414l-10 10a1 1 0 0 1 -1.414 0l-5 -5a1 1 0 0 1 1.414 -1.414l4.293 4.293l9.293 -9.293a1 1 0 0 1 1.414 0" />
    </svg>
  );
}

export function ComparisonSection() {
  return (
    <SectionShell
      id="why-us"
      tone="canvas"
      title={
        <>
          Same game.<RulesEditIcon className="ml-2 inline-block size-[0.9em] shrink-0 align-[-0.12em] text-primary" /> Different rules
          
        </>
      }
      description="See how other platforms get in your way - and how 411Predict keeps deposits, odds, settlements, and support clear."
    >
      <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
        <article className="order-2 rounded-2xl border border-hairline/50 bg-surface-soft p-6 shadow-[0_8px_24px_-16px_rgba(0,0,0,0.18)] sm:p-8 lg:order-1 dark:shadow-[0_8px_28px_-14px_rgba(0,0,0,0.55)]">
          <h3 className="text-[22px] font-semibold tracking-[-0.6px] text-ink sm:text-[24px]">
            Other Platforms.
          </h3>
          <p className="mt-2 text-[15px] leading-relaxed text-muted">
            What usually goes wrong before you ever see a fair payout.
          </p>

          <ul className="mt-7 space-y-1">
            {othersPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 py-2">
                <span
                  className={cn(
                    "mt-0.5 grid size-6 shrink-0 place-items-center rounded-full",
                    "bg-muted/25 text-muted",
                    "ring-2 ring-muted/20 ring-offset-1 ring-offset-canvas",
                  )}
                  aria-hidden
                >
                  <IconXFilled className="size-3.5" />
                </span>
                <span className="pt-0.5 text-[15px] leading-snug font-medium tracking-[-0.01em] text-ink">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </article>

        <article className="order-1 rounded-2xl bg-primary p-6 shadow-[0_8px_24px_-12px_rgba(14,118,255,0.45)] sm:p-8 lg:order-2">
          <h3 className="text-[22px] font-semibold tracking-[-0.6px] text-on-primary sm:text-[24px]">
            Our 411Predict Platform.
          </h3>
          <p className="mt-2 text-[15px] leading-relaxed text-on-primary/75">
            Zero wallet charges, real-time settlement, full alerts, and Discord help that answers.
          </p>

          <ul className="mt-7 space-y-1">
            {oursPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 py-2">
                <span
                  className={cn(
                    "mt-0.5 grid size-6 shrink-0 place-items-center rounded-full",
                    "bg-on-primary text-primary",
                    "ring-2 ring-on-primary/35 ring-offset-1 ring-offset-primary",
                  )}
                  aria-hidden
                >
                  <CheckIcon className="size-3.5" />
                </span>
                <span className="pt-0.5 text-[15px] leading-snug font-medium tracking-[-0.01em] text-on-primary">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </SectionShell>
  );
}
