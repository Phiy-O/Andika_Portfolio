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
    "border border-zinc-700 bg-zinc-800 text-zinc-100 hover:border-zinc-500 hover:bg-zinc-700 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]",
  ghost:
    "border border-transparent bg-transparent text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100",
  outline:
    "border border-zinc-700 bg-transparent text-zinc-200 hover:bg-zinc-900 hover:border-zinc-500",
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
    "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60",
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
