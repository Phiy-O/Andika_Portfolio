import Link from "next/link";
import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";

const adminEmail = process.env.ADMIN_EMAIL?.toLowerCase();

export default async function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  const user = await currentUser();
  const email = user?.emailAddresses?.[0]?.emailAddress?.toLowerCase();

  if (!email || !adminEmail || email !== adminEmail) {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-background text-primary md:grid md:grid-cols-[250px_1fr]">
      <aside className="border-b border-border bg-surface/60 p-4 md:min-h-screen md:border-b-0 md:border-r md:p-5">
        <div className="flex items-center justify-between md:block">
          <p className="text-sm font-semibold tracking-wide">Admin Panel</p>
          <div className="md:mt-4">
            <UserButton />
          </div>
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
        <p className="text-caption mt-4 hidden md:block">{email}</p>
      </aside>
      <main id="main-content" className="p-4 md:p-8">
        {children}
      </main>
    </div>
  );
}
