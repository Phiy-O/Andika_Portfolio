import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleContent } from "@/components/blog/ArticleContent";
import { ArticleHeader } from "@/components/blog/ArticleHeader";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Andika Portfolio",
    };
  }

  return {
    title: `${post.title} | Andika Portfolio`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <ArticleLayout header={<ArticleHeader post={post} />} content={<ArticleContent source={post.content} />} />;
}
