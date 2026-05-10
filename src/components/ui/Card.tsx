import { cn } from "@/utils/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
};

export function Card({ children, className, glow = false }: CardProps) {
  return (
    <article
      className={cn(
        "rounded-xl border border-border bg-surface p-6 transition-[background-color,box-shadow,border-color] hover:bg-surface-hover",
        glow && "hover:shadow-glow-sm",
        className,
      )}
    >
      {children}
    </article>
  );
}
