import Link from "next/link";
import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { SOCIAL_LINKS } from "@/constants/social-links";

const socialIconMap = {
  GitHub: GithubLogo,
  LinkedIn: LinkedinLogo,
  Email: EnvelopeSimple,
} as const;

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <Container className="space-y-4 py-8">
        <div className="flex flex-wrap items-center gap-3 text-caption">
          {SOCIAL_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={link.label}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/70 text-zinc-300 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:border-zinc-500 hover:bg-zinc-800 hover:text-zinc-100 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_10px_24px_rgba(0,0,0,0.35)]"
            >
              {(() => {
                const Icon = socialIconMap[link.label as keyof typeof socialIconMap];

                return Icon ? <Icon size={16} weight="regular" /> : null;
              })()}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-1 text-caption sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Andika. All rights reserved.</p>
          <p>Thanks for visiting. Keep building with intention.</p>
        </div>
      </Container>
    </footer>
  );
}
