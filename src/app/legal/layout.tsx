import type { Metadata } from "next";
import { LegalTopNav } from "@/components/legal/legal-chrome";
import { LEGAL_META } from "@/lib/legal/content";

export const metadata: Metadata = {
  title: `Legal | ${LEGAL_META.brand}`,
  description:
    "Terms of Service, Privacy Policy, and Cookie Policy for 411Predict.",
};

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-dvh bg-canvas">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_at_top,color-mix(in_srgb,var(--primary)_12%,transparent)_0%,transparent_70%)]"
      />
      <LegalTopNav />
      <main className="relative mx-auto w-full max-w-4xl px-5 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-32 lg:px-12">
        {children}
      </main>
    </div>
  );
}
