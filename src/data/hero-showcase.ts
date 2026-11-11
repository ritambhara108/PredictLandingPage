export type HeroShowcaseCard = {
  id: string;
  title: string;
  category: string;
  description: string;
  href: string;
  icon: "referral" | "predict" | "wallet" | "withdraw" | "commission" | "deposit" | "chain" | "fees" | "register" | "support" | "login";
};

export const heroShowcaseCards: HeroShowcaseCard[] = [
  {
    id: "referral",
    title: "Referral system",
    category: "Growth",
    description: "Invite friends and grow together with a clear referral path.",
    href: "#about",
    icon: "referral",
  },
  {
    id: "prediction",
    title: "Prediction markets",
    category: "Markets",
    description:
      "Join market-forecast predictions with clear volume — from indices to commodities.",
    href: "#predictions",
    icon: "predict",
  },
  {
    id: "wallet",
    title: "Safe & secure wallet",
    category: "Security",
    description: "Protected balances with a wallet flow built for clarity.",
    href: "#how-it-works",
    icon: "wallet",
  },
  {
    id: "withdrawal",
    title: "Easy withdrawal",
    category: "Wallet",
    description: "Request withdrawals without friction or confusing steps.",
    href: "#how-it-works",
    icon: "withdraw",
  },
  {
    id: "commission",
    title: "Referral commission",
    category: "Rewards",
    description: "Earn commission when your referrals join and play.",
    href: "#about",
    icon: "commission",
  },
  {
    id: "deposit",
    title: "Instant wallet deposit",
    category: "Wallet",
    description: "Fund your wallet quickly and jump into markets faster.",
    href: "#how-it-works",
    icon: "deposit",
  },
  {
    id: "blockchain",
    title: "Blockchain verified",
    category: "Trust",
    description: "Settlements and records designed with verifiable integrity.",
    href: "#why-us",
    icon: "chain",
  },
  {
    id: "fees",
    title: "No hidden charges",
    category: "Transparency",
    description: "What you see is what you pay — fees stay upfront.",
    href: "#why-us",
    icon: "fees",
  },
  {
    id: "register",
    title: "Free registration",
    category: "Access",
    description: "Create an account at no cost and explore the marketplace.",
    href: "#cta",
    icon: "register",
  },
  {
    id: "support",
    title: "24×7 support",
    category: "Help",
    description: "Help whenever you need it — day or night.",
    href: "#how-it-works",
    icon: "support",
  },
  {
    id: "login-withdraw",
    title: "Easy login & withdrawal",
    category: "Experience",
    description: "Simple sign-in and a smooth path from balance to cash-out.",
    href: "#how-it-works",
    icon: "login",
  },
];
