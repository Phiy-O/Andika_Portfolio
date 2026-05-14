import { PrismaClient, UserRole } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL ?? "admin@andika.dev";
  const adminPassword = process.env.ADMIN_PASSWORD ?? "admin12345";
  const passwordHash = await bcrypt.hash(adminPassword, 12);

  await prisma.user.upsert({
    where: { email: adminEmail },
    update: { passwordHash },
    create: {
      email: adminEmail,
      name: "Andika",
      passwordHash,
      role: UserRole.ADMIN,
    },
  });

  await prisma.project.createMany({
    data: [
      {
        slug: "portfolio-platform",
        title: "Portfolio Platform",
        description: "Scalable portfolio architecture with reusable design system.",
        stack: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
        image: "/window.svg",
        githubUrl: "https://github.com/",
        liveUrl: "https://example.com",
        featured: true,
        sortOrder: 1,
      },
      {
        slug: "digital-garden-notes",
        title: "Digital Garden Notes",
        description: "Personal notes engine for documenting engineering learnings.",
        stack: ["MDX", "Content Architecture"],
        image: "/file.svg",
        featured: false,
        sortOrder: 2,
      },
    ],
    skipDuplicates: true,
  });

  await prisma.certificate.createMany({
    data: [
      {
        slug: "aws-cloud-practitioner",
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        description: "Foundational cloud concepts and architecture principles.",
        issuedAt: new Date("2025-11-10"),
        certificateUrl: "https://example.com/certificate",
        featured: true,
      },
      {
        slug: "meta-frontend-certificate",
        title: "Meta Front-End Developer Certificate",
        issuer: "Meta",
        description: "Frontend engineering foundation and project-based learning.",
        issuedAt: new Date("2025-07-20"),
      },
    ],
    skipDuplicates: true,
  });

  await prisma.blogPost.createMany({
    data: [
      {
        slug: "my-first-post",
        title: "My First Post",
        description: "Why I started this digital garden and what I want to document here.",
        date: new Date("2026-05-11"),
        category: "Personal Journey",
        tags: ["Reflection", "Writing"],
        thumbnail: "/next.svg",
        featured: true,
        published: true,
        mdxPath: "content/blog/my-first-post.mdx",
      },
      {
        slug: "learning-system-design",
        title: "Learning System Design as a Frontend Engineer",
        description: "A practical way to approach architecture thinking without getting lost in theory.",
        date: new Date("2026-05-09"),
        category: "System Design",
        tags: ["System Design", "Learning Notes"],
        thumbnail: "/globe.svg",
        published: true,
        mdxPath: "content/blog/learning-system-design.mdx",
      },
    ],
    skipDuplicates: true,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
