"use client";

import type { ReactNode } from "react";
import Link from "next/link";

const URL_PATTERN = /(https?:\/\/[^\s)]+)/g;

const POLICY_LINKS = [
  { label: "Terms and Conditions", slug: "terms" },
  { label: "Privacy Policy", slug: "privacy" },
  { label: "Cookie Policy", slug: "cookies" },
] as const;

const POLICY_PATTERN = new RegExp(
  `(${POLICY_LINKS.map((item) => item.label.replace(/ /g, "\\s+")).join("|")})`,
  "g",
);

const linkClass =
  "font-medium break-all text-primary underline decoration-primary/40 underline-offset-[3px] transition hover:decoration-primary";

function linkifyPolicies(text: string): ReactNode[] {
  const parts = text.split(POLICY_PATTERN);
  return parts.map((part, index) => {
    const policy = POLICY_LINKS.find((item) => item.label === part);
    if (!policy) return part;
    return (
      <Link
        key={`${policy.slug}-${index}`}
        href={`/legal/${policy.slug}`}
        className={linkClass}
      >
        {part}
      </Link>
    );
  });
}

function linkifyText(text: string): ReactNode {
  const chunks = text.split(URL_PATTERN);
  const nodes: ReactNode[] = [];

  chunks.forEach((chunk, index) => {
    if (!chunk) return;
    if (/^https?:\/\//i.test(chunk)) {
      nodes.push(
        <a
          key={`url-${index}`}
          href={chunk}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          {chunk}
        </a>,
      );
      return;
    }
    nodes.push(
      ...linkifyPolicies(chunk).map((node, inner) =>
        typeof node === "string" ? (
          <span key={`t-${index}-${inner}`}>{node}</span>
        ) : (
          node
        ),
      ),
    );
  });

  return nodes;
}

export function LegalRichText({ text }: { text: string }) {
  return <>{linkifyText(text)}</>;
}
