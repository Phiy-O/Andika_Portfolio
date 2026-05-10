import { z } from "zod";

export const projectInputSchema = z.object({
  slug: z.string().min(3).max(120),
  title: z.string().min(3).max(160),
  description: z.string().min(10).max(500),
  stack: z.array(z.string().min(1).max(50)).max(20),
  image: z.string().url().optional().or(z.literal("")),
  githubUrl: z.string().url().optional().or(z.literal("")),
  liveUrl: z.string().url().optional().or(z.literal("")),
  featured: z.boolean().default(false),
  published: z.boolean().default(true),
  sortOrder: z.number().int().min(0).default(0),
});

export type ProjectInput = z.infer<typeof projectInputSchema>;
