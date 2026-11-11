"use client";

import Image from "next/image";
import { FormEvent, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { BRAND, DISCORD_WIDGET } from "@/lib/brand";

const OPEN_DELAY = 5000;
const ease = [0.22, 1, 0.36, 1] as const;

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
    </svg>
  );
}

const fabClass =
  "pointer-events-auto grid size-14 place-items-center rounded-[18px] bg-primary text-on-primary shadow-[inset_0_3px_0_0_rgba(255,255,255,0.2),0_8px_24px_rgba(14,118,255,0.32)] hover:bg-primary-active";

export function TelegramWidget() {
  return <DiscordWidget />;
}

export function DiscordWidget() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [message, setMessage] = useState("");
  const dismissedRef = useRef(false);
  const href = BRAND.discordHref;

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    if (!media.matches) return;

    const timer = window.setTimeout(() => {
      if (!dismissedRef.current) setOpen(true);
    }, OPEN_DELAY);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePanel();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function closePanel() {
    dismissedRef.current = true;
    setDismissed(true);
    setOpen(false);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.open(href, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="pointer-events-none fixed right-5 bottom-5 z-40 flex flex-col items-end gap-3 sm:right-8 sm:bottom-8">
      <AnimatePresence>
        {open ? (
          <motion.div
            key="panel"
            className="pointer-events-auto w-[min(328px,calc(100vw-2.5rem))] overflow-hidden rounded-2xl border border-hairline/60 bg-surface-soft p-[2px] shadow-[0_12px_40px_-16px_rgba(0,0,0,0.28)] dark:border-hairline/30 dark:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.65)]"
            initial={reduce ? false : { opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.36, ease }}
            style={{ transformOrigin: "bottom right" }}
          >
            <div className="overflow-hidden rounded-[14px] border border-hairline/60 bg-canvas dark:border-hairline/30">
              <div className="flex items-start justify-between gap-3 border-b border-hairline px-4 py-3.5">
                <div className="flex min-w-0 items-start gap-3">
                  <span className="relative mt-0.5 grid size-10 shrink-0 place-items-center overflow-hidden rounded-xl bg-primary/10 ring-1 ring-primary/15">
                    <Image
                      src={BRAND.iconSrc}
                      alt=""
                      width={28}
                      height={28}
                      className="size-7 rounded-md object-cover"
                    />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[15px] font-semibold tracking-[-0.02em] text-ink">
                      {DISCORD_WIDGET.title}
                    </p>
                    <p className="mt-1 text-[13px] leading-5 text-muted">
                      {DISCORD_WIDGET.body}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="grid size-8 shrink-0 place-items-center rounded-xl text-muted transition-colors hover:bg-surface-soft hover:text-ink"
                  aria-label="Close message"
                  onClick={closePanel}
                >
                  <svg viewBox="0 0 24 24" className="size-4" aria-hidden>
                    <path
                      d="M6 6l12 12M18 6 6 18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              <form className="flex flex-col gap-3 p-3.5" onSubmit={onSubmit}>
                <label className="sr-only" htmlFor="discord-widget-message">
                  {DISCORD_WIDGET.placeholder}
                </label>
                <textarea
                  id="discord-widget-message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder={DISCORD_WIDGET.placeholder}
                  rows={3}
                  className="min-h-[84px] w-full resize-none rounded-2xl border border-hairline bg-surface-soft px-4 py-3 text-[15px] leading-6 tracking-[-0.01em] text-ink outline-none placeholder:text-muted focus:border-primary/35 focus:bg-canvas focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--primary)_16%,transparent)]"
                />
                <Button href={href} external className="w-full">
                  <DiscordIcon className="size-4" />
                  {DISCORD_WIDGET.cta}
                </Button>
              </form>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {dismissed ? (
        <motion.a
          href={BRAND.discordHref}
          target="_blank"
          rel="noopener noreferrer"
          className={fabClass}
          aria-label="Discord"
          initial={false}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={reduce ? undefined : { scale: 1.04 }}
          whileTap={reduce ? undefined : { scale: 0.97 }}
        >
          <DiscordIcon className="size-7" />
        </motion.a>
      ) : (
        <motion.button
          type="button"
          className={fabClass}
          aria-label={open ? "Discord chat is open" : "Open Discord chat"}
          aria-expanded={open}
          onClick={() => setOpen(true)}
          initial={reduce ? false : { opacity: 0, scale: 0.86 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.32, ease }}
          whileHover={reduce ? undefined : { scale: 1.04 }}
          whileTap={reduce ? undefined : { scale: 0.97 }}
        >
          <DiscordIcon className="size-7" />
        </motion.button>
      )}
    </div>
  );
}
