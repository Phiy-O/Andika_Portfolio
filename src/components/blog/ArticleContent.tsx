import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

type ArticleContentProps = {
  source: string;
};

export function ArticleContent({ source }: ArticleContentProps) {
  return (
    <article className="article-content">
      <MDXRemote
        source={source}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeHighlight],
          },
        }}
      />
    </article>
  );
}
