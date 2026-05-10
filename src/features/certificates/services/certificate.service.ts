import { prisma } from "@/lib/prisma";

export async function getPublishedCertificates() {
  return prisma.certificate.findMany({
    where: { published: true },
    orderBy: [{ issuedAt: "desc" }],
  });
}

export async function getFeaturedCertificates(limit = 4) {
  return prisma.certificate.findMany({
    where: { published: true, featured: true },
    orderBy: [{ issuedAt: "desc" }],
    take: limit,
  });
}
