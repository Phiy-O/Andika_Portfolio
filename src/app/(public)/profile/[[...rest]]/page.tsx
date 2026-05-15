import { UserProfile } from "@clerk/nextjs";
import { Section } from "@/components/ui";
import { LogoutButton } from "@/features/auth/components/LogoutButton";

export default function ProfilePage() {
  return (
    <Section className="py-16 md:py-20" containerClassName="space-y-6">
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-5 md:p-6">
        <h1 className="text-h2">Profile Settings</h1>
        <p className="text-body mt-2">Manage your account details, profile photo, and security settings.</p>
        <div className="mt-4">
          <LogoutButton />
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/70 p-2 md:p-3">
        <UserProfile
          path="/profile"
          routing="path"
          appearance={{
            elements: {
              card: "bg-zinc-900 border border-zinc-800 shadow-none",
              headerTitle: "text-zinc-100",
              headerSubtitle: "text-zinc-400",
              navbarButton: "text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100",
              profileSectionTitleText: "text-zinc-100",
              formButtonPrimary: "bg-zinc-800 hover:bg-zinc-700 text-zinc-100",
            },
          }}
        />
      </div>
    </Section>
  );
}
