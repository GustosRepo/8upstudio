export type LeadStatus = "new" | "contacted" | "booked" | "closed";

export type Lead = {
  id: string;
  name: string;
  business_name: string | null;
  email: string;
  phone: string | null;
  website: string | null;
  social_handle: string | null;
  services: string[];
  goals: string[];
  budget: string | null;
  project_date: string | null;
  message: string | null;
  source: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  referrer: string | null;
  landing_page: string | null;
  status: LeadStatus;
  notes: string | null;
  created_at: string;
  updated_at: string;
};

export const leadStatuses: LeadStatus[] = ["new", "contacted", "booked", "closed"];
