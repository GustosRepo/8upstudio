import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${site.name}.`,
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="px-6 pt-32 pb-28 sm:px-10 sm:pt-40 sm:pb-40">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs tracking-[0.2em] uppercase text-ink/65">Legal</p>
        <h1 className="mt-4 font-serif text-5xl tracking-tight sm:text-6xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-ink/50">Last updated: September 16, 2026</p>

        <div className="mt-12 flex flex-col gap-8 text-ink/80">
          <section>
            <h2 className="font-serif text-2xl">Overview</h2>
            <p className="mt-3">
              {site.name} (&quot;8UP&quot;, &quot;we&quot;, &quot;us&quot;) respects your privacy.
              This policy explains what information we collect through {site.url}, how we
              use it, and the choices you have.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl">Information We Collect</h2>
            <p className="mt-3">
              When you submit an inquiry through our &quot;Work With Us&quot; form, we
              collect the information you provide, which may include your name, business
              name, email, phone number, website, social media handles, project details,
              budget range, and desired timeline. We also automatically collect basic
              attribution data such as referrer, landing page, and UTM parameters to
              understand how visitors find us.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl">How We Use Information</h2>
            <p className="mt-3">
              We use the information you submit to respond to your inquiry, evaluate
              potential projects, and communicate with you about our services. We do not
              sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl">Data Storage &amp; Security</h2>
            <p className="mt-3">
              Inquiry submissions are stored securely in our database (Supabase) and are
              only accessible to authorized 8UP team members. We use industry-standard
              safeguards to protect your data, but no method of transmission or storage is
              100% secure.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl">Cookies &amp; Analytics</h2>
            <p className="mt-3">
              We may use basic, privacy-respecting analytics to understand site traffic
              and improve our content. We do not use third-party advertising trackers.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl">Your Choices</h2>
            <p className="mt-3">
              You may request access to, correction of, or deletion of the personal
              information you&apos;ve submitted to us by emailing{" "}
              <a href={`mailto:${site.email}`} className="underline underline-offset-4">
                {site.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl">Contact</h2>
            <p className="mt-3">
              Questions about this policy can be directed to{" "}
              <a href={`mailto:${site.email}`} className="underline underline-offset-4">
                {site.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
