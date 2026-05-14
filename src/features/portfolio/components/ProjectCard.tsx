import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Heading";
import { Divider } from "@/components/ui/Divider";

type ProjectCardProps = {
  title: string;
  description: string;
  stack?: string[];
  demoUrl: string;
  githubUrl?: string;
  banner?: string;
};

export function ProjectCard({
  title,
  description,
  stack = [],
  demoUrl,
  githubUrl,
  banner,
}: ProjectCardProps) {
  return (
    <Card className="group h-full border-zinc-800 bg-zinc-900/70 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-600 hover:bg-zinc-900 hover:shadow-[0_12px_28px_rgba(0,0,0,0.35)]">
      <div className="flex h-full flex-col gap-4">
        <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/80 p-6">
          {banner ? (
            <Image
              src={banner}
              alt={`${title} preview`}
              width={28}
              height={28}
              className="opacity-70 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
            />
          ) : null}
        </div>

        <div className="space-y-2">
          <Heading level={3} className="text-[1.1rem] leading-snug transition-colors group-hover:text-white">
            {title}
          </Heading>
          <p className="text-body text-zinc-400">{description}</p>
        </div>

        {stack.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {stack.map((tag) => (
              <Badge key={tag} className="border-zinc-700 bg-zinc-900 text-zinc-300">
                {tag}
              </Badge>
            ))}
          </div>
        ) : null}

        <Divider className="border-zinc-800" />

        <div className="mt-auto flex items-center gap-4 text-sm">
          <Link href={demoUrl} className="inline-flex items-center gap-1.5 text-zinc-300 transition-colors hover:text-zinc-100">
            Live Demo
            <ArrowUpRight size={14} weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          {githubUrl ? (
            <Link href={githubUrl} className="inline-flex items-center gap-1.5 text-zinc-400 transition-colors hover:text-zinc-100">
              GitHub
              <ArrowUpRight size={14} weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          ) : null}
        </div>
      </div>
    </Card>
  );
}
