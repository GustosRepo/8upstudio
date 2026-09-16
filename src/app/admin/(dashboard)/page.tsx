import Link from "next/link";
import { getSupabaseServerClient } from "@/lib/supabase/serverClient";
import type { Lead, LeadStatus } from "@/data/lead";
import { leadStatuses } from "@/data/lead";
import { cn } from "@/lib/utils";

export const dynamic = "force-dynamic";

const statusFilters: (LeadStatus | "all")[] = ["all", ...leadStatuses];

type SearchParams = { status?: string; q?: string };

export default async function AdminDashboardPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const { status, q } = await searchParams;
  const supabase = await getSupabaseServerClient();

  let query = supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  if (status && status !== "all") {
    query = query.eq("status", status);
  }
  if (q) {
    query = query.or(
      `name.ilike.%${q}%,business_name.ilike.%${q}%,email.ilike.%${q}%`
    );
  }

  const { data, error } = await query;
  const leads = (data ?? []) as Lead[];
  const newCount = leads.filter((l) => l.status === "new").length;

  return (
    <div>
      <p className="text-xs tracking-[0.2em] uppercase text-ink/50">
        New Leads — {newCount}
      </p>
      <h1 className="mt-2 font-serif text-4xl tracking-tight">Leads</h1>

      {error && (
        <p className="mt-6 max-w-lg text-sm text-burgundy">
          Could not load leads: {error.message}. Make sure SUPABASE env vars
          are set and the migrations have been run.
        </p>
      )}

      <form method="get" className="mt-8 flex flex-wrap items-center gap-4">
        <div className="flex flex-wrap gap-2">
          {statusFilters.map((s) => (
            <Link
              key={s}
              href={s === "all" ? "/admin" : `/admin?status=${s}`}
              className={cn(
                "border px-4 py-2 text-xs tracking-[0.15em] uppercase transition-colors",
                (status ?? "all") === s
                  ? "border-ink bg-ink text-ivory"
                  : "border-ink/20 text-ink/60 hover:border-ink/60"
              )}
            >
              {s}
            </Link>
          ))}
        </div>

        <input
          type="search"
          name="q"
          defaultValue={q}
          placeholder="Search name, business, email…"
          className="ml-auto border-0 border-b border-ink/20 bg-transparent px-1 py-2 text-sm outline-none focus:border-ink"
        />
        {status && <input type="hidden" name="status" value={status} />}
      </form>

      <div className="mt-10 flex flex-col divide-y divide-ink/10 border-t border-ink/10">
        {leads.map((lead) => (
          <Link
            key={lead.id}
            href={`/admin/leads/${lead.id}`}
            className="flex flex-col gap-2 py-5 transition-colors hover:bg-ink/[0.03] sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="font-serif text-xl">{lead.name}</p>
              <p className="text-xs tracking-[0.1em] uppercase text-ink/50">
                {lead.business_name || "—"}
              </p>
            </div>
            <p className="text-sm text-ink/70">{lead.services.join(" + ") || "—"}</p>
            <p className="text-sm text-ink/70">{lead.budget || "—"}</p>
            <div className="flex items-center gap-4">
              <span className="text-xs tracking-[0.1em] uppercase text-ink/50">
                {new Date(lead.created_at).toLocaleDateString(undefined, {
                  month: "short",
                  day: "numeric",
                })}
              </span>
              <span
                className={cn(
                  "border px-3 py-1 text-[10px] tracking-[0.15em] uppercase",
                  lead.status === "new" && "border-burgundy text-burgundy",
                  lead.status === "contacted" && "border-ink/40 text-ink/70",
                  lead.status === "booked" && "border-mauve text-mauve",
                  lead.status === "closed" && "border-ink/20 text-ink/40"
                )}
              >
                {lead.status}
              </span>
            </div>
          </Link>
        ))}

        {leads.length === 0 && !error && (
          <p className="py-10 text-sm text-ink/50">No leads match these filters yet.</p>
        )}
      </div>
    </div>
  );
}
