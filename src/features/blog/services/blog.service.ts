import { prisma } from "@/lib/prisma";

export async function getPublishedBlogMeta() {
  return prisma.blogPost.findMany({
    where: { published: true },
    orderBy: { date: "desc" },
  });
}

export async function getFeaturedBlogMeta() {
  return prisma.blogPost.findMany({
    where: { published: true, featured: true },
    orderBy: [{ date: "desc" }],
    take: 3,
  });
}
