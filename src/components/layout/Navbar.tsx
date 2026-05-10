"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/constants/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="text-sm font-semibold tracking-wide text-primary"
          onClick={() => setIsOpen(false)}
        >
          andika.dev
        </Link>

        <nav className="hidden items-center gap-2 sm:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-secondary transition-colors hover:bg-surface hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button
          type="button"
          size="sm"
          variant="ghost"
          className="sm:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Menu
        </Button>
      </Container>

      {isOpen ? (
        <Container className="sm:hidden">
          <nav
            id="mobile-nav"
            aria-label="Mobile navigation"
            className="flex flex-col gap-1 border-t border-border py-3"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm text-secondary transition-colors hover:bg-surface hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </Container>
      ) : null}
    </header>
  );
}
