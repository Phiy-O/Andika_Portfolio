"use client";

import { signOut } from "next-auth/react";

export function SignOutButton() {
  return (
    <button
      type="button"
      onClick={() => signOut({ callbackUrl: "/login" })}
      className="rounded-md border border-border px-3 py-1 text-xs text-secondary transition-colors hover:text-primary md:mt-4"
    >
      Sign out
    </button>
  );
}
