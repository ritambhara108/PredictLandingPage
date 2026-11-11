import Image from "next/image";
import { BRAND } from "@/lib/brand";

const MARKETS = [
  {
    name: "Nifty above 25,000",
    tag: "Finance",
    volume: "28.1k",
    status: "Open",
  },
  {
    name: "Gold closes green",
    tag: "Commodities",
    volume: "12.4k",
    status: "Open",
  },
  {
    name: "BTC weekly range",
    tag: "Crypto",
    volume: "19.8k",
    status: "Live",
  },
] as const;

export function AboutDashboardScreen() {
  return (
    <div className="flex h-full min-h-[280px] flex-col bg-canvas text-ink">
      <header className="flex items-center justify-between gap-3 border-b border-hairline px-3 py-2.5 sm:px-4">
        <div className="flex min-w-0 items-center gap-2">
          <span className="grid size-6 shrink-0 place-items-center overflow-hidden rounded-md bg-primary/10">
            <Image
              src={BRAND.iconSrc}
              alt=""
              width={16}
              height={16}
              className="size-4 rounded-md object-cover"
            />
          </span>
          <span className="truncate text-[11px] font-semibold tracking-[-0.02em]">
            {BRAND.wordmark}
          </span>
          <span className="hidden rounded-md bg-surface-soft px-2 py-0.5 text-[9px] font-medium text-muted sm:inline">
            Dashboard
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden h-6 w-28 rounded-md border border-hairline bg-surface-soft sm:block" />
          <span className="rounded-md bg-primary px-2 py-1 text-[9px] font-semibold text-on-primary">
            New market
          </span>
        </div>
      </header>

      <div className="flex min-h-0 flex-1 gap-0">
        <aside className="hidden w-[72px] shrink-0 flex-col gap-2 border-r border-hairline bg-surface-soft/70 p-2 sm:flex">
          {["Home", "Markets", "Wallet", "Refer"].map((item, index) => (
            <span
              key={item}
              className={`rounded-md px-1.5 py-1.5 text-center text-[8px] font-medium ${
                index === 0
                  ? "bg-primary/10 text-primary"
                  : "text-muted"
              }`}
            >
              {item}
            </span>
          ))}
        </aside>

        <div className="min-w-0 flex-1 space-y-3 p-3 sm:p-4">
          <div>
            <p className="text-[13px] font-semibold tracking-[-0.03em] sm:text-[15px]">
              My dashboard
            </p>
            <p className="mt-0.5 text-[9px] text-muted sm:text-[10px]">
              Balances, live markets, and recent settlements
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Available", value: "112.40", tone: "text-ink" },
              { label: "In markets", value: "24.00", tone: "text-ink" },
              { label: "Earned", value: "18.50", tone: "text-primary" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-hairline bg-surface-soft/80 px-2 py-2 sm:px-2.5"
              >
                <p className="text-[8px] font-medium text-muted sm:text-[9px]">
                  {stat.label}
                </p>
                <p
                  className={`mt-1 font-mono text-[11px] font-semibold tracking-[-0.03em] sm:text-[13px] ${stat.tone}`}
                >
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-hairline bg-surface-soft/60 p-2.5 sm:p-3">
            <div className="mb-2 flex items-center justify-between gap-2">
              <p className="text-[10px] font-semibold tracking-[-0.02em] sm:text-[11px]">
                Portfolio trend
              </p>
              <p className="text-[9px] font-medium text-emerald-600 dark:text-emerald-400">
                +6.2%
              </p>
            </div>
            <svg
              viewBox="0 0 320 72"
              className="h-[52px] w-full sm:h-[64px]"
              aria-hidden
            >
              <defs>
                <linearGradient id="aboutDashFill" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="0%"
                    stopColor="var(--primary)"
                    stopOpacity="0.28"
                  />
                  <stop
                    offset="100%"
                    stopColor="var(--primary)"
                    stopOpacity="0"
                  />
                </linearGradient>
              </defs>
              <path
                d="M0 54 C28 50 42 58 64 44 C86 30 104 22 128 28 C152 34 168 48 192 36 C216 24 236 14 260 20 C284 26 304 18 320 12 L320 72 L0 72 Z"
                fill="url(#aboutDashFill)"
              />
              <path
                d="M0 54 C28 50 42 58 64 44 C86 30 104 22 128 28 C152 34 168 48 192 36 C216 24 236 14 260 20 C284 26 304 18 320 12"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="overflow-hidden rounded-lg border border-hairline">
            <div className="flex items-center justify-between border-b border-hairline bg-surface-soft/70 px-2.5 py-1.5">
              <p className="text-[10px] font-semibold">Live markets</p>
              <p className="text-[9px] text-muted">USDT</p>
            </div>
            <ul className="divide-y divide-hairline bg-canvas">
              {MARKETS.map((market) => (
                <li
                  key={market.name}
                  className="flex items-center justify-between gap-2 px-2.5 py-1.5"
                >
                  <div className="min-w-0">
                    <p className="truncate text-[10px] font-medium tracking-[-0.02em]">
                      {market.name}
                    </p>
                    <p className="text-[8px] text-muted">{market.tag}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="font-mono text-[9px] font-medium">
                      {market.volume}
                    </p>
                    <p className="text-[8px] font-medium text-emerald-600 dark:text-emerald-400">
                      {market.status}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
