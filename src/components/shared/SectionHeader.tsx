import { Badge } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Heading";
import { cn } from "@/utils/cn";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <header className={cn("max-w-2xl space-y-4", className)}>
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <Heading level={2}>{title}</Heading>
      {description ? <p className="text-body">{description}</p> : null}
    </header>
  );
}
