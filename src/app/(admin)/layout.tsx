export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-background text-primary">
      <main id="main-content">{children}</main>
    </div>
  );
}
