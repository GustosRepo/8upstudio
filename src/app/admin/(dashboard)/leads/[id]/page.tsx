import Link from "next/link";
import { notFound } from "next/navigation";
import { getSupabaseServerClient } from "@/lib/supabase/serverClient";
import type { Lead } from "@/data/lead";
import { LeadStatusSelect } from "@/components/admin/LeadStatusSelect";
import { LeadNotesForm } from "@/components/admin/LeadNotesForm";

export const dynamic = "force-dynamic";

export default async function LeadDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await getSupabaseServerClient();
  const { data, error } = await supabase.from("leads").select("*").eq("id", id).single();

  if (error || !data) notFound();
  const lead = data as Lead;

  return (
    <div className="max-w-3xl">
      <Link href="/admin" className="text-xs tracking-[0.15em] uppercase text-ink/50 hover:text-ink">
        ← All Leads
      </Link>

      <div className="mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div>
          <h1 className="font-serif text-4xl tracking-tight">{lead.name}</h1>
          <p className="mt-1 text-ink/60">{lead.business_name || "No business name given"}</p>
        </div>
        <p className="text-xs tracking-[0.1em] uppercase text-ink/40">
          Submitted{" "}
          {new Date(lead.created_at).toLocaleDateString(undefined, {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </div>

      <div className="mt-10">
        <p className="text-xs tracking-[0.15em] uppercase text-ink/50">Status</p>
        <div className="mt-3">
          <LeadStatusSelect id={lead.id} status={lead.status} />
        </div>
      </div>

      <div className="mt-10 grid gap-6 border-t border-ink/10 pt-8 sm:grid-cols-2">
        <Detail label="Email" value={lead.email} href={`mailto:${lead.email}`} />
        <Detail label="Phone" value={lead.phone} href={lead.phone ? `tel:${lead.phone}` : undefined} />
        <Detail label="Website" value={lead.website} href={lead.website ?? undefined} />
        <Detail label="Instagram / TikTok" value={lead.social_handle} />
        <Detail label="Services" value={lead.services.join(", ") || null} />
        <Detail label="Goals" value={lead.goals.join(", ") || null} />
        <Detail label="Budget" value={lead.budget} />
        <Detail label="Desired Timeline" value={lead.project_date} />
      </div>

      {lead.message && (
        <div className="mt-8 border-t border-ink/10 pt-8">
          <p className="text-xs tracking-[0.15em] uppercase text-ink/50">Project Details</p>
          <p className="mt-3 whitespace-pre-wrap text-ink/80">{lead.message}</p>
        </div>
      )}

      <div className="mt-8 border-t border-ink/10 pt-8">
        <p className="text-xs tracking-[0.15em] uppercase text-ink/50">Attribution</p>
        <div className="mt-3 grid gap-2 text-sm text-ink/60 sm:grid-cols-2">
          <span>Source: {lead.source || "—"}</span>
          <span>UTM Source: {lead.utm_source || "—"}</span>
          <span>UTM Medium: {lead.utm_medium || "—"}</span>
          <span>UTM Campaign: {lead.utm_campaign || "—"}</span>
          <span>Referrer: {lead.referrer || "—"}</span>
          <span>Landing Page: {lead.landing_page || "—"}</span>
        </div>
      </div>

      <div className="mt-8 border-t border-ink/10 pt-8">
        <p className="text-xs tracking-[0.15em] uppercase text-ink/50">Internal Notes</p>
        <div className="mt-3">
          <LeadNotesForm id={lead.id} notes={lead.notes} />
        </div>
      </div>
    </div>
  );
}

function Detail({ label, value, href }: { label: string; value: string | null; href?: string }) {
  return (
    <div>
      <p className="text-[10px] tracking-[0.15em] uppercase text-ink/40">{label}</p>
      {value ? (
        href ? (
          <a href={href} className="text-ink underline underline-offset-4">
            {value}
          </a>
        ) : (
          <p className="text-ink">{value}</p>
        )
      ) : (
        <p className="text-ink/30">—</p>
      )}
    </div>
  );
}
