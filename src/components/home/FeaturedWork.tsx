import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { MediaPlaceholder } from "@/components/media/MediaPlaceholder";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { projects } from "@/data/projects";

export function FeaturedWork() {
  const [featured, ...rest] = projects;

  return (
    <section className="bg-ivory px-6 py-28 sm:px-10 sm:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel index="03" label="Featured Work" />
        </Reveal>

        {featured && (
          <Reveal delay={0.1} className="mt-10">
            <Link href={`/work#${featured.slug}`} className="group block">
              <MediaPlaceholder media={featured.cover} className="rounded-none" />
              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="font-serif text-3xl tracking-tight sm:text-5xl">
                    {featured.title}
                  </h3>
                  <p className="mt-2 text-xs tracking-[0.15em] uppercase text-ink/50">
                    {featured.categories.join(" · ")}
                  </p>
                </div>

                {featured.metrics && (
                  <div className="flex flex-wrap gap-8">
                    {featured.metrics.map((metric) => (
                      <div key={metric.label}>
                        <p className="font-serif text-2xl">{metric.value}</p>
                        <p className="text-[10px] tracking-[0.15em] uppercase text-ink/50">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <span className="text-xs tracking-[0.15em] uppercase underline underline-offset-4 transition-opacity group-hover:opacity-60">
                  View Project →
                </span>
              </div>
            </Link>
          </Reveal>
        )}

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {rest.map((project, i) => (
            <Reveal key={project.slug} delay={0.05 * i}>
              <Link href={`/work#${project.slug}`} className="group block">
                <MediaPlaceholder media={project.cover} />
                <div className="mt-4 flex items-baseline justify-between">
                  <h4 className="font-serif text-xl">{project.title}</h4>
                  <span className="text-xs tracking-[0.15em] uppercase text-ink/50">
                    {project.categories[0]}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
