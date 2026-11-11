"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { SectionDivider } from "@/components/ui/section-divider";
import { BRAND } from "@/lib/brand";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;
const CARD = 80;
const GAP = 8;
const STEP = CARD + GAP;
const ICON = 32;
const ICON_INSET = (CARD - ICON) / 2;
const MOVE_MS = 900;
const HOLD_MS = 3000;

/** Card top-lefts, clockwise: TL → TR → MR → BR → BL → ML */
const OUTER_SLOTS = [
  { x: STEP / 2, y: 0 },
  { x: STEP / 2 + STEP, y: 0 },
  { x: STEP * 2, y: STEP },
  { x: STEP / 2 + STEP, y: STEP * 2 },
  { x: STEP / 2, y: STEP * 2 },
  { x: 0, y: STEP },
] as const;

function IntegrationCard({
  children,
  className,
  borderClassName,
  featured,
}: {
  children?: ReactNode;
  className?: string;
  borderClassName?: string;
  featured?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative flex size-20 rounded-xl bg-canvas dark:bg-transparent",
        featured && "dark:bg-white/10",
        className,
      )}
    >
      <div
        role="presentation"
        className={cn(
          "absolute inset-0 rounded-xl border border-primary/20 dark:border-primary/30",
          featured &&
            "border-primary/35 shadow-[0_12px_28px_-14px_rgba(14,118,255,0.35)] dark:border-primary/40",
          borderClassName,
        )}
      />
      <div className="relative z-20 m-auto size-fit text-primary [&_img]:size-8 [&_svg]:size-8">
        {children}
      </div>
    </div>
  );
}

function TronIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-8 fill-current" aria-hidden>
      <path d="M20.6602 8.03906C20.6602 8.26906 20.6002 8.50906 20.4502 8.69906L11.0702 20.6391C10.7302 21.0691 10.3302 21.2191 9.99023 21.0991L10.0002 20.9991L11.0002 9.99906L20.0402 8.18906L20.6602 8.03906Z" />
      <path
        opacity="0.4"
        d="M20.66 8.04078L20.04 8.19078L11 10.0008L16.95 4.05078C17.07 4.10078 17.17 4.17078 17.24 4.24078L20.37 7.37078C20.55 7.55078 20.65 7.79078 20.66 8.04078Z"
      />
      <path d="M16.9502 4.04971L11.0002 9.99971L3.01016 2.89971L2.66016 2.55971V2.54971C2.86016 2.28971 3.22016 2.15971 3.70016 2.22971L16.6602 3.95971C16.7502 3.96971 16.8502 3.99971 16.9502 4.04971Z" />
      <path
        opacity="0.4"
        d="M10.9999 10.0005L9.99991 21.0005L9.98991 21.1005C9.73991 21.0105 9.50991 20.7705 9.35991 20.3905L2.63991 3.59055C2.46991 3.17055 2.48991 2.81055 2.65991 2.56055L3.00991 2.90055L10.9999 10.0005Z"
      />
    </svg>
  );
}

function UsdtIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-8 fill-current" aria-hidden>
      <path
        opacity="0.4"
        d="M7.4702 3.34961H16.5302C17.5902 3.34961 18.8402 4.11961 19.3102 5.06961L21.7102 9.88961C22.2902 11.0496 21.9702 12.6996 21.0202 13.5696L14.0902 19.8596C12.9402 20.8996 11.0702 20.8996 9.9202 19.8596L2.9902 13.5696C2.0302 12.6996 1.7202 11.0496 2.3002 9.88961L4.7002 5.06961C5.1602 4.11961 6.4102 3.34961 7.4702 3.34961Z"
      />
      <path d="M16 7.75H8C7.59 7.75 7.25 8.09 7.25 8.5C7.25 8.91 7.59 9.25 8 9.25H11.25V14.5C11.25 14.91 11.59 15.25 12 15.25C12.41 15.25 12.75 14.91 12.75 14.5V9.25H16C16.41 9.25 16.75 8.91 16.75 8.5C16.75 8.09 16.41 7.75 16 7.75Z" />
    </svg>
  );
}

function WalletIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-8 fill-current" aria-hidden>
      <path
        opacity="0.4"
        d="M22 12V17C22 20 20 22 17 22H7C4 22 2 20 2 17V12C2 9.28 3.64 7.38 6.19 7.06C6.45 7.02 6.72 7 7 7H17C17.26 7 17.51 7.00999 17.75 7.04999C20.33 7.34999 22 9.26 22 12Z"
      />
      <path d="M17.7499 7.05C17.5099 7.01 17.2599 7.00001 16.9999 7.00001H6.99994C6.71994 7.00001 6.44994 7.02001 6.18994 7.06001C6.32994 6.78001 6.52994 6.52001 6.76994 6.28001L10.0199 3.02C11.3899 1.66 13.6099 1.66 14.9799 3.02L16.7299 4.79002C17.3699 5.42002 17.7099 6.22 17.7499 7.05Z" />
      <path d="M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22" />
    </svg>
  );
}

function SecurityIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-8 fill-current" aria-hidden>
      <path d="M18.54 4.17063L13.04 2.11062C12.47 1.90063 11.54 1.90063 10.97 2.11062L5.47005 4.17063C4.41005 4.57063 3.55005 5.81063 3.55005 6.94063V15.0406C3.55005 15.8506 4.08005 16.9206 4.73005 17.4006L10.23 21.5106C11.2 22.2406 12.79 22.2406 13.76 21.5106L19.26 17.4006C19.91 16.9106 20.4401 15.8506 20.4401 15.0406V6.94063C20.4501 5.81063 19.59 4.57063 18.54 4.17063ZM12.75 12.8706V15.5006C12.75 15.9106 12.41 16.2506 12 16.2506C11.59 16.2506 11.25 15.9106 11.25 15.5006V12.8706C10.24 12.5506 9.50005 11.6106 9.50005 10.5006C9.50005 9.12062 10.62 8.00063 12 8.00063C13.38 8.00063 14.5 9.12062 14.5 10.5006C14.5 11.6206 13.76 12.5506 12.75 12.8706Z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-8 fill-current" aria-hidden>
      <path
        opacity="0.4"
        d="M17.53 7.77C17.46 7.76 17.39 7.76 17.32 7.77C15.77 7.72 14.54 6.45 14.54 4.89C14.54 3.3 15.83 2 17.43 2C19.02 2 20.32 3.29 20.32 4.89C20.31 6.45 19.08 7.72 17.53 7.77Z"
      />
      <path
        opacity="0.4"
        d="M20.79 14.7004C19.67 15.4504 18.1 15.7304 16.65 15.5404C17.03 14.7204 17.23 13.8104 17.24 12.8504C17.24 11.8504 17.02 10.9004 16.6 10.0704C18.08 9.8704 19.65 10.1504 20.78 10.9004C22.36 11.9404 22.36 13.6504 20.79 14.7004Z"
      />
      <path
        opacity="0.4"
        d="M6.44002 7.77C6.51002 7.76 6.58002 7.76 6.65002 7.77C8.20002 7.72 9.43002 6.45 9.43002 4.89C9.43002 3.3 8.14002 2 6.54002 2C4.95002 2 3.65002 3.29 3.65002 4.89C3.66002 6.45 4.89002 7.72 6.44002 7.77Z"
      />
      <path
        opacity="0.4"
        d="M6.54999 12.8496C6.54999 13.8196 6.75999 14.7396 7.13999 15.5696C5.72999 15.7196 4.26 15.4196 3.18 14.7096C1.6 13.6596 1.6 11.9496 3.18 10.8996C4.25 10.1796 5.75999 9.88962 7.18 10.0496C6.77 10.8896 6.54999 11.8396 6.54999 12.8496Z"
      />
      <path d="M12.12 15.87C12.04 15.86 11.95 15.86 11.86 15.87C10.02 15.81 8.54999 14.3 8.54999 12.44C8.54999 10.54 10.08 9 11.99 9C13.89 9 15.43 10.54 15.43 12.44C15.43 14.3 13.97 15.81 12.12 15.87Z" />
      <path d="M8.86999 17.9396C7.35999 18.9496 7.35999 20.6096 8.86999 21.6096C10.59 22.7596 13.41 22.7596 15.13 21.6096C16.64 20.5996 16.64 18.9396 15.13 17.9396C13.42 16.7896 10.6 16.7896 8.86999 17.9396Z" />
    </svg>
  );
}

function ApplicationIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-8 fill-current" aria-hidden>
      <path
        opacity="0.4"
        d="M16.7998 2H6.20977C3.88977 2 2.00977 3.88 2.00977 6.19V12.37V12.56C2.00977 14.88 3.88977 16.75 6.19977 16.75H9.79977C10.3498 16.75 10.7998 17.2 10.7998 17.75V18.57C10.7998 19.12 10.3498 19.57 9.79977 19.57H7.54977C7.15977 19.57 6.83977 19.89 6.83977 20.28C6.83977 20.67 7.15977 20.99 7.54977 20.99H15.4798C15.8698 20.99 16.1898 20.67 16.1898 20.28C16.1898 19.89 15.8698 19.57 15.4798 19.57H13.2298C12.6798 19.57 12.2298 19.12 12.2298 18.57V17.75C12.2298 17.2 12.6798 16.75 13.2298 16.75H16.7998C19.1198 16.75 20.9898 14.87 20.9898 12.56V12.37V6.19C20.9898 3.88 19.1098 2 16.7998 2Z"
      />
      <path d="M19.6402 9.5H14.3502C12.6202 9.5 11.9902 10.13 11.9902 11.88V19.61C11.9902 21.37 12.6102 21.99 14.3502 21.99H19.6402C21.3702 21.99 22.0002 21.36 22.0002 19.61V11.88C22.0002 10.12 21.3802 9.5 19.6402 9.5ZM17.0002 20.32C16.3902 20.32 15.9002 19.83 15.9002 19.22C15.9002 18.61 16.3902 18.12 17.0002 18.12C17.6102 18.12 18.1002 18.61 18.1002 19.22C18.1002 19.83 17.6102 20.32 17.0002 20.32Z" />
      <path
        opacity="0.4"
        d="M18.0999 19.2191C18.0999 19.8291 17.6099 20.3191 16.9999 20.3191C16.3899 20.3191 15.8999 19.8291 15.8999 19.2191C15.8999 18.6091 16.3899 18.1191 16.9999 18.1191C17.6099 18.1191 18.0999 18.6191 18.0999 19.2191Z"
      />
    </svg>
  );
}

