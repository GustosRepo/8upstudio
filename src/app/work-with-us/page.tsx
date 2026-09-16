import type { Metadata } from "next";
import { InquiryForm } from "@/components/inquiry/InquiryForm";

export const metadata: Metadata = {
  title: "Work With Us",
  description: "Start a project with 8UP Studio — photo, video, and social content for Las Vegas businesses.",
};

export default function WorkWithUsPage() {
  return (
    <div className="px-6 pt-32 pb-28 sm:px-10 sm:pt-40 sm:pb-40">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs tracking-[0.2em] uppercase text-ink/50">Inquire</p>
        <h1 className="mt-4 font-serif text-5xl tracking-tight sm:text-6xl">
          Let&apos;s work together.
        </h1>
        <p className="mt-4 text-ink/60">
          Tell us a bit about your business and what you need. It takes about
          a minute.
        </p>

        <div className="mt-16">
          <InquiryForm />
        </div>
      </div>
    </div>
  );
}
