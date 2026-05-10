import { prisma } from "@/lib/prisma";

export async function getPublishedProjects() {
  return prisma.project.findMany({
    where: { published: true },
    orderBy: [{ featured: "desc" }, { sortOrder: "asc" }, { createdAt: "desc" }],
  });
}

export async function getFeaturedProjects(limit = 3) {
  return prisma.project.findMany({
    where: { published: true, featured: true },
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
    take: limit,
  });
}