/** Clockwise home order: TL, TR, MR, BR, BL, ML */
const OUTER_ICONS = [
  { id: "tron", icon: <TronIcon /> },
  { id: "usdt", icon: <UsdtIcon /> },
  { id: "security", icon: <SecurityIcon /> },
  { id: "app", icon: <ApplicationIcon /> },
  { id: "users", icon: <UsersIcon /> },
  { id: "wallet", icon: <WalletIcon /> },
] as const;

function CtaIconCluster() {
  const reduce = useReducedMotion();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (reduce) return;

    let cancelled = false;
    let timer = 0;

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timer = window.setTimeout(resolve, ms);
      });

    const run = async () => {
      while (!cancelled) {
        await wait(HOLD_MS);
        if (cancelled) break;
        setOffset((current) => (current + 1) % OUTER_SLOTS.length);
        await wait(MOVE_MS);
      }
    };

    void run();
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [reduce]);

  return (
    <div className="relative mx-auto w-fit">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--canvas)_72%)]"
      />

      {/* Boxes stay fixed */}
      <div className="mx-auto mb-2 flex w-fit justify-center gap-2">
        <IntegrationCard />
        <IntegrationCard />
      </div>

      <div className="mx-auto my-2 flex w-fit justify-center gap-2">
        <IntegrationCard />
        <IntegrationCard featured>
          <Image
            src={BRAND.iconSrc}
            alt={BRAND.name}
            width={32}
            height={32}
            className="size-8 rounded-full object-cover"
          />
        </IntegrationCard>
        <IntegrationCard />
      </div>

      <div className="mx-auto flex w-fit justify-center gap-2">
        <IntegrationCard />
        <IntegrationCard />
      </div>

      {/* Only icons move clockwise between boxes */}
      <div className="pointer-events-none absolute inset-0 z-20" aria-hidden>
        {OUTER_ICONS.map((item, index) => {
          const slot = OUTER_SLOTS[(index + offset) % OUTER_SLOTS.length]!;
          return (
            <motion.div
              key={item.id}
              className="absolute text-primary [&_svg]:size-8"
              initial={false}
              animate={{
                x: slot.x + ICON_INSET,
                y: slot.y + ICON_INSET,
              }}
              transition={
                reduce
                  ? { duration: 0 }
                  : { duration: MOVE_MS / 1000, ease }
              }
              style={{ left: 0, top: 0 }}
            >
              {item.icon}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export function CtaSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="cta"
      className="relative scroll-mt-24 overflow-hidden bg-canvas px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
    >
      <SectionDivider />

      <div className="relative mx-auto grid w-full max-w-5xl items-center gap-10 sm:grid-cols-2 sm:gap-8 lg:gap-12">
        <motion.div
          className="order-2 sm:order-1"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease }}
        >
          <CtaIconCluster />
        </motion.div>

        <motion.div
          className="order-1 mx-auto max-w-lg space-y-6 text-center sm:order-2 sm:mx-0 sm:text-left"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.06, ease }}
        >
          <p className="font-handwritten text-[1.35rem] font-medium leading-none tracking-normal text-primary sm:text-left">
            Join the future of predictions today.
          </p>

          <h2 className="text-balance text-[clamp(2rem,5vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.04em] text-ink">
            Start predicting today. <br /> zero wallet charges.
          </h2>

          <p className="text-body-lg text-muted">
            Clear predictions, real-time settlement, alerts for every move, and
            one-to-one Discord support - from first deposit to payout.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
            <Button href="#">Get started with webapp</Button>
            <Button
              href={BRAND.discordHref}
              external
              className="bg-[#f0c43a] text-ink shadow-[inset_0_3px_0_0_rgba(255,255,255,0.28),0_2px_4px_0_rgba(196,146,20,0.28)] hover:bg-[#e4b62c]"
            >
              Talk on Discord
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
