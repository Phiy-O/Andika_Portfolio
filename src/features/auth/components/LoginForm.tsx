"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui";

export function LoginForm() {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    setIsPending(true);
    setError(null);

    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/admin",
    });

    if (result?.error) {
      setError("Invalid email or password.");
      setIsPending(false);
    }
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm text-secondary">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="h-11 w-full rounded-lg border border-border bg-surface px-3 text-sm outline-none transition-colors focus:border-zinc-500"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="password" className="text-sm text-secondary">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          minLength={8}
          className="h-11 w-full rounded-lg border border-border bg-surface px-3 text-sm outline-none transition-colors focus:border-zinc-500"
        />
      </div>

      {error ? <p className="text-sm text-red-300">{error}</p> : null}

      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? "Signing in..." : "Sign In"}
      </Button>
    </form>
  );
}
