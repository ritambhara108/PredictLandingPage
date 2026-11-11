"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { SectionDivider } from "@/components/ui/section-divider";
import { cn } from "@/lib/utils";

type SectionShellProps = {
  id: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: string;
  children?: ReactNode;
  className?: string;
  tone?: "soft" | "canvas" | "dark";
};

const toneClass: Record<NonNullable<SectionShellProps["tone"]>, string> = {
  soft: "bg-surface-soft",
  canvas: "bg-canvas",
  dark: "bg-surface-dark text-on-dark",
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  tone = "soft",
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 px-6 py-20 sm:px-8 sm:py-28 lg:px-12",
        toneClass[tone],
        className,
      )}
    >
      <SectionDivider />
      <motion.div
        className="mx-auto w-full max-w-6xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        {(eyebrow || title || description) && (
          <div className="mb-10 max-w-2xl space-y-3 sm:mb-14">
            {eyebrow ? <p className="text-eyebrow">{eyebrow}</p> : null}
            {title ? <h2 className="text-section-title">{title}</h2> : null}
            {description ? (
              <p
                className={cn(
                  "text-body-lg",
                  tone === "dark" && "text-on-dark-soft",
                )}
              >
                {description}
              </p>
            ) : null}
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
}
