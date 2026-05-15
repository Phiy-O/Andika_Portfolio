import { SignUp } from "@clerk/nextjs";
import { Container } from "@/components/ui";

export default function RegisterPage() {
  return (
    <Container className="py-20">
      <div className="mx-auto w-full max-w-md rounded-xl border border-border bg-surface p-6 md:p-7">
        <h1 className="text-h2">Sign Up</h1>
        <p className="text-body mt-2">Create an account to access your dashboard.</p>
        <div className="mt-6">
          <SignUp routing="path" path="/register" signInUrl="/login" forceRedirectUrl="/admin" />
        </div>
      </div>
    </Container>
  );
}
