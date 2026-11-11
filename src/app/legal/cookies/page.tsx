import type { Metadata } from "next";
import { LegalDocumentView } from "@/components/legal/legal-document";
import { getLegalDocument, LEGAL_META } from "@/lib/legal/content";

const document = getLegalDocument("cookies");

export const metadata: Metadata = {
  title: `${document.title} | ${LEGAL_META.brand}`,
  description: document.description,
};

export default function CookiesPage() {
  return <LegalDocumentView document={document} />;
}
