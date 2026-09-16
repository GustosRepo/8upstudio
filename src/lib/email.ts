import { Resend } from "resend";

// Falls back to Resend's shared test sender until a custom domain is verified.
const FROM_EMAIL = process.env.LEAD_EMAIL_FROM ?? "8UP Studio <onboarding@resend.dev>";
const STUDIO_EMAIL = process.env.LEAD_EMAIL_TO ?? "hello@8upstudio.com";

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

type NewLeadEmailInput = {
  name: string;
  businessName?: string;
  email: string;
  services: string[];
  budget?: string;
  message?: string;
};

export async function sendNewLeadNotification(lead: NewLeadEmailInput) {
  const resend = getResendClient();
  if (!resend) {
    console.warn("[email] RESEND_API_KEY not set — skipping studio notification email");
    return;
  }

  await resend.emails.send({
    from: FROM_EMAIL,
    to: STUDIO_EMAIL,
    subject: `New inquiry: ${lead.name}${lead.businessName ? ` (${lead.businessName})` : ""}`,
    text: [
      `Name: ${lead.name}`,
      lead.businessName ? `Business: ${lead.businessName}` : null,
      `Email: ${lead.email}`,
      `Services: ${lead.services.join(", ")}`,
      lead.budget ? `Budget: ${lead.budget}` : null,
      lead.message ? `Message: ${lead.message}` : null,
    ]
      .filter(Boolean)
      .join("\n"),
  });
}

export async function sendLeadConfirmation(to: string, name: string) {
  const resend = getResendClient();
  if (!resend) {
    console.warn("[email] RESEND_API_KEY not set — skipping client confirmation email");
    return;
  }

  await resend.emails.send({
    from: FROM_EMAIL,
    to,
    subject: "You're in — 8UP Studio",
    text: `Hi ${name},\n\nThanks for reaching out to 8UP Studio. We'll review your project and get back to you soon.\n\n— 8UP Studio`,
  });
}
