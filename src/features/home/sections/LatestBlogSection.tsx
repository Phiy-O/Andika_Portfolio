import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Stagger } from "@/components/shared/Stagger";
import { Section } from "@/components/ui/Section";
import { latestPosts } from "@/features/home/data";
import { BlogCard } from "@/features/blog/components/BlogCard";

export function LatestBlogSection() {
  return (
    <Section className="pt-0">
      <SectionHeader
        eyebrow="Latest Writing"
        title="What I Write"
        description="Notes about frontend architecture, design systems, and lessons from real project iterations."
      />

      <Stagger className="mt-8 grid gap-4 md:grid-cols-3" delayChildren={0.08}>
        {latestPosts.map((post) => (
          <Reveal key={post.title}>
            <BlogCard {...post} />
          </Reveal>
        ))}
      </Stagger>
    </Section>
  );
}
