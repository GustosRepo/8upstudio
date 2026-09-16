"use client";

import { useState, useTransition } from "react";
import { updateLeadNotes } from "@/app/admin/(dashboard)/actions";

export function LeadNotesForm({ id, notes }: { id: string; notes: string | null }) {
  const [value, setValue] = useState(notes ?? "");
  const [isPending, startTransition] = useTransition();
  const [saved, setSaved] = useState(false);

  return (
    <div>
      <textarea
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setSaved(false);
        }}
        rows={5}
        placeholder="Internal notes…"
        className="w-full border border-ink/20 bg-transparent p-4 text-sm outline-none focus:border-ink"
      />
      <button
        type="button"
        disabled={isPending}
        onClick={() =>
          startTransition(async () => {
            await updateLeadNotes(id, value);
            setSaved(true);
          })
        }
        className="mt-3 border border-ink px-6 py-2 text-xs tracking-[0.15em] uppercase transition-colors hover:bg-ink hover:text-ivory disabled:opacity-50"
      >
        {isPending ? "Saving…" : saved ? "Saved" : "Save Notes"}
      </button>
    </div>
  );
}
