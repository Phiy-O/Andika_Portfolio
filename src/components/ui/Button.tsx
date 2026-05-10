import Link from "next/link";
import { cn } from "@/utils/cn";

type ButtonVariant = "primary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
};

const variantClass: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-background border border-primary hover:opacity-90 shadow-glow-sm",
  ghost:
    "bg-surface text-primary border border-border hover:bg-surface-hover",
  outline:
    "bg-transparent text-primary border border-border hover:bg-surface hover:border-zinc-600",
};

const sizeClass: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-5 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60",
    variantClass[variant],
    sizeClass[size],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {props.children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...props}
    />
  );
}
