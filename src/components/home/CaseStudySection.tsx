import { Reveal } from "@/components/motion/Reveal";
import { MediaPlaceholder } from "@/components/media/MediaPlaceholder";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { caseStudies } from "@/data/caseStudies";

export function CaseStudySection() {
  const study = caseStudies[0];
  if (!study) return null;

  return (
    <section className="bg-ivory px-6 py-28 sm:px-10 sm:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel index="06" label="Results" />
        </Reveal>

        <div className="mt-10 grid gap-12 sm:grid-cols-2 sm:items-center">
          <Reveal delay={0.1}>
            <MediaPlaceholder media={study.cover} />
          </Reveal>

          <Reveal delay={0.2}>
            <h3 className="font-serif text-4xl tracking-tight sm:text-5xl">
              {study.client}
            </h3>
            <p className="mt-6 max-w-md text-ink/70">{study.summary}</p>

            <div className="mt-8 flex flex-wrap gap-10">
              {study.metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="font-serif text-3xl">{metric.value}</p>
                  <p className="text-[10px] tracking-[0.15em] uppercase text-ink/65">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-xs tracking-[0.15em] uppercase text-ink/65">
              {study.services.join(" · ")}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
