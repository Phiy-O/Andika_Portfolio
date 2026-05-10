import { cn } from "@/utils/cn";

type HeadingLevel = 1 | 2 | 3;

type HeadingProps = {
  children: React.ReactNode;
  level?: HeadingLevel;
  className?: string;
};

const levelClass: Record<HeadingLevel, string> = {
  1: "text-h1",
  2: "text-h2",
  3: "text-xl font-semibold tracking-tight",
};

export function Heading({ children, level = 2, className }: HeadingProps) {
  const classes = cn(levelClass[level], "text-primary", className);

  if (level === 1) return <h1 className={classes}>{children}</h1>;
  if (level === 3) return <h3 className={classes}>{children}</h3>;

  return <h2 className={classes}>{children}</h2>;
}
