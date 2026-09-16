"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { MediaPlaceholder } from "@/components/media/MediaPlaceholder";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const filters = ["All", "Photo", "Video", "Social", "Events", "Brands"] as const;

export function WorkGrid() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.categories.includes(active));
  }, [active]);

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            aria-pressed={active === filter}
            className={cn(
              "border px-4 py-2 text-xs tracking-[0.15em] uppercase transition-colors",
              active === filter
                ? "border-ink bg-ink text-ivory"
                : "border-ink/20 text-ink/60 hover:border-ink/60"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <motion.a
            key={project.slug}
            id={project.slug}
            href={`#${project.slug}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className={cn("group block", i % 5 === 0 && "sm:col-span-2")}
          >
            <MediaPlaceholder media={project.cover} />
            <div className="mt-4 flex items-baseline justify-between">
              <div>
                <h3 className="font-serif text-xl">{project.title}</h3>
                <p className="text-xs tracking-[0.1em] uppercase text-ink/65">
                  {project.categories.join(" · ")}
                </p>
              </div>
              {project.metrics && (
                <span className="text-xs tracking-[0.1em] uppercase text-ink/55">
                  {project.metrics[0]?.value} {project.metrics[0]?.label}
                </span>
              )}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
