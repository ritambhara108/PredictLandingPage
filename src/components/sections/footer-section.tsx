import Image from "next/image";
import { BRAND } from "@/lib/brand";

const linkClass =
  "text-[15px] leading-5 text-white transition-colors hover:text-white/70";

const explore = [
  { label: "About", href: "#about" },
  { label: "Predictions", href: "#predictions" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Why Us", href: "#why-us" },
  { label: "Get started", href: "#cta" },
] as const;

const legal = [
  { label: "Terms & conditions", href: "/legal/terms" },
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Cookie Policy", href: "/legal/cookies" },
] as const;

const contact = [
  {
    label: "Discord",
    value: BRAND.name,
    href: BRAND.discordHref,
  },
  {
    label: "Support",
    value: "Markets, deposits, withdrawals",
    href: BRAND.discordHref,
  },
  {
    label: "App",
    value: "Start predicting",
    href: "#",
  },
] as const;

function FooterLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      className={linkClass}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {label}
    </a>
  );
}

export function FooterSection() {
  return (
    <footer id="footer">
      <div className="h-[50px] bg-[#041530]" aria-hidden>
        <div className="h-full rounded-b-[30px] bg-canvas" />
      </div>

      <div className="bg-[linear-gradient(#041530,#0e76ff)] text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-8 px-6 pb-10 pt-8 sm:gap-12 sm:pb-16 sm:pt-10 lg:grid-cols-3 lg:gap-10">
          <div className="min-w-0">
            <p className="text-[13px] font-medium text-white/50">Explore</p>
            <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
              {explore.map((link) => (
                <li key={link.href + link.label}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <p className="text-[13px] font-medium text-white/50">Legal</p>
            <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
              {legal.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 min-w-0 lg:col-span-1">
            <p className="text-[13px] font-medium text-white/50">Contact</p>
            <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-3 sm:mt-4 sm:gap-y-4 lg:grid-cols-1">
              {contact.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="block text-white transition-colors hover:text-white/70"
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    <span className="block text-[13px] font-medium text-white/50">
                      {item.label}
                    </span>
                    <span className="mt-1 block break-all text-[14px] leading-5 sm:break-words sm:text-[15px]">
                      {item.value}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto flex max-w-6xl items-end justify-between gap-6 border-t border-white/10 px-6 py-8">
          <div className="min-w-0">
            <a href="#hero" className="inline-flex items-center gap-2.5 text-white">
              <Image
                src={BRAND.iconSrc}
                alt=""
                width={32}
                height={32}
                className="size-8 rounded-full object-cover"
              />
              <span className="text-[16px] font-semibold tracking-[-0.03em]">
                {BRAND.wordmark}
              </span>
            </a>
            <p className="mt-3 max-w-xs text-[15px] leading-6 text-white/70">
              A clean prediction marketplace - clear volume, fair settlement,
              and a simple path from deposit to payout.
            </p>
            <p className="mt-5 text-[12px] tracking-normal text-white/50">
              © 2026 {BRAND.name}. All rights reserved.
            </p>
          </div>
          <p className="hidden text-[clamp(48px,8vw,96px)] font-semibold leading-none tracking-[-0.05em] text-white/10 sm:block">
            {BRAND.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
