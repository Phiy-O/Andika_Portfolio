import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { cache } from "react";
import type { BlogFrontmatter, BlogPost, BlogPostDetail } from "@/types/blog";

const BLOG_CONTENT_PATH = path.join(process.cwd(), "content", "blog");

function getBlogFilePaths() {
  if (!fs.existsSync(BLOG_CONTENT_PATH)) {
    return [];
  }

  return fs
    .readdirSync(BLOG_CONTENT_PATH)
    .filter((file) => file.endsWith(".mdx"));
}

function normalizeFrontmatter(frontmatter: Partial<BlogFrontmatter>): BlogFrontmatter {
  return {
    title: frontmatter.title ?? "Untitled Post",
    description: frontmatter.description ?? "",
    date: frontmatter.date ?? new Date().toISOString(),
    category: frontmatter.category ?? "Learning Notes",
    tags: frontmatter.tags ?? [],
    thumbnail: frontmatter.thumbnail,
    published: frontmatter.published ?? false,
    featured: frontmatter.featured ?? false,
  };
}

export const getAllPosts = cache((): BlogPost[] => {
  const files = getBlogFilePaths();

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const fullPath = path.join(BLOG_CONTENT_PATH, file);
    const raw = fs.readFileSync(fullPath, "utf-8");
    const { data } = matter(raw);
    const metadata = normalizeFrontmatter(data as Partial<BlogFrontmatter>);

    return {
      slug,
      ...metadata,
    };
  });

  return posts
    .filter((post) => post.published)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
});

export const getPostBySlug = cache((slug: string): BlogPostDetail | null => {
  const filePath = path.join(BLOG_CONTENT_PATH, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const metadata = normalizeFrontmatter(data as Partial<BlogFrontmatter>);

  if (!metadata.published) {
    return null;
  }

  return {
    slug,
    content,
    ...metadata,
  };
});

export function getAllCategories(posts: BlogPost[]) {
  return Array.from(new Set(posts.map((post) => post.category))).sort();
}

export function getAllTags(posts: BlogPost[]) {
  return Array.from(new Set(posts.flatMap((post) => post.tags))).sort();
}
