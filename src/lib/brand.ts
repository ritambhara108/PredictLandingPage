export const BRAND = {
  name: "411Predict",
  wordmark: "411Predict",
  accent: "#0e76ff",
  iconSrc: "/brand/newIcon.png",
  logoSrc: "/brand/logo.png",
  whatsappPngSrc: "/brand/whatsapp.png",
  logoWidth: 904,
  logoHeight: 152,
  telegramUsername: "411Predict",
  telegramHref: "https://t.me/411Predict",
  discordHref: "https://discord.gg/WGAm7Y23f",
} as const;

export const DISCORD_WIDGET = {
  title: "Join us on Discord",
  body: "Questions about markets, deposits, or withdrawals? Hop into Discord and we’ll help you through it.",
  placeholder: "Type your message…",
  cta: "Open Discord",
  emptyMessage:
    "Hi 411Predict — I’d like help getting started with predictions.",
} as const;

export function telegramChatHref(text?: string) {
  const message = text?.trim();
  if (!message) return BRAND.telegramHref;
  return `${BRAND.telegramHref}?text=${encodeURIComponent(message)}`;
}
