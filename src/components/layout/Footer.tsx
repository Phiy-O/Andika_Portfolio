import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SOCIAL_LINKS } from "@/constants/social-links";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <Container className="space-y-4 py-8">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-caption">
          {SOCIAL_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className="transition-colors hover:text-primary">
              {link.label}
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
