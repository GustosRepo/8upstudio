import { NextRequest, NextResponse } from "next/server";
import { leadSchema } from "@/lib/validation/lead";
import { getSupabaseServiceClient } from "@/lib/supabase/server";
import { sendLeadConfirmation, sendNewLeadNotification } from "@/lib/email";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const parsed = leadSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid submission", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const lead = parsed.data;
  const supabase = getSupabaseServiceClient();

  if (supabase) {
    const { error } = await supabase.from("leads").insert({
      name: lead.name,
      business_name: lead.businessName || null,
      email: lead.email,
      phone: lead.phone || null,
      website: lead.website || null,
      social_handle: lead.socialHandle || null,
      services: lead.services,
      goals: lead.goals,
      budget: lead.budget || null,
      project_date: lead.projectDate || null,
      message: [lead.message, lead.goalOther ? `Other goal: ${lead.goalOther}` : null]
        .filter(Boolean)
        .join("\n\n") || null,
      source: lead.source || null,
      utm_source: lead.utmSource || null,
      utm_medium: lead.utmMedium || null,
      utm_campaign: lead.utmCampaign || null,
      referrer: lead.referrer || null,
      landing_page: lead.landingPage || null,
    });

    if (error) {
      console.error("[leads] Supabase insert failed", error);
      return NextResponse.json({ error: "Could not save lead" }, { status: 500 });
    }
  } else {
    console.warn("[leads] SUPABASE_URL/SUPABASE_SERVICE_ROLE_KEY not set — lead not persisted", lead);
  }

  await Promise.allSettled([
    sendNewLeadNotification({
      name: lead.name,
      businessName: lead.businessName,
      email: lead.email,
      services: lead.services,
      budget: lead.budget,
      message: lead.message,
    }),
    sendLeadConfirmation(lead.email, lead.name),
  ]);

  return NextResponse.json({ ok: true });
}
