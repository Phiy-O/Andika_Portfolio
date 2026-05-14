import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Stagger } from "@/components/shared/Stagger";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { latestPosts } from "@/features/home/data";
import { BlogCard } from "@/features/blog/components/BlogCard";

export function LatestBlogSection() {
  return (
    <Section className="pt-0">
      <SectionHeader
        eyebrow="Latest Writing"
        title="From My Notes"
        description="Short reads on frontend architecture, UI craft, and lessons from real project iterations."
      />

      <Stagger className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3" delayChildren={0.08}>
        {latestPosts.map((post) => (
          <Reveal key={post.title}>
            <BlogCard {...post} />
          </Reveal>
        ))}
      </Stagger>

      <Reveal delay={0.16}>
        <div className="mt-7">
          <Button href="/blog" variant="ghost" size="sm">
            Explore all posts
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
