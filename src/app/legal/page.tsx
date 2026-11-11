import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { LEGAL_META, legalDocuments } from "@/lib/legal/content";

export const metadata: Metadata = {
  title: `Legal | ${LEGAL_META.brand}`,
  description:
    "Terms of Service, Privacy Policy, and Cookie Policy for 411Predict.",
};

export default function LegalIndexPage() {
  return (
    <div className="space-y-10 sm:space-y-12">
      <header className="max-w-2xl space-y-5">
        <p className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.14em] text-ink">
          <span
            className="size-2.5 shrink-0 rounded-[3px] bg-primary"
            aria-hidden
          />
          {LEGAL_META.brand} · Legal
        </p>
        <h1 className="text-[clamp(2.25rem,6vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-ink">
          Policies
        </h1>
        <p className="text-body-lg text-muted">
          Terms, privacy, and cookies for using 411Predict — same rules as the
          product.
        </p>
        <Button href="/">Back home</Button>
      </header>

      <ul className="grid gap-4 sm:grid-cols-3">
        {legalDocuments.map((doc) => (
          <li key={doc.slug}>
            <Link
              href={doc.href}
              className="group flex h-full flex-col rounded-2xl border border-hairline/60 bg-surface-soft p-[2px] transition hover:border-primary/30 dark:border-hairline/30"
            >
              <div className="flex h-full flex-col rounded-[14px] bg-canvas p-5">
                <p className="text-[17px] font-semibold tracking-[-0.02em] text-ink">
                  {doc.shortTitle}
                </p>
                <p className="mt-2 flex-1 text-[14px] leading-relaxed text-muted">
                  {doc.description}
                </p>
                <span className="mt-5 text-[13px] font-medium text-primary transition group-hover:underline">
                  Read {doc.shortTitle.toLowerCase()}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
