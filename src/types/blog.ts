export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  thumbnail?: string;
  published: boolean;
  featured?: boolean;
};

export type BlogPost = BlogFrontmatter & {
  slug: string;
};

export type BlogPostDetail = BlogPost & {
  content: string;
};
