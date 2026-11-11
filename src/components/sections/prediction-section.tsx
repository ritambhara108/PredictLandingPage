"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { AnimateDigits } from "@/components/ui/animate-digits";
import { Button } from "@/components/ui/button";
import { SectionDivider } from "@/components/ui/section-divider";
import { featuredPredictions } from "@/data/predictions";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

function MetaIcon({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn("inline-flex size-3.5 shrink-0 items-center justify-center", className)}
      aria-hidden
    >
      {children}
    </span>
  );
}

function VolumeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-full fill-current">
      <path d="M11.94 2.20983L9.52995 7.81983H7.11995C6.71995 7.81983 6.32995 7.84983 5.94995 7.92983L6.94995 5.52983L6.98995 5.43983L7.04995 5.27983C7.07995 5.20983 7.09995 5.14983 7.12995 5.09983C8.28995 2.40983 9.58995 1.56983 11.94 2.20983Z" />
      <path d="M18.7301 8.08953L18.7101 8.07953C18.1101 7.90953 17.5001 7.81953 16.8801 7.81953H10.6201L12.8701 2.58953L12.9001 2.51953C13.0401 2.56953 13.1901 2.63953 13.3401 2.68953L15.5501 3.61953C16.7801 4.12953 17.6401 4.65953 18.1701 5.29953C18.2601 5.41953 18.3401 5.52953 18.4201 5.65953C18.5101 5.79953 18.5801 5.93953 18.6201 6.08953C18.6601 6.17953 18.6901 6.25953 18.7101 6.34953C18.8601 6.85953 18.8701 7.43953 18.7301 8.08953Z" />
      <path d="M12.52 17.6601H12.77C13.07 17.6601 13.32 17.3901 13.32 17.0601C13.32 16.6401 13.2 16.5801 12.94 16.4801L12.52 16.3301V17.6601Z" />
      <path d="M18.29 9.52031C17.84 9.39031 17.37 9.32031 16.88 9.32031H7.11999C6.43999 9.32031 5.79999 9.45031 5.19999 9.71031C3.45999 10.4603 2.23999 12.1903 2.23999 14.2003V16.1503C2.23999 16.3903 2.25999 16.6203 2.28999 16.8603C2.50999 20.0403 4.20999 21.7403 7.38999 21.9503C7.61999 21.9803 7.84999 22.0003 8.09999 22.0003H15.9C19.6 22.0003 21.55 20.2403 21.74 16.7403C21.75 16.5503 21.76 16.3503 21.76 16.1503V14.2003C21.76 11.9903 20.29 10.1303 18.29 9.52031ZM13.28 15.5003C13.74 15.6603 14.36 16.0003 14.36 17.0603C14.36 17.9703 13.65 18.7003 12.77 18.7003H12.52V18.9203C12.52 19.2103 12.29 19.4403 12 19.4403C11.71 19.4403 11.48 19.2103 11.48 18.9203V18.7003H11.39C10.43 18.7003 9.63999 17.8903 9.63999 16.8903C9.63999 16.6003 9.86999 16.3703 10.16 16.3703C10.45 16.3703 10.68 16.6003 10.68 16.8903C10.68 17.3103 11 17.6603 11.39 17.6603H11.48V15.9703L10.72 15.7003C10.26 15.5403 9.63999 15.2003 9.63999 14.1403C9.63999 13.2303 10.35 12.5003 11.23 12.5003H11.48V12.2803C11.48 11.9903 11.71 11.7603 12 11.7603C12.29 11.7603 12.52 11.9903 12.52 12.2803V12.5003H12.61C13.57 12.5003 14.36 13.3103 14.36 14.3103C14.36 14.6003 14.13 14.8303 13.84 14.8303C13.55 14.8303 13.32 14.6003 13.32 14.3103C13.32 13.8903 13 13.5403 12.61 13.5403H12.52V15.2303L13.28 15.5003Z" />
      <path d="M10.6799 14.14C10.6799 14.56 10.7999 14.62 11.0599 14.72L11.4799 14.87V13.54H11.2299C10.9199 13.54 10.6799 13.81 10.6799 14.14Z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-full fill-current">
      <path
        opacity="0.4"
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      />
      <path d="M15.7101 15.9298C15.5801 15.9298 15.4501 15.8998 15.3301 15.8198L12.2301 13.9698C11.4601 13.5098 10.8901 12.4998 10.8901 11.6098V7.50977C10.8901 7.09977 11.2301 6.75977 11.6401 6.75977C12.0501 6.75977 12.3901 7.09977 12.3901 7.50977V11.6098C12.3901 11.9698 12.6901 12.4998 13.0001 12.6798L16.1001 14.5298C16.4601 14.7398 16.5701 15.1998 16.3601 15.5598C16.2101 15.7998 15.9601 15.9298 15.7101 15.9298Z" />
    </svg>
  );
}

function ResultIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-full fill-current">
      <path
        opacity="0.4"
        d="M15.36 11.19L18.27 9.45C18.87 9.08999 19.36 8.22 19.36 7.52V3.87C19.36 2.63 18.35 1.62 17.11 1.62H10.11C8.86998 1.62 7.85999 2.63 7.85999 3.87V7.52C7.85999 8.21 8.34999 9.07999 8.94999 9.43999L11.88 11.19C12.03 11.29 12.03 11.44 11.88 11.54L8.95999 13.29C8.56999 13.52 8.25998 13.92 8.06998 14.37C8.62998 14.37 9.10999 14.71 9.29999 15.21L9.32999 15.31L9.60998 16.33C9.73998 16.83 10.13 17.21 10.62 17.35L11.78 17.68C12.28 17.89 12.58 18.36 12.58 18.91C12.58 19.4926 12.1812 19.9865 11.63 20.16L10.64 20.43C10.26 20.53 9.95999 20.77 9.76999 21.09C9.87999 21.11 9.98998 21.12 10.11 21.12H17.11C18.35 21.12 19.36 20.1 19.36 18.87V15.22C19.36 14.51 18.87 13.64 18.27 13.28L15.36 11.54C15.2 11.44 15.2 11.29 15.36 11.19Z"
      />
      <path d="M11.6 18.89C11.6 18.96 11.56 19.12 11.37 19.18L10.39 19.45C9.53999 19.68 8.89999 20.32 8.66999 21.17L8.40999 22.13C8.34999 22.35 8.17999 22.37 8.09999 22.37C8.01999 22.37 7.84999 22.35 7.78999 22.13L7.52999 21.16C7.29999 20.32 6.64999 19.68 5.80999 19.45L4.83999 19.19C4.62999 19.13 4.60999 18.95 4.60999 18.88C4.60999 18.8 4.62999 18.62 4.83999 18.56L5.81999 18.3C6.65999 18.06 7.29999 17.42 7.52999 16.58L7.80999 15.56C7.87999 15.39 8.03999 15.36 8.09999 15.36C8.15999 15.36 8.32999 15.38 8.38999 15.54L8.66999 16.57C8.89999 17.41 9.54999 18.05 10.39 18.29L11.39 18.57C11.59 18.65 11.6 18.83 11.6 18.89Z" />
    </svg>
  );
}

function StatusPulse({ reduce }: { reduce: boolean | null }) {
  return (
    <span className="relative inline-flex size-2 shrink-0" aria-hidden>
      {!reduce ? (
        <span className="absolute inset-0 animate-ping rounded-full bg-primary/55" />
      ) : null}
      <span className="relative size-2 rounded-full bg-primary" />
    </span>
  );
}

