import Link from "next/link";
import { ArrowUpRight, CalendarDots } from "@phosphor-icons/react/dist/ssr";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Heading";
import { Divider } from "@/components/ui/Divider";

type BlogCardProps = {
  title: string;
  excerpt: string;
  href: string;
  date: string;
  category: string;
};

export function BlogCard({ title, excerpt, href, date, category }: BlogCardProps) {
  return (
    <Card className="group h-full border-zinc-800 bg-zinc-900/70 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-600 hover:bg-zinc-900 hover:shadow-[0_12px_28px_rgba(0,0,0,0.35)]">
      <div className="flex h-full flex-col gap-4">
        <div className="flex items-center justify-between gap-2">
          <p className="text-caption inline-flex items-center gap-1.5 text-zinc-400">
            <CalendarDots size={14} weight="regular" />
            {date}
          </p>
          <Badge className="bg-background">{category}</Badge>
        </div>

        <Heading level={3} className="text-[1.1rem] leading-snug transition-colors group-hover:text-white">
          {title}
        </Heading>

        <p className="text-body flex-1 text-zinc-400">{excerpt}</p>

        <Divider className="border-zinc-800" />

        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-sm text-zinc-300 transition-colors hover:text-zinc-100"
        >
          Read article
          <ArrowUpRight size={14} weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </Card>
  );
}
