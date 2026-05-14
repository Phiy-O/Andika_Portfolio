import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { SignOutButton } from "@/features/auth/components/SignOutButton";

export default async function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await getServerSession(authOptions);

  return (
    <div className="min-h-screen bg-background text-primary md:grid md:grid-cols-[250px_1fr]">
      <aside className="border-b border-border bg-surface/60 p-4 md:min-h-screen md:border-b-0 md:border-r md:p-5">
        <div className="flex items-center justify-between md:block">
          <p className="text-sm font-semibold tracking-wide">Admin Panel</p>
          <SignOutButton />
        </div>
        <nav className="mt-4 flex gap-2 md:flex-col" aria-label="Admin navigation">
          <Link href="/admin" className="rounded-md px-3 py-2 text-sm text-secondary hover:bg-background hover:text-primary">
            Overview
          </Link>
          <Link href="/admin/blog" className="rounded-md px-3 py-2 text-sm text-secondary hover:bg-background hover:text-primary">
            Blog
          </Link>
          <Link
            href="/admin/projects"
            className="rounded-md px-3 py-2 text-sm text-secondary hover:bg-background hover:text-primary"
          >
            Projects
          </Link>
          <Link
            href="/admin/certificates"
            className="rounded-md px-3 py-2 text-sm text-secondary hover:bg-background hover:text-primary"
          >
            Certificates
          </Link>
        </nav>
        <p className="text-caption mt-4 hidden md:block">{session?.user?.email}</p>
      </aside>
      <main id="main-content" className="p-4 md:p-8">
        {children}
      </main>
    </div>
  );
}
