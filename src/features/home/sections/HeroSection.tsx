import { Reveal } from "@/components/shared/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { heroContent } from "@/features/home/data";

export function HeroSection() {
  return (
    <Section className="py-20 md:py-28">
      <div className="space-y-7">
        <Reveal>
          <Badge>{heroContent.eyebrow}</Badge>
        </Reveal>

        <Reveal delay={0.06}>
          <h1 className="text-display max-w-4xl">{heroContent.title}</h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="text-body max-w-2xl">{heroContent.intro}</p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="flex flex-wrap items-center gap-3">
            {heroContent.ctas.map((cta) => (
              <Button key={cta.label} variant={cta.variant} href={cta.href}>
                {cta.label}
              </Button>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
