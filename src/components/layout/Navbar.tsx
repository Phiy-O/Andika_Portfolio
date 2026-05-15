"use client";

import { useState } from "react";
import Link from "next/link";
import { Show, SignInButton, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/constants/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/utils/cn";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <Container className="grid h-16 grid-cols-[1fr_auto] items-center gap-4 md:grid-cols-[1fr_auto_1fr]">
        <Link
          href="/"
          className="justify-self-start text-sm font-semibold tracking-wide text-primary"
          onClick={() => setIsOpen(false)}
        >
          <img className="h-16" src="/images/letter-a-logo.png" alt="logo-andika" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative px-3 py-2 text-sm transition-colors after:absolute after:bottom-1 after:left-3 after:h-px after:w-[calc(100%-1.5rem)] after:origin-center after:scale-x-0 after:bg-zinc-300 after:transition-transform after:duration-300",
                "hover:text-primary hover:drop-shadow-[0_0_8px_rgba(245,245,245,0.25)] hover:after:scale-x-100",
                isLinkActive(link.href)
                  ? "text-primary after:scale-x-100"
                  : "text-secondary",
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden justify-self-end md:flex md:items-center">
          <Show when="signed-out">
            <SignInButton mode="redirect" fallbackRedirectUrl="/admin" signUpFallbackRedirectUrl="/admin">
              <Button size="sm">Sign In</Button>
            </SignInButton>
          </Show>
          <Show when="signed-in">
            <UserButton userProfileMode="navigation" userProfileUrl="/profile" />
          </Show>
        </div>

        <Button
          type="button"
          size="sm"
          variant="ghost"
          className="md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Menu
        </Button>
      </Container>

      {isOpen ? (
        <Container className="md:hidden">
          <nav
            id="mobile-nav"
            aria-label="Mobile navigation"
            className="flex flex-col gap-1 border-t border-border py-3"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm transition-colors after:absolute after:bottom-1 after:left-3 after:h-px after:w-[calc(100%-1.5rem)] after:origin-left after:scale-x-0 after:bg-zinc-300 after:transition-transform after:duration-300",
                  "hover:text-primary hover:after:scale-x-100",
                  isLinkActive(link.href)
                    ? "text-primary after:scale-x-100"
                    : "text-secondary",
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2">
              <Show when="signed-out">
                <SignInButton mode="redirect" fallbackRedirectUrl="/admin" signUpFallbackRedirectUrl="/admin">
                  <Button className="w-full">Sign In</Button>
                </SignInButton>
              </Show>
              <Show when="signed-in">
                <div className="flex justify-center">
                  <UserButton userProfileMode="navigation" userProfileUrl="/profile" />
                </div>
              </Show>
            </div>
          </nav>
        </Container>
      ) : null}
    </header>
  );
}
