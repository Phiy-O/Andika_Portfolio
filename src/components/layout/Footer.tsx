import Link from "next/link";
import { EnvelopeSimple, GithubLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { NAV_LINKS } from "@/constants/navigation";
import { SOCIAL_LINKS } from "@/constants/social-links";

const socialIconMap = {
  GitHub: GithubLogo,
  LinkedIn: LinkedinLogo,
  Email: EnvelopeSimple,
} as const;

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-gradient-to-b from-transparent to-zinc-950/50">
      <Container className="py-10 md:py-12">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="space-y-3">
            <p className="text-sm font-semibold tracking-wide text-zinc-100">andika</p>
            <p className="max-w-sm text-sm leading-7 text-zinc-400">
              Personal portfolio, blog, and digital space where I share projects, learning notes, and the process
              behind my work.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/login"
                className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-100"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-100"
              >
                Sign Up
              </Link>
            </div>
          </div>

          <div>
            <p className="text-caption mb-3">Quick Links</p>
            <nav aria-label="Footer navigation" className="grid gap-2">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-caption mb-3">Connect</p>
            <div className="flex flex-wrap items-center gap-3">
              {SOCIAL_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={link.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/70 text-zinc-300 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:border-zinc-500 hover:bg-zinc-800 hover:text-zinc-100 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_10px_24px_rgba(0,0,0,0.35)]"
                >
                  {(() => {
                    const Icon = socialIconMap[link.label as keyof typeof socialIconMap];

                    return Icon ? <Icon size={17} weight="regular" /> : null;
                  })()}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-1 border-t border-zinc-800 pt-4 text-caption sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Andika. All rights reserved.</p>
          <p>Built with intention in Next.js + TypeScript.</p>
        </div>
      </Container>
    </footer>
  );
}
