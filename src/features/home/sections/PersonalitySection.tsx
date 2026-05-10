import { SectionHeader } from "@/components/shared/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { personalInterests } from "@/features/home/data";

export function PersonalitySection() {
  return (
    <Section className="pt-0">
      <SectionHeader
        eyebrow="Beyond Coding"
        title="What Keeps Me Curious"
        description="A few personal interests that shape how I think, design, and build products."
      />

      <Card className="mt-8">
        <ul className="space-y-3">
          {personalInterests.map((interest) => (
            <li key={interest} className="text-body">
              {interest}
            </li>
          ))}
        </ul>
      </Card>
    </Section>
  );
}
