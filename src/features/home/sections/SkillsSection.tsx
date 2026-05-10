import { SectionHeader } from "@/components/shared/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { skillsByCategory } from "@/features/home/data";

export function SkillsSection() {
  return (
    <Section className="pt-0">
      <SectionHeader
        eyebrow="Tech Stack"
        title="How I Build"
        description="Grouped by capability so the stack stays readable as this portfolio grows over time."
      />

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {skillsByCategory.map((group) => (
          <Card key={group.title}>
            <Heading level={3}>{group.title}</Heading>
            <ul className="mt-3 space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-body">
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
