export type FeaturedPrediction = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  volume: string;
  status: "Open for Joining";
  joinEndsAt: string;
  resultAt: string;
  href: string;
};

export const featuredPredictions: FeaturedPrediction[] = [
  {
    id: "nifty-close",
    title: "Will Nifty close above 25,000 this week?",
    description:
      "Join the weekly index forecast with clear volume and settlement timing.",
    image: "/brand/prediction-nifty.jpg",
    imageAlt: "Nifty index prediction",
    volume: "28.1k USDT",
    status: "Open for Joining",
    joinEndsAt: "2026-11-12T18:30:00+05:30",
    resultAt: "2026-11-14T16:00:00+05:30",
    href: "#cta",
  },
  {
    id: "btc-weekend",
    title: "Will Bitcoin stay above $95,000 by Sunday?",
    description:
      "A short crypto prediction with transparent fees and live volume.",
    image: "/brand/prediction-bitcoin.jpg",
    imageAlt: "Bitcoin prediction",
    volume: "41.6k USDT",
    status: "Open for Joining",
    joinEndsAt: "2026-11-13T23:59:00+05:30",
    resultAt: "2026-11-16T10:00:00+05:30",
    href: "#cta",
  },
  {
    id: "gold-month",
    title: "Will gold finish the month above $2,650?",
    description:
      "Commodity outlook with a simple join window and a fixed result time.",
    image: "/brand/prediction-gold.jpg",
    imageAlt: "Gold prediction",
    volume: "16.4k USDT",
    status: "Open for Joining",
    joinEndsAt: "2026-11-15T20:00:00+05:30",
    resultAt: "2026-11-30T18:00:00+05:30",
    href: "#cta",
  },
  {
    id: "eth-week",
    title: "Will Ethereum hold above $3,400 this week?",
    description:
      "Track the weekly ETH move with upfront volume and a clear result window.",
    image: "/brand/prediction-eth.jpg",
    imageAlt: "Ethereum prediction",
    volume: "22.8k USDT",
    status: "Open for Joining",
    joinEndsAt: "2026-11-14T21:00:00+05:30",
    resultAt: "2026-11-17T12:00:00+05:30",
    href: "#cta",
  },
  {
    id: "crude-oil",
    title: "Will crude oil stay under $78 by Friday?",
    description:
      "Energy prediction with a short join window and transparent settlement timing.",
    image: "/brand/prediction-oil.jpg",
    imageAlt: "Crude oil prediction",
    volume: "19.2k USDT",
    status: "Open for Joining",
    joinEndsAt: "2026-11-13T17:00:00+05:30",
    resultAt: "2026-11-14T19:30:00+05:30",
    href: "#cta",
  },
  {
    id: "usd-inr",
    title: "Will USD/INR stay below 84.50 this week?",
    description:
      "A clean FX prediction with live volume and a fixed result timestamp.",
    image: "/brand/prediction-fx.jpg",
    imageAlt: "USD INR prediction",
    volume: "31.5k USDT",
    status: "Open for Joining",
    joinEndsAt: "2026-11-14T15:30:00+05:30",
    resultAt: "2026-11-15T17:00:00+05:30",
    href: "#cta",
  },
  {
    id: "sensex-close",
    title: "Will Sensex close above 82,000 on Friday?",
    description:
      "Index outlook for the week with clear fees and settlement timing.",
    image: "/brand/prediction-nifty.jpg",
    imageAlt: "Sensex index prediction",
    volume: "24.7k USDT",
    status: "Open for Joining",
    joinEndsAt: "2026-11-13T18:00:00+05:30",
    resultAt: "2026-11-14T16:00:00+05:30",
    href: "#cta",
  },
  {
    id: "cricket-toss",
    title: "Will India win the toss in the next T20?",
    description:
      "A fast sports prediction with open joining and a quick result window.",
    image: "/brand/prediction-cricket.jpg",
    imageAlt: "Cricket prediction",
    volume: "12.9k USDT",
    status: "Open for Joining",
    joinEndsAt: "2026-11-12T14:00:00+05:30",
    resultAt: "2026-11-12T19:30:00+05:30",
    href: "#cta",
  },
  {
    id: "silver-week",
    title: "Will silver finish above $31 by next Monday?",
    description:
      "Metal market prediction with clear volume and a fixed settlement time.",
    image: "/brand/prediction-gold.jpg",
    imageAlt: "Silver prediction",
    volume: "14.1k USDT",
    status: "Open for Joining",
    joinEndsAt: "2026-11-15T22:00:00+05:30",
    resultAt: "2026-11-17T18:00:00+05:30",
    href: "#cta",
  },
  {
    id: "nasdaq-week",
    title: "Will Nasdaq close green for the week?",
    description:
      "Weekly tech-index call with transparent prediction size and result timing.",
    image: "/brand/hero-prediction-banner.jpg",
    imageAlt: "Nasdaq prediction",
    volume: "27.3k USDT",
    status: "Open for Joining",
    joinEndsAt: "2026-11-14T23:00:00+05:30",
    resultAt: "2026-11-15T06:00:00+05:30",
    href: "#cta",
  },
];
