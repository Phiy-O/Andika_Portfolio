import { CategoryBadge } from "@/components/blog/CategoryBadge";
import { Tag } from "@/components/blog/Tag";
import type { BlogPost } from "@/types/blog";

type ArticleHeaderProps = {
  post: BlogPost;
};

export function ArticleHeader({ post }: ArticleHeaderProps) {
  return (
    <header className="space-y-5">
      <div className="flex flex-wrap items-center gap-2">
        <CategoryBadge category={post.category} />
        <p className="text-caption">{new Date(post.date).toLocaleDateString("en-US")}</p>
      </div>
      <h1 className="text-h1 max-w-3xl">{post.title}</h1>
      <p className="text-body max-w-2xl">{post.description}</p>
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </header>
  );
}
