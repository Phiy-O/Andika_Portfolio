import type { Metadata } from "next";
import Link from "next/link";
import { CategoryBadge } from "@/components/blog/CategoryBadge";
import { Tag } from "@/components/blog/Tag";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { BlogCard } from "@/features/blog/components/BlogCard";
import { getAllCategories, getAllPosts, getAllTags } from "@/lib/blog";
import { Container, Divider } from "@/components/ui";

export const metadata: Metadata = {
  title: "Blog | Andika Portfolio",
  description: "Notes on frontend architecture, design systems, and learning journey.",
  openGraph: {
    title: "Blog | Andika Portfolio",
    description: "Notes on frontend architecture, design systems, and learning journey.",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featured = posts.find((post) => post.featured);
  const categories = getAllCategories(posts);
  const tags = getAllTags(posts).slice(0, 12);

  return (
    <Container className="py-16 md:py-20">
      <SectionHeader
        eyebrow="Writing"
        title="Blog"
        description="A logbook of architecture decisions, learning notes, and practical engineering reflections."
      />

      {featured ? (
        <div className="mt-10 rounded-xl border border-border bg-surface p-6">
          <p className="text-caption">Featured Article</p>
          <h2 className="text-h2 mt-2 max-w-2xl">{featured.title}</h2>
          <p className="text-body mt-3 max-w-2xl">{featured.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <CategoryBadge category={featured.category} />
            {featured.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          <Link href={`/blog/${featured.slug}`} className="mt-5 inline-flex text-sm text-secondary hover:text-primary">
            Read featured post {"->"}
          </Link>
        </div>
      ) : null}

      <div className="mt-10 grid gap-8 md:grid-cols-[1fr_16rem]">
        <section className="space-y-4">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              excerpt={post.description}
              href={`/blog/${post.slug}`}
              date={post.date}
              category={post.category}
            />
          ))}
        </section>

        <aside className="space-y-6">
          <div>
            <p className="text-caption">Categories</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {categories.map((category) => (
                <CategoryBadge key={category} category={category} />
              ))}
            </div>
          </div>
          <Divider />
          <div>
            <p className="text-caption">Tags</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </Container>
  );
}
