import type { LegalDocument } from "@/lib/legal/content";
import { LEGAL_META } from "@/lib/legal/content";
import { LegalSectionBody } from "@/components/legal/legal-section-body";
import { SectionDivider } from "@/components/ui/section-divider";

function DocumentSections({ document }: { document: LegalDocument }) {
  return (
    <div className="space-y-10 sm:space-y-12">
      {document.sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="scroll-mt-32 space-y-4 sm:scroll-mt-36"
        >
          <h2 className="text-section-title text-ink">{section.title}</h2>
          <LegalSectionBody section={section} />
        </section>
      ))}
    </div>
  );
}

function OnThisPage({ document }: { document: LegalDocument }) {
  if (document.sections.length <= 1) return null;

  return (
    <div className="rounded-2xl border border-hairline/60 bg-surface-soft p-[2px] dark:border-hairline/30">
      <div className="rounded-[14px] bg-canvas px-4 py-4 sm:px-5">
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
          On this page
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {document.sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="inline-flex rounded-[12px] border border-hairline bg-surface-soft px-3 py-1.5 text-[13px] font-medium tracking-[-0.01em] text-muted transition hover:border-primary/30 hover:text-primary"
              >
                {section.title.replace(/^\d+\.\s*/, "")}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function LegalDocumentView({ document }: { document: LegalDocument }) {
  const dates =
    String(LEGAL_META.lastUpdated) !== String(LEGAL_META.effectiveDate)
      ? `Effective ${LEGAL_META.effectiveDate} · Last updated ${LEGAL_META.lastUpdated}`
      : `Effective ${LEGAL_META.effectiveDate}`;

  return (
    <article className="relative">
      <header className="max-w-3xl space-y-5">
        <p className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.14em] text-ink">
          <span
            className="size-2.5 shrink-0 rounded-[3px] bg-primary"
            aria-hidden
          />
          {LEGAL_META.brand} · Legal
        </p>

        <h1 className="text-[clamp(2.25rem,6vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-ink">
          {document.title}
        </h1>

        <p className="text-body-lg text-muted">
          {document.description}
        </p>

        <p className="text-[13px] font-medium tracking-[-0.01em] text-muted">
          {dates}
        </p>
      </header>

      <div className="relative mt-8 overflow-hidden rounded-2xl border border-hairline/60 bg-canvas px-4 py-4 sm:mt-10 sm:px-5 sm:py-5 dark:border-hairline/30">
        <p className="text-[14px] leading-relaxed text-muted">
          Operated by{" "}
          <span className="font-medium text-ink">{LEGAL_META.legalEntity}</span>
          , {LEGAL_META.registeredOffice}. This page is general information, not
          legal advice.
        </p>
      </div>

      <div className="mt-8 sm:mt-10">
        <OnThisPage document={document} />
      </div>

      <div className="relative mt-12 pt-12 sm:mt-14 sm:pt-14">
        <SectionDivider />
        <DocumentSections document={document} />
      </div>
    </article>
  );
}
