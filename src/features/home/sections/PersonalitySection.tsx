import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export function PersonalitySection() {
  return (
    <Section className="pt-0">
      <SectionHeader
        eyebrow="About"
        title="More Than Just Code"
        description="A quick look at my story, working style, and what drives me as a builder."
      />

      <Card className="mt-8 border-zinc-800 bg-zinc-900/70 p-6 md:p-7">
        <div className="space-y-5">
          <p className="text-body max-w-3xl text-zinc-400">
            I enjoy turning messy ideas into clean interfaces, building systems that stay maintainable, and sharing
            what I learn along the way. If you want a deeper look into my background and approach, head to the about
            page.
          </p>

          <Button href="/about" variant="outline" className="inline-flex items-center gap-1.5">
            Visit About Page
            <ArrowUpRight size={14} weight="bold" />
          </Button>
        </div>
      </Card>
    </Section>
  );
}
