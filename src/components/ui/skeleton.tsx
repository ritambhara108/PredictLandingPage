import { cn } from "@/lib/utils";

/** PredEx-style pulse block */
export function SkeletonBlock({ className }: { className?: string }) {
  return (
    <div
      className={cn("animate-pulse rounded-lg bg-muted/35", className)}
      aria-hidden
    />
  );
}

/** Single shimmer line — mirrors a line of text */
export function SkeletonLine({ className }: { className?: string }) {
  return (
    <div
      className={cn("h-3 animate-pulse rounded bg-muted/35", className)}
      aria-hidden
    />
  );
}
