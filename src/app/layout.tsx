import type { Metadata } from "next";
import { Caveat, Geist_Mono, Inter } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SmoothScroll } from "@/components/smooth-scroll";
import { TelegramWidget } from "@/components/telegram-widget";
import { BRAND } from "@/lib/brand";
import { THEME_STORAGE_KEY } from "@/lib/theme-constants";
import "lenis/dist/lenis.css";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${BRAND.name} — Prediction marketplace`,
  description:
    "Trade outcomes on 411Predict. A clean prediction marketplace for real-world markets.",
  applicationName: BRAND.name,
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/brand/newIcon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: BRAND.name,
    description: "Prediction marketplace platform",
    images: [
      {
        url: "/brand/newIcon.png",
        width: 512,
        height: 512,
        alt: BRAND.name,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} ${caveat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="flex min-h-full flex-col font-sans text-body"
        suppressHydrationWarning
      >
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var k=${JSON.stringify(THEME_STORAGE_KEY)};var t=localStorage.getItem(k)||"system";var d=document.documentElement;var r=t==="system"?(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"):t;d.classList.remove("light","dark");d.classList.add(r);d.style.colorScheme=r;}catch(e){}})();`,
          }}
        />
        <ThemeProvider>
          <SmoothScroll>
            {children}
            <TelegramWidget />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
