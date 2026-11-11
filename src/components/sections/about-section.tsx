"use client";

import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { SectionDivider } from "@/components/ui/section-divider";
import { AboutDeviceShowcase } from "./about-device-showcase";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const POINTS = [
  "Clear volume and fees before you join.",
  "Simple settlement --> Fair payouts, no drama.",
  "Deposit and withdraw without confusing steps.",
  "Live alerts when your predictions move.",
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

function Appear({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-x-clip bg-canvas px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <SectionDivider />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl dark:bg-primary/14"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
        <Appear className="order-2 flex justify-center lg:order-1 lg:justify-start">
          <AboutDeviceShowcase />
        </Appear>

        <Appear delay={0.08} className="order-1 min-w-0 lg:order-2">
          {/* <p className="text-eyebrow">About</p> */}

          <h2 className="mt-3 text-section-title text-ink">
            Clear markets. Fair payouts.
          </h2>

          <p className="mt-3 max-w-md text-body-lg text-muted">
            Stay simple from join to payout - transparent volume, fair
            settlement, and alerts that keep you in the loop.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button href="#cta">Get started</Button>
            <Button href="#how-it-works" variant="yellow">
              How it works
            </Button>
          </div>

          <div className="mt-10">

            <p className="mt-2 max-w-md text-h3 text-ink">
              From first join to payout, without the noise.
            </p>

            <ul className="mt-5 space-y-1">
              {POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3 py-2">
                  <span
                    className={cn(
                      "mt-0.5 grid size-6 shrink-0 place-items-center rounded-full",
                      "bg-primary text-on-primary",
                      "ring-2 ring-primary/30 ring-offset-1 ring-offset-surface-soft",
                    )}
                  >
                    <CheckIcon className="size-3.5" />
                  </span>
                  <span className="pt-0.5 text-[15px] leading-snug font-medium tracking-[-0.01em] text-ink">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Appear>
      </div>
    </section>
  );
}
