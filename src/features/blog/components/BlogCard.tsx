import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Heading";

type BlogCardProps = {
  title: string;
  excerpt: string;
  href: string;
  date: string;
  category: string;
};

export function BlogCard({ title, excerpt, href, date, category }: BlogCardProps) {
  return (
    <Card className="group">
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <p className="text-caption">{date}</p>
          <Badge className="bg-background">{category}</Badge>
        </div>
        <Heading level={3} className="transition-colors group-hover:text-white">
          {title}
        </Heading>
        <p className="text-body">{excerpt}</p>
        <Link href={href} className="inline-flex text-sm text-secondary transition-colors hover:text-primary">
          Read article {"->"}
        </Link>
      </div>
    </Card>
  );
}
