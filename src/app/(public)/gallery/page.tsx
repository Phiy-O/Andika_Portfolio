import Link from "next/link";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Card, Section } from "@/components/ui";

export default function GalleryPage() {
  return (
    <Section className="py-16 md:py-20" containerClassName="space-y-6">
      <SectionHeader
        eyebrow="Gallery"
        title="Projects and Certificates"
        description="A single place to explore selected work and achievements."
      />

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <h2 className="text-h2">Projects</h2>
          <p className="text-body mt-2">Explore portfolio work, stack decisions, and outcomes.</p>
          <Link href="/projects" className="mt-4 inline-flex text-sm text-secondary hover:text-primary">
            Open projects {"->"}
          </Link>
        </Card>
        <Card>
          <h2 className="text-h2">Certificates</h2>
          <p className="text-body mt-2">View certifications and learning milestones over time.</p>
          <Link href="/certificates" className="mt-4 inline-flex text-sm text-secondary hover:text-primary">
            Open certificates {"->"}
          </Link>
        </Card>
      </div>
    </Section>
  );
}
