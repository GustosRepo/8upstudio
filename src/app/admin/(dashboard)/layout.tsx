import Link from "next/link";
import { signOutAction } from "./actions";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-ivory text-ink">
      <div className="flex items-center justify-between border-b border-ink/10 px-6 py-4 sm:px-10">
        <Link href="/admin" className="font-serif text-lg">
          8UP Studio — Admin
        </Link>
        <form action={signOutAction}>
          <button
            type="submit"
            className="text-xs tracking-[0.15em] uppercase text-ink/65 hover:text-ink"
          >
            Sign Out
          </button>
        </form>
      </div>
      <main className="px-6 py-10 sm:px-10">{children}</main>
    </div>
  );
}
