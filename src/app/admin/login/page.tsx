import { LoginForm } from "@/components/admin/LoginForm";

export const metadata = { title: "Admin Login", robots: { index: false, follow: false } };

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ink px-6">
      <div className="w-full max-w-sm">
        <p className="text-xs tracking-[0.2em] uppercase text-ivory/50">8UP Studio</p>
        <h1 className="mt-2 font-serif text-3xl text-ivory">Admin</h1>
        <div className="mt-10">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