function formatCountdown(ms: number) {
  const safe = Math.max(0, ms);
  const totalSeconds = Math.floor(safe / 1000);
  const days = Math.floor(totalSeconds / 86_400);
  const hours = Math.floor((totalSeconds % 86_400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return [
    `${String(days).padStart(2, "0")}d`,
    `${String(hours).padStart(2, "0")}h`,
    `${String(minutes).padStart(2, "0")}m`,
    `${String(seconds).padStart(2, "0")}s`,
  ].join(" ");
}

const COUNTDOWN_PLACEHOLDER = "--d --h --m --s";

function useCountdown(targetIso: string) {
  const target = new Date(targetIso).getTime();
  // Stable on server + first client paint; live clock starts in effect only.
  const [value, setValue] = useState(COUNTDOWN_PLACEHOLDER);

  useEffect(() => {
    const tick = () => setValue(formatCountdown(Math.max(0, target - Date.now())));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [target]);

  return value;
}

function CounterValue({
  value,
  className,
}: {
  value: string;
  className: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <span
        className={cn(
          "text-[13px] font-semibold tracking-[-0.02em] tabular-nums",
          className,
        )}
      >
        {value}
      </span>
    );
  }

  return (
    <AnimateDigits
      value={value}
      gap={1}
      className={cn(
        "text-[13px] font-semibold tracking-[-0.02em]",
        className,
      )}
      digitClassName="min-w-[0.62em]"
      enterY={14}
      enterBlur={8}
      enterScale={0.85}
      enterStiffness={220}
      enterDamping={18}
      exitStiffness={220}
      exitDamping={20}
      direction="down"
      animationDelay={40}
    />
  );
}

function PredictionCard({
  prediction,
  delay,
}: {
  prediction: (typeof featuredPredictions)[number];
  delay: number;
}) {
  const reduce = useReducedMotion();
  const joinEndsIn = useCountdown(prediction.joinEndsAt);
  const resultIn = useCountdown(prediction.resultAt);

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease }}
      className="flex h-full flex-col rounded-2xl bg-surface-soft shadow-[0_4px_16px_-10px_rgba(0,0,0,0.12)] dark:shadow-[0_4px_16px_-8px_rgba(0,0,0,0.4)] border border-hairline/60 dark:border-hairline/30"
    >
      <div className="px-[2px] pt-[2px]">
        <div className="relative aspect-[16/10] overflow-hidden rounded-[14px] bg-canvas shadow-[0_2px_8px_-4px_rgba(0,0,0,0.14)] dark:shadow-[0_2px_10px_-4px_rgba(0,0,0,0.45)]">
          <Image
            src={prediction.image}
            alt={prediction.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover rounded-[14px] border border-hairline/60 dark:border-hairline/30 p-1"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-5">
        <h3 className="text-[17px] leading-snug font-semibold tracking-[-0.02em] text-ink">
          {prediction.title}
        </h3>
        <p className="mt-2 text-[14px] leading-relaxed text-muted">
          {prediction.description}
        </p>

        <dl className="mt-5">
          <div className="flex items-center justify-between gap-3 border-b border-dashed border-hairline py-1.5">
            <dt className="text-caption text-muted">Total volume</dt>
            <dd className="flex items-center gap-1.5 text-[13px] font-semibold tracking-[-0.02em] text-ink">
              <MetaIcon className="text-ink">
                <VolumeIcon />
              </MetaIcon>
              {prediction.volume}
            </dd>
          </div>
          <div className="flex items-center justify-between gap-3 border-b border-dashed border-hairline py-1.5">
            <dt className="text-caption text-muted">Status</dt>
            <dd className="flex items-center gap-1.5 text-[13px] font-semibold tracking-[-0.02em] text-primary">
              <StatusPulse reduce={reduce} />
              {prediction.status}
            </dd>
          </div>
          <div className="flex items-center justify-between gap-3 border-b border-dashed border-hairline py-1.5">
            <dt className="text-caption text-muted">Joining ends in</dt>
            <dd className="flex items-center gap-1.5 text-primary">
              <MetaIcon>
                <ClockIcon />
              </MetaIcon>
              <CounterValue value={joinEndsIn} className="text-primary" />
            </dd>
          </div>
          <div className="flex items-center justify-between gap-3 py-1.5">
            <dt className="text-caption text-muted">Result in</dt>
            <dd className="flex items-center gap-1.5 text-success">
              <MetaIcon>
                <ResultIcon />
              </MetaIcon>
              <CounterValue value={resultIn} className="text-success" />
            </dd>
          </div>
        </dl>

        <div className="mt-auto pt-6">
          <Button href={prediction.href} className="w-full">
            View prediction
          </Button>
        </div>
      </div>
    </motion.article>
  );
}

const DESKTOP_VISIBLE = 6;

export function PredictionSection() {
  const [expanded, setExpanded] = useState(false);
  const reduce = useReducedMotion();
  const canToggle = featuredPredictions.length > DESKTOP_VISIBLE;
  const visiblePredictions = expanded
    ? featuredPredictions
    : featuredPredictions.slice(0, DESKTOP_VISIBLE);
  const hiddenCount = featuredPredictions.length - DESKTOP_VISIBLE;

  return (
    <section
      id="predictions"
      className="relative scroll-mt-24 bg-canvas px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <SectionDivider />
      <div className="relative mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease }}
          className="max-w-2xl"
        >
          <h2 className="text-section-title text-ink">
            Open Predictions. Clear Odds.
          </h2>
          <p className="mt-3 max-w-lg text-body-lg text-muted">
            Join featured predictions with transparent volume, open entry
            windows, and fixed result times.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {visiblePredictions.map((prediction, index) => (
            <PredictionCard
              key={prediction.id}
              prediction={prediction}
              delay={
                reduce
                  ? 0
                  : 0.04 * (expanded && index >= DESKTOP_VISIBLE ? index - DESKTOP_VISIBLE : Math.min(index, 5))
              }
            />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:mt-12">
          <Button href="#cta">Get started</Button>
          {canToggle ? (
            <Button
              type="button"
              onClick={() => setExpanded((open) => !open)}
              aria-expanded={expanded}
              className="bg-[#f0d26a] text-ink shadow-[inset_0_3px_0_0_rgba(255,255,255,0.35),0_2px_6px_0_rgba(196,154,40,0.28)] hover:bg-[#e8c652] dark:bg-[#e2c45c] dark:text-ink dark:hover:bg-[#d6b64a]"
            >
              {expanded ? "Show less" : `Show more (${hiddenCount})`}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
