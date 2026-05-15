"use client";

import { useClerk } from "@clerk/nextjs";

export function LogoutButton() {
  const { signOut } = useClerk();

  return (
    <button
      type="button"
      onClick={() => signOut({ redirectUrl: "/" })}
      className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-100"
    >
      Sign Out
    </button>
  );
}
