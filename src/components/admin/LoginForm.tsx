"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = getSupabaseBrowserClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      setError(signInError.message);
      setLoading(false);
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <label className="flex flex-col gap-2 text-sm">
        <span className="text-xs tracking-[0.1em] uppercase text-ivory/70">Email</span>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-0 border-b border-ivory/30 bg-transparent py-2 text-ivory outline-none focus:border-ivory"
        />
      </label>
      <label className="flex flex-col gap-2 text-sm">
        <span className="text-xs tracking-[0.1em] uppercase text-ivory/70">Password</span>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-0 border-b border-ivory/30 bg-transparent py-2 text-ivory outline-none focus:border-ivory"
        />
      </label>

      {error && <p className="text-sm text-mauve-light">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="mt-4 border border-ivory px-6 py-3 text-xs tracking-[0.15em] uppercase text-ivory transition-colors hover:bg-ivory hover:text-ink disabled:opacity-50"
      >
        {loading ? "Signing in…" : "Sign In"}
      </button>
    </form>
  );
}
