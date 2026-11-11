"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/brand";
import { HeroCardWall } from "./hero-card-wall";

const ease = [0.22, 1, 0.36, 1] as const;

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
      initial={
        reduce
          ? false
          : { opacity: 0, y: 22, filter: "blur(6px)" }
      }
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-canvas lg:h-dvh lg:min-h-dvh"
    >
      <div className="relative z-10 flex w-full flex-col items-center lg:h-full lg:min-h-dvh lg:flex-row">
        {/* Image underlaps the wall so the seam is continuous */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-0 hidden w-[56%] lg:block"
        >
          <Image
            src="/brand/hero-left-earn.jpg"
            alt=""
            fill
            sizes="56vw"
            className="object-cover object-center"
            priority
          />
          <div className="hero-left-blend absolute inset-0" />
        </div>

        <div className="relative z-20 flex w-full flex-col items-start justify-center overflow-hidden px-4 py-10 pt-28 sm:px-6 sm:pt-32 lg:h-full lg:w-[42%] lg:py-16 lg:pt-16 lg:pl-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))] lg:pr-4">
          <div aria-hidden className="pointer-events-none absolute inset-0 lg:hidden">
            <Image
              src="/brand/hero-left-earn.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
            />
            <div className="hero-left-blend-mobile absolute inset-0" />
          </div>

          <Appear delay={0.02} className="relative z-10">
            <p className="font-handwritten text-[1.35rem] font-medium leading-none tracking-normal text-primary">
              Real-world prediction markets
            </p>
          </Appear>

          <Appear delay={0.08} className="relative z-10 mt-3">
            <h1 className="max-w-[12ch] text-display text-ink">
              {BRAND.wordmark}
            </h1>
          </Appear>

          <Appear delay={0.16} className="relative z-10 mt-4">
            <p className="max-w-md text-body-lg text-muted">
              Pick a side on live predictions - transparent volume, fair settlement,
              and zero wallet charges on deposit and withdrawal.
            </p>
          </Appear>

          <Appear delay={0.24} className="relative z-10 mt-6">
            <div className="flex flex-wrap items-center gap-3">
              <Button href="#cta">Get started</Button>
              <Button href="#predictions" variant="yellow">
                See live predictions
              </Button>
            </div>
          </Appear>
        </div>

        <HeroCardWall />
      </div>
    </section>
  );
}
