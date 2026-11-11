import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

const buttonStyles = {
  primary:
    "bg-primary text-on-primary shadow-[inset_0_3px_0_0_rgba(255,255,255,0.2),0_2px_4px_0_rgba(14,118,255,0.25)] hover:bg-primary-active",
  secondary:
    "bg-canvas text-ink shadow-[inset_0_0_0_1px_var(--hairline)] hover:bg-surface-card",
  yellow:
    "bg-[#f0c43a] text-ink shadow-[inset_0_3px_0_0_rgba(255,255,255,0.28),0_2px_4px_0_rgba(196,146,20,0.28)] hover:bg-[#e4b62c]",
  olive:
    "bg-[#6f7d3e] text-white shadow-[inset_0_3px_0_0_rgba(255,255,255,0.18),0_2px_4px_0_rgba(111,125,62,0.28)] hover:bg-[#5d6a33]",
  dark: "bg-surface-dark text-on-dark hover:bg-surface-dark-elevated",
  ghost: "bg-transparent text-primary hover:bg-primary/8",
} as const;

const baseClass =
  "inline-flex h-[45px] w-max shrink-0 cursor-pointer items-center justify-center gap-[7px] overflow-clip whitespace-nowrap rounded-[16px] px-3 text-[15px] font-medium tracking-[-0.02em] no-underline transition-colors focus-ring sm:px-4 disabled:cursor-not-allowed disabled:opacity-60";

type ButtonVariant = keyof typeof buttonStyles;

type ButtonAsLink = {
  href: string;
  type?: never;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "children" | "className">;

type ButtonAsButton = {
  href?: undefined;
} & Omit<ComponentPropsWithoutRef<"button">, "children" | "className">;

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
} & (ButtonAsLink | ButtonAsButton);

export function Button({
  children,
  variant = "primary",
  className = "",
  external = false,
  ...props
}: ButtonProps) {
  const classes = cn(baseClass, buttonStyles[variant], className);

  if ("href" in props && props.href != null) {
    const { href, ...rest } = props;
    const blank =
      external || href.startsWith("http") || href.startsWith("//");

    return (
      <a
        href={href}
        className={classes}
        target={blank ? "_blank" : undefined}
        rel={blank ? "noopener noreferrer" : undefined}
        {...rest}
      >
        {children}
      </a>
    );
  }

  const { type = "button", ...rest } = props;

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}

export const buttonVariants = buttonStyles;
