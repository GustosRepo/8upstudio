import { z } from "zod";
import { serviceOptions, goalOptions, budgetOptions } from "@/data/leadOptions";

export const leadSchema = z.object({
  services: z.array(z.enum(serviceOptions)).min(1, "Select at least one option"),
  name: z.string().min(1, "Name is required"),
  businessName: z.string().optional().default(""),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional().default(""),
  website: z.string().optional().default(""),
  socialHandle: z.string().optional().default(""),
  goals: z.array(z.enum(goalOptions)).default([]),
  goalOther: z.string().optional().default(""),
  projectDate: z.string().optional().default(""),
  budget: z.enum(budgetOptions).optional(),
  message: z.string().optional().default(""),
  source: z.string().optional().default(""),
  utmSource: z.string().optional().default(""),
  utmMedium: z.string().optional().default(""),
  utmCampaign: z.string().optional().default(""),
  referrer: z.string().optional().default(""),
  landingPage: z.string().optional().default(""),
});

export type LeadInput = z.infer<typeof leadSchema>;
