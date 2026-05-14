import Image from "next/image";
import Link from "next/link";
import {
  EnvelopeSimple,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/shared/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { heroContent, heroSocialLinks } from "@/features/home/data";

const socialIconMap = {
  LinkedIn: LinkedinLogo,
  GitHub: GithubLogo,
  Email: EnvelopeSimple,
  Instagram: InstagramLogo,
} as const;

export function HeroSection() {
  return (
    <Section className="flex min-h-[100dvh] items-center py-20 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-7">
          <Reveal>
            <Badge>{heroContent.eyebrow}</Badge>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="text-display max-w-4xl">{heroContent.title}</h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="text-body max-w-2xl">{heroContent.intro}</p>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="flex flex-wrap items-center gap-3">
              {heroContent.ctas.map((cta) => (
                <Button key={cta.label} variant={cta.variant} href={cta.href}>
                  {cta.label}
                </Button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-wrap items-center gap-3">
              {heroSocialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={item.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/70 text-zinc-300 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:border-zinc-500 hover:bg-zinc-800 hover:text-zinc-100 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_10px_24px_rgba(0,0,0,0.35)]"
                >
                  {(() => {
                    const Icon = socialIconMap[item.label as keyof typeof socialIconMap];

                    return Icon ? <Icon size={17} weight="regular" /> : null;
                  })()}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="pointer-events-none absolute -left-4 bottom-8 z-20 flex h-16 w-16 items-center justify-center">
              <img className="h-16 w-16" src="overlays/blog.png" alt="code-overlay" />
            </div>
            <div className="pointer-events-none absolute right-1 top-12 z-20 flex h-16 w-16 items-center justify-center">
              <img className="h-16 w-16" src="overlays/code.png" alt="code-overlay" />
            </div>

            <div className="relative z-10 overflow-hidden rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <div className="relative aspect-square">
                <Image
                  src="/images/Andika-profile-square.png"
                  alt="Andika profile photo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/45 to-transparent" />
            </div>

            <div className="mt-3 flex items-center justify-between text-[11px] text-zinc-500">
              <p>Personal portfolio and notes</p>
              <p>Based in Indonesia</p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
