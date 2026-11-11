"use client";

import { useEffect, useState, type ReactNode } from "react";
import { LandingPageSkeleton } from "@/components/landing-page-skeleton";

/**
 * Shows the landing skeleton until the client is ready (first paint / hydration),
 * then reveals the real page. Content still SSRs for SEO under the overlay.
 */
export function LandingBoot({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setReady(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  return (
    <>
      {!ready ? (
        <div className="fixed inset-0 z-[100] overflow-auto bg-canvas">
          <LandingPageSkeleton />
        </div>
      ) : null}
      <div
        aria-hidden={!ready}
        className={ready ? undefined : "invisible pointer-events-none absolute inset-0 -z-10 overflow-hidden"}
      >
        {children}
      </div>
    </>
  );
}
