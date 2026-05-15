import { SignIn } from "@clerk/nextjs";
import { Container } from "@/components/ui";

export default function LoginPage() {
  return (
    <Container className="py-20">
      <div className="mx-auto w-full max-w-md rounded-xl border border-border bg-surface p-6 md:p-7">
        <h1 className="text-h2">Sign In</h1>
        <p className="text-body mt-2">Sign in to continue to your dashboard.</p>
        <div className="mt-6">
          <SignIn routing="path" path="/login" signUpUrl="/register" forceRedirectUrl="/admin" />
        </div>
      </div>
    </Container>
  );
}
