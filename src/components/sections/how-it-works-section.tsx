"use client";

import { motion } from "motion/react";
import { SectionDivider } from "@/components/ui/section-divider";
import { HowItWorksBento } from "./how-it-works-bento";

const ease = [0.22, 1, 0.36, 1] as const;

function LoginInlineIcon({ className }: { className?: string }) {
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
      <path
        opacity="0.4"
        d="M9 7.2V16.79C9 20 11 22 14.2 22H16.79C19.99 22 21.99 20 21.99 16.8V7.2C22 4 20 2 16.8 2H14.2C11 2 9 4 9 7.2Z"
      />
      <path d="M12.43 8.11953L15.78 11.4695C16.07 11.7595 16.07 12.2395 15.78 12.5295L12.43 15.8795C12.14 16.1695 11.66 16.1695 11.37 15.8795C11.08 15.5895 11.08 15.1095 11.37 14.8195L13.44 12.7495H2.75C2.34 12.7495 2 12.4095 2 11.9995C2 11.5895 2.34 11.2495 2.75 11.2495H13.44L11.37 9.17953C11.22 9.02953 11.15 8.83953 11.15 8.64953C11.15 8.45953 11.22 8.26953 11.37 8.11953C11.66 7.81953 12.13 7.81953 12.43 8.11953Z" />
    </svg>
  );
}

function PayoutInlineIcon({ className }: { className?: string }) {
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
      <g clipPath="url(#how-it-works-payout-clip)">
        <path d="M5 15C4.06 15 3.19 15.33 2.5 15.88C1.58 16.61 1 17.74 1 19C1 19.75 1.21 20.46 1.58 21.06C2.27 22.22 3.54 23 5 23C6.01 23 6.93001 22.63 7.63 22C7.94 21.74 8.21 21.42 8.42 21.06C8.79 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15ZM7.07001 18.57L4.94 20.54C4.8 20.67 4.60999 20.74 4.42999 20.74C4.23999 20.74 4.04999 20.67 3.89999 20.52L2.91 19.53C2.62 19.24 2.62 18.76 2.91 18.47C3.2 18.18 3.68 18.18 3.97 18.47L4.45 18.95L6.05 17.47C6.35 17.19 6.83 17.21 7.11 17.51C7.39 17.81 7.37001 18.29 7.07001 18.57Z" />
        <path
          opacity="0.4"
          d="M19.48 12.95H21.5V11.51C21.5 9.44001 19.81 7.75 17.74 7.75H6.25999C4.18999 7.75 2.5 9.44001 2.5 11.51V15.88C3.19 15.33 4.06 15 5 15C7.21 15 9 16.79 9 19C9 19.75 8.79 20.46 8.42 21.06C8.21 21.42 7.94 21.74 7.63 22H17.74C19.81 22 21.5 20.31 21.5 18.24V17.05H19.6C18.52 17.05 17.53 16.26 17.44 15.18C17.38 14.55 17.62 13.96 18.04 13.55C18.41 13.17 18.92 12.95 19.48 12.95Z"
        />
        <path d="M14.85 3.94964V7.74962H6.25999C4.18999 7.74962 2.5 9.43963 2.5 11.5096V7.83965C2.5 6.64965 3.23 5.58961 4.34 5.16961L12.28 2.16961C13.52 1.70961 14.85 2.61963 14.85 3.94964Z" />
        <path d="M22.5598 13.9702V16.0302C22.5598 16.5802 22.1198 17.0302 21.5598 17.0502H19.5998C18.5198 17.0502 17.5298 16.2602 17.4398 15.1802C17.3798 14.5502 17.6198 13.9602 18.0398 13.5502C18.4098 13.1702 18.9198 12.9502 19.4798 12.9502H21.5598C22.1198 12.9702 22.5598 13.4202 22.5598 13.9702Z" />
        <path d="M14 12.75H7C6.59 12.75 6.25 12.41 6.25 12C6.25 11.59 6.59 11.25 7 11.25H14C14.41 11.25 14.75 11.59 14.75 12C14.75 12.41 14.41 12.75 14 12.75Z" />
      </g>
      <defs>
        <clipPath id="how-it-works-payout-clip">
          <rect width="24" height="24" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}

const inlineIconClass =
  "mx-1 inline-block size-[0.85em] shrink-0 align-[-0.14em] text-primary";

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
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
          
          <h2 className="mt-3 text-section-title text-ink">
            From first login
            <LoginInlineIcon className={inlineIconClass} />
            to payout
            <PayoutInlineIcon className={inlineIconClass} />
          </h2>
          <p className="mt-3 max-w-lg text-body-lg text-muted">
            Fund your wallet, take predictions, earn on every referral, and
            withdraw securely - All backed by blockchain.
          </p>
        </motion.div>

        <div className="mt-10 sm:mt-12">
          <HowItWorksBento />
        </div>
      </div>
    </section>
  );
}
