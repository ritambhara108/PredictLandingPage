"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { HeroPhoneNotifications } from "./hero-phone-notifications";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Text and arrows are SEPARATE — rotate/flip only the arrow.
 * Desktop positions stay pixel-locked; the whole cluster scales down on narrower viewports.
 */
function HandyLabel({
  lines,
  className,
}: {
  lines: string[];
  className?: string;
}) {
  return (
    <p
      className={cn(
        "pointer-events-none absolute z-10 max-w-[8.5rem] font-handwritten text-[1.2rem] leading-[1.15] font-medium tracking-normal text-primary",
        className,
      )}
    >
      {lines.map((line, i) => (
        <span key={line} className={cn("block", i > 0 && "text-ink/65")}>
          {line}
        </span>
      ))}
    </p>
  );
}

function HandyArrow({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt=""
      width={96}
      height={72}
      className={cn(
        "pointer-events-none absolute z-10 h-auto w-[4.25rem] opacity-80 dark:invert",
        className,
      )}
      unoptimized
    />
  );
}

export function AboutDeviceShowcase({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const hostRef = useRef<HTMLDivElement>(null);
  const clusterRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [natural, setNatural] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const host = hostRef.current;
    const cluster = clusterRef.current;
    if (!host || !cluster) return;

    const update = () => {
      const w = cluster.offsetWidth;
      const h = cluster.offsetHeight;
      if (w > 0 && h > 0) setNatural({ w, h });

      const parent = host.parentElement;
      const available = parent?.clientWidth ?? host.clientWidth;
      setScale(Math.min(1, available / w));
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(host.parentElement ?? host);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={hostRef}
      className={cn("relative mx-auto", className)}
      style={{
        width: natural.w ? natural.w * scale : undefined,
        height: natural.h ? natural.h * scale : undefined,
      }}
      aria-hidden
    >
      <div
        ref={clusterRef}
        className="absolute top-0 left-1/2 w-fit px-24"
        style={{
          transform: `translateX(-50%) scale(${scale})`,
          transformOrigin: "top center",
        }}
      >
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease }}
        >
          <HeroPhoneNotifications className="w-[270px]" />
        </motion.div>

        {/* ── LEFT MIDDLE ── */}
        <HandyLabel
          lines={["live alerts", "on your lock"]}
          className="top-[38%] left-0 text-right"
        />
        <HandyArrow
          src="/brand/handy-arrows/arrow-4.svg"
          className="top-[28%] left-4 -scale-x-100 -rotate-[45deg]"
        />

        {/* ── RIGHT TOP ── */}
        <HandyLabel
          lines={["wins land", "right here"]}
          className="top-[8%] right-0 text-left"
        />
        <HandyArrow
          src="/brand/handy-arrows/arrow-1.svg"
          className="top-[16%] right-2 -scale-x-100 rotate-[100deg]"
        />

        {/* ── RIGHT BOTTOM ── */}
        <HandyLabel
          lines={["zero-fee", "cash outs"]}
          className="right-0 bottom-[18%] text-left"
        />
        <HandyArrow
          src="/brand/handy-arrows/arrow-4.svg"
          className="right-6 bottom-[12%] -scale-x-100 -rotate-180"
        />
      </div>
    </div>
  );
}
