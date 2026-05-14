import Link from "next/link";
import { ArrowUpRight, SealCheck } from "@phosphor-icons/react/dist/ssr";
import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Divider } from "@/components/ui/Divider";

type CertificateCardProps = {
  title: string;
  issuer: string;
  description: string;
  issuedAt: string;
  href: string;
};

export function CertificateCard({ title, issuer, description, issuedAt, href }: CertificateCardProps) {
  return (
    <Card className="group h-full border-zinc-800 bg-zinc-900/70 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-600 hover:bg-zinc-900 hover:shadow-[0_12px_28px_rgba(0,0,0,0.35)]">
      <div className="flex h-full flex-col gap-4">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-700 bg-zinc-950 px-3 py-1 text-xs text-zinc-300">
          <SealCheck size={14} weight="fill" />
          {issuedAt}
        </div>

        <div className="space-y-2">
          <Heading level={3} className="text-[1.1rem] leading-snug transition-colors group-hover:text-white">
            {title}
          </Heading>
          <p className="text-sm text-zinc-400">Issued by {issuer}</p>
          <p className="text-body text-zinc-400">{description}</p>
        </div>

        <Divider className="mt-auto border-zinc-800" />

        <Link href={href} className="inline-flex items-center gap-1.5 text-sm text-zinc-300 transition-colors hover:text-zinc-100">
          View certificate
          <ArrowUpRight size={14} weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </Card>
  );
}
