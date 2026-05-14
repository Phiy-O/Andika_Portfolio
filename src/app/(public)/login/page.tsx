import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { LoginForm } from "@/features/auth/components/LoginForm";
import { Container } from "@/components/ui";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  if (session?.user?.role === "ADMIN") {
    redirect("/admin");
  }

  return (
    <Container className="py-20">
      <div className="mx-auto w-full max-w-md rounded-xl border border-border bg-surface p-6 md:p-7">
        <h1 className="text-h2">Admin Login</h1>
        <p className="text-body mt-2">Sign in to manage posts, projects, and certificates.</p>
        <div className="mt-6">
          <LoginForm />
        </div>
      </div>
    </Container>
  );
}
