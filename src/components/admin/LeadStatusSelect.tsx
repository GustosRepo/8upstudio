"use client";

import { useTransition } from "react";
import { updateLeadStatus } from "@/app/admin/(dashboard)/actions";
import { leadStatuses, type LeadStatus } from "@/data/lead";
import { cn } from "@/lib/utils";

export function LeadStatusSelect({ id, status }: { id: string; status: LeadStatus }) {
  const [isPending, startTransition] = useTransition();

  return (
    <div className="flex flex-wrap gap-2">
      {leadStatuses.map((s) => (
        <button
          key={s}
          type="button"
          disabled={isPending}
          onClick={() => startTransition(() => updateLeadStatus(id, s))}
          className={cn(
            "border px-4 py-2 text-xs tracking-[0.15em] uppercase transition-colors disabled:opacity-50",
            status === s
              ? "border-ink bg-ink text-ivory"
              : "border-ink/20 text-ink/60 hover:border-ink/60"
          )}
        >
          {s}
        </button>
      ))}
    </div>
  );
}
