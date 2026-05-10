import Image from "next/image";
import Link from "next/link";
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
    <Card glow className="group">
      <div className="space-y-4">
        <div className="relative overflow-hidden rounded-lg border border-border bg-background/60 p-6">
          {banner ? (
            <Image
              src={banner}
              alt={`${title} preview`}
              width={28}
              height={28}
              className="opacity-70 transition-opacity group-hover:opacity-100"
            />
          ) : null}
        </div>

        <div className="space-y-2">
          <Heading level={3} className="transition-colors group-hover:text-white">
            {title}
          </Heading>
          <p className="text-body">{description}</p>
        </div>

        {stack.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {stack.map((tag) => (
              <Badge key={tag} className="bg-background">
                {tag}
              </Badge>
            ))}
          </div>
        ) : null}

        <Divider />

        <div className="flex items-center gap-4 text-sm">
          <Link href={demoUrl} className="text-secondary transition-colors hover:text-primary">
            Live Demo {"->"}
          </Link>
          {githubUrl ? (
            <Link href={githubUrl} className="text-secondary transition-colors hover:text-primary">
              GitHub {"->"}
            </Link>
          ) : null}
        </div>
      </div>
    </Card>
  );
}
