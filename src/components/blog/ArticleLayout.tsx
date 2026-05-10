import { Container } from "@/components/ui";

type ArticleLayoutProps = {
  header: React.ReactNode;
  content: React.ReactNode;
};

export function ArticleLayout({ header, content }: ArticleLayoutProps) {
  return (
    <Container className="py-14 md:py-20">
      <div className="space-y-12">
        {header}
        {content}
      </div>
    </Container>
  );
}
