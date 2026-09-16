"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getSupabaseServerClient } from "@/lib/supabase/serverClient";
import type { LeadStatus } from "@/data/lead";

export async function signOutAction() {
  const supabase = await getSupabaseServerClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

export async function updateLeadStatus(id: string, status: LeadStatus) {
  const supabase = await getSupabaseServerClient();
  await supabase.from("leads").update({ status, updated_at: new Date().toISOString() }).eq("id", id);
  revalidatePath("/admin");
  revalidatePath(`/admin/leads/${id}`);
}

export async function updateLeadNotes(id: string, notes: string) {
  const supabase = await getSupabaseServerClient();
  await supabase.from("leads").update({ notes, updated_at: new Date().toISOString() }).eq("id", id);
  revalidatePath(`/admin/leads/${id}`);
}
