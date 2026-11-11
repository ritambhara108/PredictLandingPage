"use client";

import {
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { HeroShowcaseCard } from "@/data/hero-showcase";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

function useDemoStep(active: boolean, steps: number, intervalMs = 2000) {
  const reduce = useReducedMotion();
  const previewStep = Math.min(steps - 1, Math.max(1, steps - 2));
  const [step, setStep] = useState(previewStep);

  useEffect(() => {
    if (!active || reduce || steps <= 1) {
      setStep(reduce ? steps - 1 : previewStep);
      return;
    }
    setStep(0);
    const id = window.setInterval(() => {
      setStep((current) => (current + 1) % steps);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [active, reduce, steps, intervalMs, previewStep]);

  return step;
}

function ScreenShell({
  eyebrow,
  title,
  children,
  footer,
  action,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden bg-surface-soft dark:bg-[#0c0c0d]">
      <div className="flex items-start justify-between gap-2 border-b border-hairline px-3 py-2">
        <div className="min-w-0">
          <p className="text-[9px] font-semibold tracking-[0.16em] text-primary/80 uppercase">
            {eyebrow}
          </p>
          <p className="mt-0.5 truncate text-[13px] font-semibold text-ink">
            {title}
          </p>
        </div>
        {action}
      </div>
      <div className="min-h-0 flex-1 overflow-hidden p-2.5">{children}</div>
      {footer ? (
        <div className="border-t border-dashed border-hairline px-3 py-2">
          {footer}
        </div>
      ) : null}
    </div>
  );
}

function Caption({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-0.5">
      <p className="text-[12px] font-semibold leading-snug text-ink">{title}</p>
      <p className="line-clamp-1 text-[10px] text-muted">{description}</p>
    </div>
  );
}

function Field({
  label,
  value,
  filled,
  mono,
}: {
  label: string;
  value: string;
  filled: boolean;
  mono?: boolean;
}) {
  return (
    <div className="rounded-md border border-hairline bg-canvas px-2 py-1.5">
      <p className="text-[8px] font-bold tracking-[0.12em] text-primary/75 uppercase">
        {label}
      </p>
      <p
        className={cn(
          "mt-0.5 min-h-[14px] truncate text-[11px] text-ink",
          mono && "font-mono tracking-tight",
          !filled && "text-muted/40",
        )}
      >
        {filled ? value : " "}
      </p>
    </div>
  );
}

function StatusDot({ online = true }: { online?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex size-1.5 rounded-full",
        online ? "bg-emerald-500" : "bg-muted",
      )}
    />
  );
}

function PredictScreen({
  card,
  active,
}: {
  card: HeroShowcaseCard;
  active: boolean;
}) {
  const step = useDemoStep(active, 4, 1900);
  const picked = step >= 2;
  const volume =
    step === 0 ? "24.8k" : step === 1 ? "26.4k" : "28.1k";

  return (
    <ScreenShell
      eyebrow="Markets"
      title="Live prediction"
      footer={<Caption title={card.title} description={card.description} />}
    >
      <div className="overflow-hidden rounded-lg border border-ink/10 bg-[#eef4ff] p-2 dark:border-white/10 dark:bg-[#020617]">
        <div className="flex items-center gap-1.5">
          <span className="inline-flex items-center gap-1 rounded-md border border-emerald-500/25 bg-emerald-500/10 px-1.5 py-0.5 text-[9px] font-semibold text-emerald-700 uppercase dark:text-emerald-300">
            <StatusDot />
            Open
          </span>
          <span className="text-[9px] font-semibold tracking-wide text-primary uppercase">
            Finance
          </span>
        </div>

        <p className="mt-2 line-clamp-2 text-[11px] font-bold leading-snug text-ink">
          Will Nifty close above 25,000 this week?
        </p>

        <div className="mt-2 grid grid-cols-3 gap-1 rounded-md border border-dashed border-ink/10 bg-canvas/80 p-1.5 dark:border-white/15">
          <div className="text-center">
            <p className="text-[8px] text-muted">Min fee</p>
            <p className="text-[10px] font-bold tabular-nums text-ink">25 USDT</p>
          </div>
          <div className="text-center">
            <p className="text-[8px] text-muted">Volume</p>
            <motion.p
              className="text-[10px] font-bold tabular-nums text-ink"
              key={volume}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
            >
              {volume} USDT
            </motion.p>
          </div>
          <div className="text-center">
            <p className="text-[8px] text-muted">Status</p>
            <p className="text-[10px] font-bold text-ink">Open</p>
          </div>
        </div>

        <div className="mt-2 flex gap-1.5">
          <motion.span
            className={cn(
              "inline-flex h-7 flex-1 items-center justify-center rounded-md bg-primary text-[10px] font-bold text-white uppercase",
              picked && "ring-2 ring-primary/40 ring-offset-1 ring-offset-[#eef4ff] dark:ring-offset-[#020617]",
            )}
            animate={
              active && step === 2
                ? { scale: [1, 0.94, 1.05, 1] }
                : { scale: 1 }
            }
            transition={{ duration: 0.45, ease }}
          >
            Yes
          </motion.span>
          <span className="inline-flex h-7 flex-1 items-center justify-center rounded-md bg-violet-600 text-[10px] font-bold text-white uppercase">
            No
          </span>
        </div>

        <AnimatePresence mode="wait">
          {step >= 3 ? (
            <motion.p
              key="joined"
              className="mt-1.5 text-center text-[9px] font-semibold text-emerald-600 dark:text-emerald-300"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              Joined on Yes · settlement pending
            </motion.p>
          ) : null}
        </AnimatePresence>
      </div>
    </ScreenShell>
  );
}

function WalletScreen({
  card,
  active,
}: {
  card: HeroShowcaseCard;
  active: boolean;
}) {
  const step = useDemoStep(active, 3, 2100);
  const available = step === 0 ? "86.00" : step === 1 ? "112.40" : "128.40";

  return (
    <ScreenShell
      eyebrow="Wallet"
      title="Balances"
      footer={<Caption title={card.title} description={card.description} />}
      action={
        <span className="rounded-md bg-emerald-500/15 px-1.5 py-0.5 text-[8px] font-semibold text-emerald-700 dark:text-emerald-300">
          Secured
        </span>
      }
    >
      <div className="grid grid-cols-2 gap-1.5">
        <div className="rounded-lg border border-hairline bg-canvas p-2">
          <p className="text-[9px] text-muted">Available</p>
          <motion.p
            key={available}
            className="mt-1 text-[13px] font-semibold tabular-nums text-ink"
            initial={{ opacity: 0.4, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {available}
          </motion.p>
        </div>
        <div className="rounded-lg border border-hairline bg-canvas p-2">
          <p className="text-[9px] text-muted">In markets</p>
          <p className="mt-1 text-[13px] font-semibold tabular-nums text-ink">
            24.00
          </p>
        </div>
      </div>
      <div className="mt-2 flex gap-1.5">
        <motion.span
          className="inline-flex h-7 flex-1 items-center justify-center rounded-md bg-emerald-600 text-[10px] font-semibold text-white"
          animate={
            active && step === 1 ? { scale: [1, 0.96, 1.03, 1] } : { scale: 1 }
          }
        >
          Deposit
        </motion.span>
        <span className="inline-flex h-7 flex-1 items-center justify-center rounded-md bg-amber-500 text-[10px] font-semibold text-white">
          Withdraw
        </span>
      </div>
      <div className="mt-2 space-y-1">
        {[
          { label: "Deposit confirmed", amount: "+40.00", tone: "text-emerald-600" },
          { label: "Joined market", amount: "-10.00", tone: "text-ink" },
        ].map((row, i) => (
          <motion.div
            key={row.label}
            className="flex items-center justify-between rounded-md border border-hairline bg-canvas px-2 py-1.5"
            initial={false}
            animate={
              active
                ? { opacity: 1, x: 0 }
                : { opacity: 0.7, x: 0 }
            }
            transition={{ delay: i * 0.08 }}
          >
            <span className="text-[10px] text-muted">{row.label}</span>
            <span className={cn("text-[10px] font-semibold tabular-nums", row.tone)}>
              {row.amount}
            </span>
          </motion.div>
        ))}
      </div>
    </ScreenShell>
  );
}

function DepositScreen({
  card,
  active,
}: {
  card: HeroShowcaseCard;
  active: boolean;
}) {
  const step = useDemoStep(active, 4, 1900);
  const labels = ["Network", "Asset", "Transfer", "Done"];

  return (
    <ScreenShell
      eyebrow="Deposit"
      title="Instant funding"
      footer={<Caption title={card.title} description={card.description} />}
    >
      <div className="mb-2 flex items-center gap-1">
        {labels.map((label, index) => (
          <div key={label} className="flex min-w-0 flex-1 items-center gap-1">
            <span
              className={cn(
                "grid size-5 shrink-0 place-items-center rounded-full text-[8px] font-bold",
                index <= step
                  ? "bg-emerald-500 text-white"
                  : "border border-hairline text-muted",
              )}
            >
              {index < step ? "✓" : index + 1}
            </span>
            {index < labels.length - 1 ? (
              <span
                className={cn(
                  "h-0.5 flex-1 rounded-full",
                  index < step ? "bg-emerald-500" : "bg-hairline",
                )}
              />
            ) : null}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          className="rounded-lg border border-hairline bg-canvas p-2"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.25, ease }}
        >
          {step === 0 ? (
            <>
              <p className="text-[9px] font-bold tracking-[0.12em] text-primary/80 uppercase">
                Select network
              </p>
              <div className="mt-1.5 space-y-1">
                <div className="rounded-md border border-primary bg-primary/8 px-2 py-1.5 text-[11px] font-semibold text-ink">
                  TRC20
                </div>
                <div className="rounded-md border border-hairline px-2 py-1.5 text-[11px] text-muted">
                  ERC20
                </div>
              </div>
            </>
          ) : null}
          {step === 1 ? (
            <>
              <p className="text-[9px] font-bold tracking-[0.12em] text-primary/80 uppercase">
                Asset
              </p>
              <div className="mt-1.5 rounded-md border border-primary bg-primary/8 px-2 py-2">
                <p className="text-[11px] font-semibold text-ink">USDT</p>
                <p className="text-[9px] text-muted">Tether · TRC20</p>
              </div>
            </>
          ) : null}
          {step === 2 ? (
            <>
              <p className="text-[9px] font-bold tracking-[0.12em] text-primary/80 uppercase">
                Send to wallet
              </p>
              <p className="mt-1.5 break-all font-mono text-[9px] text-ink">
                TXk9…7a2f
              </p>
              <p className="mt-2 text-[10px] text-muted">Waiting for 1 confirmation…</p>
              <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-surface-card">
                <motion.div
                  className="h-full bg-primary"
                  initial={{ width: "18%" }}
                  animate={{ width: "78%" }}
                  transition={{ duration: 1.1, ease }}
                />
              </div>
            </>
          ) : null}
          {step === 3 ? (
            <div className="py-2 text-center">
              <p className="text-[12px] font-semibold text-emerald-600 dark:text-emerald-300">
                Deposit credited
              </p>
              <p className="mt-1 text-[16px] font-bold tabular-nums text-ink">
                +50.00 USDT
              </p>
            </div>
          ) : null}
        </motion.div>
      </AnimatePresence>
    </ScreenShell>
  );
}

function WithdrawScreen({
  card,
  active,
}: {
  card: HeroShowcaseCard;
  active: boolean;
}) {
  const step = useDemoStep(active, 3, 2100);

  return (
    <ScreenShell
      eyebrow="Withdraw"
      title="Cash out"
      footer={<Caption title={card.title} description={card.description} />}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.25, ease }}
        >
          {step === 0 ? (
            <div className="rounded-lg border border-hairline bg-canvas p-2">
              <div className="flex items-center justify-between">
                <p className="text-[10px] text-muted">Available</p>
                <p className="text-[12px] font-semibold tabular-nums text-emerald-700 dark:text-emerald-300">
                  128.40 USDT
                </p>
              </div>
              <div className="mt-1.5">
                <Field label="Amount" value="50.00 USDT" filled />
              </div>
              <div className="mt-1.5">
                <Field label="Destination" value="TXk9…7a2f" filled mono />
              </div>
            </div>
          ) : null}

          {step === 1 ? (
            <div className="rounded-lg border border-hairline bg-canvas p-2">
              <p className="text-[9px] font-bold tracking-[0.12em] text-amber-700 uppercase dark:text-amber-300">
                Review fees
              </p>
              {[
                ["Network fee", "0.80"],
                ["Platform fee", "0.00"],
                ["You receive", "49.20"],
              ].map(([label, value], i) => (
                <div
                  key={label}
                  className="flex items-center justify-between border-b border-hairline py-1.5 last:border-b-0"
                >
                  <span className="text-[10px] text-muted">{label}</span>
                  <span
                    className={cn(
                      "text-[11px] font-medium tabular-nums",
                      i === 2
                        ? "text-emerald-700 dark:text-emerald-300"
                        : "text-ink",
                    )}
                  >
                    {value}
                  </span>
                </div>
              ))}
              <span className="mt-2 inline-flex h-7 w-full items-center justify-center rounded-md bg-amber-500 text-[10px] font-semibold text-white">
                Confirm withdrawal
              </span>
            </div>
          ) : null}

          {step === 2 ? (
            <div className="rounded-lg border border-emerald-500/25 bg-emerald-500/8 p-3 text-center">
              <p className="text-[12px] font-semibold text-emerald-700 dark:text-emerald-300">
                Withdrawal submitted
              </p>
              <p className="mt-1 text-[10px] text-muted">
                Usually settles in a few minutes
              </p>
            </div>
          ) : null}
        </motion.div>
      </AnimatePresence>
    </ScreenShell>
  );
}

function ReferralScreen({
  card,
  active,
}: {
  card: HeroShowcaseCard;
  active: boolean;
}) {
  const step = useDemoStep(active, 3, 2000);

  return (
    <ScreenShell
      eyebrow="Referrals"
      title="Invite & earn"
      footer={<Caption title={card.title} description={card.description} />}
    >
      <div className="rounded-lg border border-hairline bg-canvas p-2">
        <p className="text-[9px] font-bold tracking-[0.12em] text-primary/80 uppercase">
          Your code
        </p>
        <p className="mt-1 font-mono text-[15px] font-semibold tracking-wide text-ink">
          411-REF8
        </p>
        <div className="mt-2 grid grid-cols-2 gap-1.5 border-t border-hairline pt-2">
          <div>
            <p className="text-[9px] text-muted">Invites</p>
            <p className="text-[12px] font-semibold tabular-nums text-ink">12</p>
          </div>
          <div>
            <p className="text-[9px] text-muted">Earned</p>
            <p className="text-[12px] font-semibold tabular-nums text-emerald-700 dark:text-emerald-300">
              18.50
            </p>
          </div>
        </div>
      </div>
      <div className="mt-2 flex gap-1.5">
        <motion.span
          className="inline-flex h-7 flex-1 items-center justify-center rounded-md bg-primary text-[10px] font-semibold text-white"
          animate={
            active && step === 1 ? { scale: [1, 0.95, 1.04, 1] } : { scale: 1 }
          }
        >
          {step >= 1 ? "Copied" : "Copy link"}
        </motion.span>
        <span className="inline-flex h-7 flex-1 items-center justify-center rounded-md bg-emerald-600 text-[10px] font-semibold text-white">
          Share
        </span>
      </div>
      {step >= 2 ? (
        <motion.p
          className="mt-1.5 text-center text-[9px] text-emerald-600 dark:text-emerald-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Link ready to share
        </motion.p>
      ) : null}
    </ScreenShell>
  );
}

function CommissionScreen({
  card,
  active,
}: {
  card: HeroShowcaseCard;
  active: boolean;
}) {
  const step = useDemoStep(active, 4, 1800);
  const rows = [
    { name: "Priya S.", amount: "+2.50", status: "Paid" },
    { name: "Kabir N.", amount: "+1.25", status: "Paid" },
    { name: "Ananya R.", amount: "+3.00", status: "Pending" },
  ];
  const visible = Math.min(rows.length, step + 1);

  return (
    <ScreenShell
      eyebrow="Rewards"
      title="Commission ledger"
      footer={<Caption title={card.title} description={card.description} />}
    >
      <div className="overflow-hidden rounded-lg border border-hairline bg-canvas">
        <div className="grid grid-cols-[1fr_auto_auto] gap-2 border-b border-hairline bg-surface-soft/80 px-2 py-1.5">
          <span className="text-[9px] font-medium text-muted">Referral</span>
          <span className="text-[9px] font-medium text-muted">Status</span>
          <span className="text-[9px] font-medium text-muted">Amt</span>
        </div>
        {rows.slice(0, visible).map((row, index) => (
          <motion.div
            key={row.name}
            className="grid grid-cols-[1fr_auto_auto] items-center gap-2 border-b border-hairline px-2 py-2 last:border-b-0"
            initial={active ? { opacity: 0, y: 6 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <span className="text-[10px] font-medium text-ink">{row.name}</span>
            <span className="text-[9px] text-muted">{row.status}</span>
            <span className="text-[11px] font-semibold tabular-nums text-emerald-700 dark:text-emerald-300">
              {row.amount}
            </span>
          </motion.div>
        ))}
      </div>
    </ScreenShell>
  );
}

function ChainScreen({
  card,
  active,
}: {
  card: HeroShowcaseCard;
  active: boolean;
}) {
  const step = useDemoStep(active, 4, 1900);
  const hash = "0x7a2f…c91e";
  const stages = ["Submitted", "Confirming", "Verified"];

  return (
    <ScreenShell
      eyebrow="Verification"
      title="On-chain check"
      footer={<Caption title={card.title} description={card.description} />}
    >
      <div className="rounded-lg border border-hairline bg-canvas p-2">
        <p className="text-[9px] font-bold tracking-[0.12em] text-primary/80 uppercase">
          Transaction hash
        </p>
        <div className="mt-1.5 rounded-md border border-hairline bg-surface-soft px-2 py-1.5 font-mono text-[10px] text-ink">
          {step === 0 ? (
            <motion.span
              initial={{ width: 0 }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              |
            </motion.span>
          ) : (
            hash
          )}
        </div>

        <div className="mt-2 space-y-1.5">
          {stages.map((label, i) => {
            const done = step > i + 1 || (step === 3 && i <= 2);
            const current = step === i + 1;
            return (
              <div key={label} className="flex items-center gap-2">
                <span
                  className={cn(
                    "size-2 rounded-full",
                    done
                      ? "bg-emerald-500"
                      : current
                        ? "bg-primary"
                        : "bg-hairline",
                  )}
                />
                <span className="text-[10px] text-ink">{label}</span>
                <span className="ml-auto text-[9px] text-muted">
                  {done ? "Done" : current ? "Live" : "—"}
                </span>
              </div>
            );
          })}
        </div>

        {step >= 3 ? (
          <motion.p
            className="mt-2 text-center text-[10px] font-semibold text-emerald-600 dark:text-emerald-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Blockchain verified
          </motion.p>
        ) : null}
      </div>
    </ScreenShell>
  );
}

function FeesScreen({
  card,
  active,
}: {
  card: HeroShowcaseCard;
  active: boolean;
}) {
  const step = useDemoStep(active, 3, 2000);

  return (
    <ScreenShell
      eyebrow="Transparency"
      title="Fee breakdown"
      footer={<Caption title={card.title} description={card.description} />}
    >
      <div className="rounded-lg border border-hairline bg-canvas p-2">
        {(
          [
            ["Joining fee", "0.00 USDT", true],
            ["Hidden fee", "0.00 USDT", false],
            ["Platform fee", "0.00 USDT", false],
          ] as const
        ).map(([label, value, highlight]) => (
          <motion.div
            key={label}
            className={cn(
              "flex items-center justify-between border-b border-hairline py-2 last:border-b-0",
              highlight && step >= 1 && "rounded-md bg-emerald-500/8 px-1.5",
            )}
            animate={
              active && highlight && step === 1
                ? { scale: [1, 1.02, 1] }
                : { scale: 1 }
            }
          >
            <span className="text-[10px] text-muted">{label}</span>
            <span
              className={cn(
                "text-[11px] font-medium tabular-nums text-ink",
                highlight && "text-emerald-700 dark:text-emerald-300",
              )}
            >
              {value}
            </span>
          </motion.div>
        ))}
        {step >= 2 ? (
          <motion.p
            className="mt-2 text-center text-[10px] font-semibold text-emerald-600 dark:text-emerald-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            No hidden charges
          </motion.p>
        ) : null}
      </div>
    </ScreenShell>
  );
}

function RegisterScreen({
  card,
  active,
}: {
  card: HeroShowcaseCard;
  active: boolean;
}) {
  const step = useDemoStep(active, 5, 1900);
  // 0 form empty → 1 filling → 2 submit → 3 otp → 4 logged in

  return (
    <ScreenShell
      eyebrow="Access"
      title={
        step <= 2 ? "Create account" : step === 3 ? "Verify email" : "Welcome"
      }
      footer={<Caption title={card.title} description={card.description} />}
    >
      <AnimatePresence mode="wait">
        {step <= 2 ? (
          <motion.div
            key="form"
            className="rounded-lg border border-hairline bg-canvas p-2"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
          >
            <div className="grid grid-cols-2 gap-1.5">
              <Field label="First name" value="Aarav" filled={step >= 1} />
              <Field label="Last name" value="Mehta" filled={step >= 1} />
            </div>
            <div className="mt-1.5">
              <Field
                label="Email"
                value="aarav.mehta@mail.com"
                filled={step >= 1}
              />
            </div>
            <div className="mt-1.5">
              <Field label="Password" value="••••••••" filled={step >= 1} />
            </div>
            {step >= 1 ? (
              <div className="mt-1.5">
                <div className="h-1 overflow-hidden rounded-full bg-surface-card">
                  <motion.div
                    className="h-full rounded-full bg-emerald-500"
                    initial={{ width: "20%" }}
                    animate={{ width: "85%" }}
                    transition={{ duration: 0.7, ease }}
                  />
                </div>
                <p className="mt-0.5 text-[8px] text-emerald-600">Strong</p>
              </div>
            ) : null}
            <motion.span
              className="mt-2 inline-flex h-8 w-full items-center justify-center rounded-md bg-primary text-[10px] font-semibold text-white"
              animate={
                step === 2 ? { scale: [1, 0.96, 1.03, 1] } : { scale: 1 }
              }
            >
              Create account
            </motion.span>
          </motion.div>
        ) : null}

        {step === 3 ? (
          <motion.div
            key="otp"
            className="rounded-lg border border-hairline bg-canvas p-2"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
          >
            <p className="text-[10px] text-muted">
              Enter the 6-digit code sent to aarav.mehta@mail.com
            </p>
            <div className="mt-2 flex justify-between gap-1">
              {["4", "1", "1", "8", "0", "2"].map((digit, i) => (
                <motion.span
                  key={i}
                  className="grid h-8 w-7 place-items-center rounded-md border border-hairline bg-surface-soft text-[12px] font-semibold tabular-nums text-ink"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  {digit}
                </motion.span>
              ))}
            </div>
            <span className="mt-2 inline-flex h-8 w-full items-center justify-center rounded-md bg-primary text-[10px] font-semibold text-white">
              Verify OTP
            </span>
          </motion.div>
        ) : null}

        {step >= 4 ? (
          <motion.div
            key="done"
            className="rounded-lg border border-emerald-500/25 bg-emerald-500/8 p-3 text-center"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <p className="text-[12px] font-semibold text-emerald-700 dark:text-emerald-300">
              You&apos;re in
            </p>
            <p className="mt-1 text-[10px] text-muted">
              Free registration complete
            </p>
            <div className="mt-2 rounded-md border border-hairline bg-canvas px-2 py-1.5 text-left">
              <p className="text-[9px] text-muted">Signed in as</p>
              <p className="text-[11px] font-semibold text-ink">Aarav Mehta</p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </ScreenShell>
  );
}

function LoginScreen({
  card,
  active,
}: {
  card: HeroShowcaseCard;
  active: boolean;
}) {
  const step = useDemoStep(active, 4, 1900);
  // 0 empty → 1 filled → 2 submit → 3 logged in / withdraw ready

  return (
    <ScreenShell
      eyebrow="Experience"
      title={step >= 3 ? "Dashboard" : "Sign in"}
      footer={<Caption title={card.title} description={card.description} />}
    >
      <AnimatePresence mode="wait">
        {step <= 2 ? (
          <motion.div
            key="login"
            className="rounded-lg border border-hairline bg-canvas p-2"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
          >
            <Field
              label="Email"
              value="aarav.mehta@mail.com"
              filled={step >= 1}
            />
            <div className="mt-1.5">
              <Field
                label="Password"
                value="••••••••"
                filled={step >= 1}
              />
            </div>
            <motion.span
              className="mt-2 inline-flex h-8 w-full items-center justify-center rounded-md bg-primary text-[10px] font-semibold text-white"
              animate={
                step === 2 ? { scale: [1, 0.96, 1.03, 1] } : { scale: 1 }
              }
            >
              Sign in
            </motion.span>
          </motion.div>
        ) : (
          <motion.div
            key="logged"
            className="space-y-1.5"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="rounded-lg border border-hairline bg-canvas p-2">
              <p className="text-[9px] text-muted">Available balance</p>
              <p className="text-[14px] font-semibold tabular-nums text-ink">
                128.40 USDT
              </p>
            </div>
            <span className="inline-flex h-8 w-full items-center justify-center rounded-md bg-amber-500 text-[10px] font-semibold text-white">
              Withdraw
            </span>
            <p className="text-center text-[9px] text-emerald-600 dark:text-emerald-300">
              Easy login · ready to cash out
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </ScreenShell>
  );
}

function SupportChatScreen({
  card,
  active,
}: {
  card: HeroShowcaseCard;
  active: boolean;
}) {
  const reduce = useReducedMotion();
  const step = useDemoStep(active, 5, 1800);
  const messages = [
    { id: "u1", side: "user" as const, text: "Hi — need help with a deposit." },
    {
      id: "a1",
      side: "agent" as const,
      text: "Sure. Share the network and tx hash.",
    },
    { id: "u2", side: "user" as const, text: "USDT on TRC20 — sent just now." },
    {
      id: "a2",
      side: "agent" as const,
      text: "Got it — confirming on-chain now.",
    },
  ];
  const visibleCount = Math.min(messages.length, Math.max(1, step));

  return (
    <ScreenShell
      eyebrow="Support"
      title="24×7 help desk"
      footer={<Caption title={card.title} description={card.description} />}
    >
      <div className="flex h-full flex-col overflow-hidden rounded-lg border border-hairline bg-canvas">
        <div className="flex items-center gap-2 border-b border-hairline px-2 py-1.5">
          <span className="relative flex size-6 items-center justify-center rounded-full bg-primary/15 text-[9px] font-bold text-primary">
            411
            <span className="absolute -right-0.5 -bottom-0.5 size-2 rounded-full border border-canvas bg-emerald-500" />
          </span>
          <div>
            <p className="text-[10px] font-semibold text-ink">Support</p>
            <p className="text-[9px] text-emerald-600 dark:text-emerald-300">
              Online now
            </p>
          </div>
        </div>

        <div className="flex min-h-0 flex-1 flex-col gap-1.5 overflow-hidden p-2">
          {messages.slice(0, visibleCount).map((msg) => (
            <motion.div
              key={msg.id}
              className={cn(
                "max-w-[85%] rounded-lg px-2 py-1.5 text-[10px] leading-snug",
                msg.side === "user"
                  ? "ml-auto bg-primary text-white"
                  : "bg-surface-card text-ink dark:bg-white/10",
              )}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease }}
            >
              {msg.text}
            </motion.div>
          ))}

          {active && !reduce && step < messages.length ? (
            <div className="inline-flex w-fit items-center gap-1 rounded-lg bg-surface-card px-2 py-1.5 dark:bg-white/10">
              {[0, 1, 2].map((dot) => (
                <motion.span
                  key={dot}
                  className="size-1.5 rounded-full bg-muted"
                  animate={{ y: [0, -2, 0], opacity: [0.4, 1, 0.4] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: dot * 0.15,
                  }}
                />
              ))}
            </div>
          ) : null}
        </div>

        <div className="flex items-center gap-1.5 border-t border-hairline px-2 py-1.5">
          <div className="flex h-7 flex-1 items-center rounded-md border border-hairline bg-surface-soft px-2 text-[9px] text-muted">
            Message support…
          </div>
          <span className="inline-flex size-7 items-center justify-center rounded-md bg-primary text-[10px] font-bold text-white">
            ↑
          </span>
        </div>
      </div>
    </ScreenShell>
  );
}

export function FeatureScreen({
  card,
  active,
}: {
  card: HeroShowcaseCard;
  active: boolean;
}) {
  switch (card.icon) {
    case "predict":
      return <PredictScreen card={card} active={active} />;
    case "wallet":
      return <WalletScreen card={card} active={active} />;
    case "deposit":
      return <DepositScreen card={card} active={active} />;
    case "withdraw":
      return <WithdrawScreen card={card} active={active} />;
    case "referral":
      return <ReferralScreen card={card} active={active} />;
    case "commission":
      return <CommissionScreen card={card} active={active} />;
    case "chain":
      return <ChainScreen card={card} active={active} />;
    case "fees":
      return <FeesScreen card={card} active={active} />;
    case "register":
      return <RegisterScreen card={card} active={active} />;
    case "login":
      return <LoginScreen card={card} active={active} />;
    case "support":
      return <SupportChatScreen card={card} active={active} />;
    default:
      return <WalletScreen card={card} active={active} />;
  }
}
