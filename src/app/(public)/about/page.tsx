import { SectionHeader } from "@/components/shared/SectionHeader";
import { Section } from "@/components/ui";

export default function AboutPage() {
  return (
    <Section className="py-16 md:py-20" containerClassName="space-y-4">
      <SectionHeader
        eyebrow="About"
        title="A builder focused on clean systems and calm digital experiences"
        description="I am Andika, a developer who enjoys frontend architecture, thoughtful UI, and documenting the learning journey in public."
      />
    </Section>
  );
}
