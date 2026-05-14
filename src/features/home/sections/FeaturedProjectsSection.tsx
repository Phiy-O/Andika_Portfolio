import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Stagger } from "@/components/shared/Stagger";
import { Section } from "@/components/ui/Section";
import { featuredProjects } from "@/features/home/data";
import { ProjectCard } from "@/features/portfolio/components/ProjectCard";

export function FeaturedProjectsSection() {
  return (
    <Section className="pt-0">
      <SectionHeader
        eyebrow="Featured Projects"
        title="Projects I Enjoy Building"
        description="Selected works focused on clean architecture, delightful interaction, and practical product outcomes."
      />

      <Stagger className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {featuredProjects.map((project) => (
          <Reveal key={project.title}>
            <ProjectCard {...project} />
          </Reveal>
        ))}
      </Stagger>
    </Section>
  );
}
