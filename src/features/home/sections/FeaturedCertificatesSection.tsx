import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Stagger } from "@/components/shared/Stagger";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { CertificateCard } from "@/features/certificates/components/CertificateCard";
import { featuredCertificates } from "@/features/home/data";

export function FeaturedCertificatesSection() {
  return (
    <Section className="pt-0">
      <SectionHeader
        eyebrow="Certificates"
        title="Learning Milestones"
        description="A curated view of certifications and learning achievements that support my engineering journey."
      />

      <Stagger className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3" delayChildren={0.06}>
        {featuredCertificates.map((certificate) => (
          <Reveal key={certificate.title}>
            <CertificateCard {...certificate} />
          </Reveal>
        ))}
      </Stagger>

      <Reveal delay={0.14}>
        <div className="mt-7">
          <Button href="/certificates" variant="ghost" size="sm">
            See all certificates
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
