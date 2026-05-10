import { Container } from "@/components/ui/Container";
import { cn } from "@/utils/cn";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
};

export function Section({ children, className, containerClassName }: SectionProps) {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
