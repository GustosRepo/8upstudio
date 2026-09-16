"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { serviceOptions, goalOptions, budgetOptions } from "@/data/leadOptions";
import { cn } from "@/lib/utils";

type FormState = {
  services: string[];
  name: string;
  businessName: string;
  email: string;
  phone: string;
  website: string;
  socialHandle: string;
  goals: string[];
  goalOther: string;
  projectDate: string;
  budget: string;
  message: string;
};

const initialState: FormState = {
  services: [],
  name: "",
  businessName: "",
  email: "",
  phone: "",
  website: "",
  socialHandle: "",
  goals: [],
  goalOther: "",
  projectDate: "",
  budget: "",
  message: "",
};

const totalSteps = 4;

function toggle(list: string[], value: string) {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

export function InquiryForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");

  const canProceed =
    (step === 1 && form.services.length > 0) ||
    (step === 2 && form.name.trim() && form.email.trim()) ||
    step === 3 ||
    step === 4;

  async function handleSubmit() {
    setStatus("submitting");
    try {
      const params = new URLSearchParams(window.location.search);
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          budget: form.budget || undefined,
          source: "work-with-us",
          utmSource: params.get("utm_source") ?? "",
          utmMedium: params.get("utm_medium") ?? "",
          utmCampaign: params.get("utm_campaign") ?? "",
          referrer: document.referrer,
          landingPage: window.location.pathname,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-start gap-8"
      >
        <p className="text-xs tracking-[0.2em] uppercase text-mauve">Submitted</p>
        <h2 className="font-serif text-5xl tracking-tight sm:text-7xl">YOU&apos;RE IN.</h2>
        <p className="max-w-md text-ink/70">
          Thanks for reaching out to 8UP Studio. We&apos;ll review your project
          and get back to you soon.
        </p>
        <Link
          href="/work"
          className="border border-ink px-6 py-3 text-xs tracking-[0.15em] uppercase transition-colors hover:bg-ink hover:text-ivory"
        >
          See Our Latest Work →
        </Link>
      </motion.div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-ink/65">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <span
            key={i}
            className={cn("h-px flex-1", i + 1 <= step ? "bg-ink" : "bg-ink/15")}
          />
        ))}
      </div>
      <p className="mt-3 text-xs tracking-[0.15em] uppercase text-ink/55">
        Step {step} of {totalSteps}
      </p>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10"
        >
          {step === 1 && (
            <fieldset>
              <legend className="font-serif text-3xl sm:text-4xl">
                What do you need?
              </legend>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {serviceOptions.map((option) => (
                  <button
                    type="button"
                    key={option}
                    onClick={() =>
                      setForm((f) => ({ ...f, services: toggle(f.services, option) }))
                    }
                    aria-pressed={form.services.includes(option)}
                    className={cn(
                      "border px-5 py-4 text-left text-sm transition-colors",
                      form.services.includes(option)
                        ? "border-ink bg-ink text-ivory"
                        : "border-ink/20 hover:border-ink/60"
                    )}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </fieldset>
          )}

          {step === 2 && (
            <fieldset className="grid gap-5 sm:grid-cols-2">
              <legend className="font-serif text-3xl sm:col-span-2 sm:text-4xl">
                About you
              </legend>
              <Field label="Name *">
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className={inputClass}
                />
              </Field>
              <Field label="Business Name">
                <input
                  value={form.businessName}
                  onChange={(e) => setForm((f) => ({ ...f, businessName: e.target.value }))}
                  className={inputClass}
                />
              </Field>
              <Field label="Email *">
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className={inputClass}
                />
              </Field>
              <Field label="Phone">
                <input
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  className={inputClass}
                />
              </Field>
              <Field label="Website">
                <input
                  value={form.website}
                  onChange={(e) => setForm((f) => ({ ...f, website: e.target.value }))}
                  className={inputClass}
                />
              </Field>
              <Field label="Instagram / TikTok">
                <input
                  value={form.socialHandle}
                  onChange={(e) => setForm((f) => ({ ...f, socialHandle: e.target.value }))}
                  className={inputClass}
                />
              </Field>
            </fieldset>
          )}

          {step === 3 && (
            <fieldset>
              <legend className="font-serif text-3xl sm:text-4xl">
                What are you trying to accomplish?
              </legend>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {goalOptions.map((option) => (
                  <button
                    type="button"
                    key={option}
                    onClick={() => setForm((f) => ({ ...f, goals: toggle(f.goals, option) }))}
                    aria-pressed={form.goals.includes(option)}
                    className={cn(
                      "border px-5 py-4 text-left text-sm transition-colors",
                      form.goals.includes(option)
                        ? "border-ink bg-ink text-ivory"
                        : "border-ink/20 hover:border-ink/60"
                    )}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <div className="mt-6">
                <Field label="Anything else? (optional)">
                  <textarea
                    value={form.goalOther}
                    onChange={(e) => setForm((f) => ({ ...f, goalOther: e.target.value }))}
                    rows={3}
                    className={inputClass}
                  />
                </Field>
              </div>
            </fieldset>
          )}

          {step === 4 && (
            <fieldset className="grid gap-5">
              <legend className="font-serif text-3xl sm:text-4xl">
                Tell us about the project
              </legend>
              <Field label="Desired date / timeline">
                <input
                  value={form.projectDate}
                  onChange={(e) => setForm((f) => ({ ...f, projectDate: e.target.value }))}
                  className={inputClass}
                />
              </Field>

              <Field label="Budget range">
                <div className="grid gap-3 sm:grid-cols-2">
                  {budgetOptions.map((option) => (
                    <button
                      type="button"
                      key={option}
                      onClick={() => setForm((f) => ({ ...f, budget: option }))}
                      aria-pressed={form.budget === option}
                      className={cn(
                        "border px-5 py-3 text-left text-sm transition-colors",
                        form.budget === option
                          ? "border-ink bg-ink text-ivory"
                          : "border-ink/20 hover:border-ink/60"
                      )}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </Field>

              <Field label="Tell us about the project">
                <textarea
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  rows={4}
                  className={inputClass}
                />
              </Field>
            </fieldset>
          )}
        </motion.div>
      </AnimatePresence>

      {status === "error" && (
        <p className="mt-6 text-sm text-burgundy">
          Something went wrong. Please try again.
        </p>
      )}

      <div className="mt-12 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(1, s - 1))}
          disabled={step === 1}
          className="text-xs tracking-[0.15em] uppercase text-ink/65 disabled:opacity-0"
        >
          ← Back
        </button>

        {step < totalSteps ? (
          <button
            type="button"
            disabled={!canProceed}
            onClick={() => setStep((s) => s + 1)}
            className="border border-ink px-6 py-3 text-xs tracking-[0.15em] uppercase transition-colors hover:bg-ink hover:text-ivory disabled:cursor-not-allowed disabled:opacity-30"
          >
            Continue →
          </button>
        ) : (
          <button
            type="button"
            disabled={status === "submitting"}
            onClick={handleSubmit}
            className="border border-ink bg-ink px-6 py-3 text-xs tracking-[0.15em] uppercase text-ivory transition-opacity hover:opacity-80 disabled:opacity-50"
          >
            {status === "submitting" ? "Submitting…" : "Submit Inquiry →"}
          </button>
        )}
      </div>
    </div>
  );
}

const inputClass =
  "w-full border-0 border-b border-ink/20 bg-transparent py-2 text-ink outline-none focus:border-ink";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2 text-sm">
      <span className="text-xs tracking-[0.1em] uppercase text-ink/65">{label}</span>
      {children}
    </label>
  );
}
