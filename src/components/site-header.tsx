"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/brand";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#about", label: "About", id: "about" },
  { href: "#predictions", label: "Predictions", id: "predictions" },
  { href: "#how-it-works", label: "How it works", id: "how-it-works" },
  { href: "#why-us", label: "Why Us", id: "why-us" },
] as const;

const LEGAL_LINKS = [
  { href: "/legal/terms", label: "Terms" },
  { href: "/legal/privacy", label: "Privacy" },
  { href: "/legal/cookies", label: "Cookie" },
] as const;

const SECTION_IDS = ["hero", ...NAV_LINKS.map((link) => link.id)] as const;

const ease = [0.22, 1, 0.36, 1] as const;

export function SiteHeader() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("hero");
  const scrolledRef = useRef(false);
  const activeRef = useRef("hero");
  const tickingRef = useRef(false);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => ({
      id,
      el: document.getElementById(id),
    }));

    const readActive = () => {
      const marker = Math.min(140, window.innerHeight * 0.28);
      let current: string = "hero";
      for (const section of sections) {
        if (!section.el) continue;
        if (section.el.getBoundingClientRect().top <= marker) current = section.id;
      }
      return current;
    };

    const apply = () => {
      tickingRef.current = false;
      const nextScrolled = window.scrollY > 12;
      if (nextScrolled !== scrolledRef.current) {
        scrolledRef.current = nextScrolled;
        setScrolled(nextScrolled);
      }
      const nextActive = readActive();
      if (nextActive !== activeRef.current) {
        activeRef.current = nextActive;
        setActiveId(nextActive);
      }
    };

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 px-4 sm:top-5">
      <div className="mx-auto flex max-w-[960px] justify-center">
        <motion.div
          className={cn(
            "pointer-events-auto w-full rounded-[22px] border border-hairline/80 bg-canvas/40 p-1.5 text-ink shadow-[0_1px_0_rgba(255,255,255,0.55)_inset] backdrop-blur-2xl transition-[box-shadow,background-color] duration-300 dark:shadow-[0_1px_0_rgba(255,255,255,0.06)_inset] lg:w-auto",
            scrolled
              ? "bg-canvas/40 shadow-[0_10px_36px_rgba(14,118,255,0.1),0_2px_14px_rgba(0,0,0,0.05)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
              : "shadow-[0_4px_24px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.35)]",
          )}
          initial={reduce ? false : { opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          <div className="flex items-center gap-1 sm:gap-1.5">
            <a
              href="#hero"
              className="flex shrink-0 items-center gap-2.5 rounded-2xl py-1 pl-1.5 pr-2.5 transition-colors hover:bg-surface-soft/80 focus-ring"
              aria-label={`${BRAND.name} home`}
              onClick={() => setOpen(false)}
            >
              <span className="relative grid size-9 place-items-center overflow-hidden rounded-[12px] bg-primary/8 ring-1 ring-primary/15">
                <Image
                  src={BRAND.iconSrc}
                  alt=""
                  width={28}
                  height={28}
                  className="size-7 rounded-md object-cover"
                  priority
                />
              </span>
              <span className="text-[15px] font-semibold tracking-[-0.03em] text-ink">
                {BRAND.wordmark}
              </span>
            </a>

            <nav
              className="ml-1 hidden items-center rounded-2xl bg-surface-soft/70 p-1 dark:bg-white/5 lg:flex"
              aria-label="Primary"
            >
              {NAV_LINKS.map((item) => {
                const active = activeId === item.id;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-xl px-3 py-1.5 text-[13px] font-medium tracking-[-0.02em] transition-colors focus-ring",
                      active
                        ? "bg-canvas text-ink shadow-sm dark:bg-surface-card"
                        : "text-muted hover:bg-canvas/70 hover:text-ink dark:hover:bg-white/8",
                    )}
                    aria-current={active ? "true" : undefined}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            <div className="ml-auto flex items-center gap-1 pl-1">
              <div className="hidden h-6 w-px bg-hairline lg:block" aria-hidden />
              <ThemeToggle className="rounded-2xl hover:bg-surface-soft/90" />
              <Button href="#cta" className="hidden h-10 rounded-[14px] px-4 text-[14px] lg:inline-flex">
                Get started
              </Button>

              <button
                type="button"
                className="grid size-10 place-items-center rounded-2xl text-ink transition hover:bg-surface-soft focus-ring lg:hidden"
                aria-expanded={open}
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((value) => !value)}
              >
                <span className="relative block h-3.5 w-[18px]">
                  <span
                    className={cn(
                      "absolute left-0 h-[1.5px] w-[18px] rounded-full bg-ink transition",
                      open ? "top-[6px] rotate-45" : "top-0",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute left-0 top-[6px] h-[1.5px] w-[18px] rounded-full bg-ink transition",
                      open && "opacity-0",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute left-0 h-[1.5px] w-[18px] rounded-full bg-ink transition",
                      open ? "top-[6px] -rotate-45" : "top-3",
                    )}
                  />
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            aria-label="Mobile"
            data-lenis-prevent
            className="pointer-events-auto mx-auto mt-3 max-h-[calc(100vh-96px)] max-w-[960px] overflow-auto rounded-[28px] border border-hairline bg-canvas/95 p-2.5 text-ink shadow-[0_18px_48px_rgba(0,0,0,0.1)] backdrop-blur-2xl dark:shadow-[0_18px_48px_rgba(0,0,0,0.55)] lg:hidden"
            initial={reduce ? false : { opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.25, ease }}
          >
            <div className="rounded-3xl bg-surface-soft/70 p-1.5 dark:bg-white/5">
              {NAV_LINKS.map((item) => {
                const active = activeId === item.id;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block rounded-2xl px-4 py-3.5 text-[18px] font-medium tracking-[-0.03em] transition",
                      active
                        ? "bg-canvas text-ink shadow-sm dark:bg-surface-card"
                        : "text-ink/80 hover:bg-canvas/80 hover:text-ink",
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
            <div className="px-1.5 pb-1.5 pt-3">
              <Button
                href="#cta"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Get started
              </Button>
              <div className="mt-3 flex items-center justify-center gap-x-2.5 pb-1 text-[11px] font-medium tracking-[-0.01em] text-muted">
                {LEGAL_LINKS.map((item, index) => (
                  <span key={item.href} className="contents">
                    {index > 0 ? (
                      <span className="text-muted/45" aria-hidden>
                        ·
                      </span>
                    ) : null}
                    <a
                      href={item.href}
                      className="transition hover:text-ink"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  </span>
                ))}
              </div>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
