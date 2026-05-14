export const heroContent = {
  eyebrow: "Andika's Digital Space",
  title: "I build things, share what I learn, and explore ideas in public.",
  intro:
    "Hi, I'm Andika. This is my personal corner on the internet where I document projects, notes, experiments, and the creative process behind them.",
  ctas: [
    { label: "View Projects", href: "/projects", variant: "primary" as const },
    { label: "Read Blog", href: "/blog", variant: "outline" as const },
  ],
};

export const heroSocialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "GitHub", href: "https://github.com/" },
  { label: "Email", href: "mailto:hello@andika.dev" },
  { label: "Instagram", href: "https://www.instagram.com/" },
];

export const featuredProjects = [
  {
    title: "Portfolio Platform",
    description:
      "A modular personal site architecture focused on reusable UI, scalability, and clear content storytelling.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    demoUrl: "/projects",
    githubUrl: "https://github.com/",
    banner: "/window.svg",
  },
  {
    title: "Developer Toolkit",
    description:
      "A collection of reusable UI primitives and layout patterns for rapid product iteration.",
    stack: ["Design System", "Interaction", "Accessibility"],
    demoUrl: "/projects",
    githubUrl: "https://github.com/",
    banner: "/globe.svg",
  },
  {
    title: "Digital Garden",
    description:
      "A connected writing space for technical notes, experiments, and small discoveries from daily learning.",
    stack: ["Content Design", "DX", "System Thinking"],
    demoUrl: "/blog",
    githubUrl: "https://github.com/",
    banner: "/file.svg",
  },
];

export const featuredCertificates = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    description: "Foundational cloud architecture and reliability principles.",
    issuedAt: "Nov 2025",
    href: "/certificates",
  },
  {
    title: "Meta Front-End Developer Certificate",
    issuer: "Meta",
    description: "Frontend engineering fundamentals and project-based development.",
    issuedAt: "Jul 2025",
    href: "/certificates",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    description: "Modern responsive layout systems and accessibility-first foundations.",
    issuedAt: "Mar 2025",
    href: "/certificates",
  },
];

export const latestPosts = [
  {
    title: "Designing a Scalable Frontend Folder Structure",
    excerpt:
      "How layered + feature-based architecture helps teams avoid component chaos as products grow.",
    href: "/blog",
    date: "May 11, 2026",
    category: "Architecture",
  },
  {
    title: "A Minimal Motion System for Premium UI",
    excerpt:
      "Using subtle transitions and reveal patterns to improve polish without distracting the user.",
    href: "/blog",
    date: "May 8, 2026",
    category: "UI Engineering",
  },
  {
    title: "Readable Typography in Dark Interfaces",
    excerpt:
      "Practical spacing and contrast decisions for typography-heavy monochrome layouts.",
    href: "/blog",
    date: "May 2, 2026",
    category: "Design System",
  },
];

export const skillsByCategory = [
  { title: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { title: "Backend", items: ["Node.js", "Express", "Prisma", "PostgreSQL"] },
  { title: "Tools", items: ["Git", "GitHub", "Figma", "VS Code", "Vercel"] },
  { title: "Creative", items: ["Pixel Art", "Creative Coding", "Visual Storytelling"] },
];

export const techStackMarqueeItems = [
  { name: "Next.js", category: "Frontend", icon: "" },
  { name: "React", category: "Frontend", icon: "" },
  { name: "TypeScript", category: "Frontend", icon: "" },
  { name: "Tailwind CSS", category: "Frontend", icon: "" },
  { name: "Framer Motion", category: "Frontend", icon: "" },
  { name: "Node.js", category: "Backend", icon: "" },
  { name: "Express", category: "Backend", icon: "" },
  { name: "Prisma", category: "Backend", icon: "" },
  { name: "PostgreSQL", category: "Backend", icon: "" },
  { name: "Git", category: "Tools", icon: "" },
  { name: "GitHub", category: "Tools", icon: "" },
  { name: "Figma", category: "Tools", icon: "" },
  { name: "VS Code", category: "Tools", icon: "" },
  { name: "Vercel", category: "Tools", icon: "" },
  { name: "Pixel Art", category: "Creative", icon: "" },
  { name: "Creative Coding", category: "Creative", icon: "" },
  { name: "Visual Storytelling", category: "Creative", icon: "" },
];

export const personalInterests = [
  "I enjoy building tiny pixel-art experiments on weekends.",
  "I study learning systems to improve consistency, not just intensity.",
  "I like exploring game UI patterns and translating them into web experiences.",
];
