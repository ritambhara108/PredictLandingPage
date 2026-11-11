import { cn } from "@/lib/utils";

/** Horizontal rule that fades out on the left and right. */
export function SectionDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-hairline to-transparent",
        className,
      )}
    />
  );
}
