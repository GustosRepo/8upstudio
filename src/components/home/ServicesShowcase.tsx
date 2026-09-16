import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { MediaPlaceholder } from "@/components/media/MediaPlaceholder";
import { serviceFamilies } from "@/data/services";

export function ServicesShowcase() {
  return (
    <section className="bg-ink text-ivory">
      {serviceFamilies.map((service, i) => (
        <div
          key={service.slug}
          className="mx-auto grid max-w-6xl gap-10 px-6 py-24 sm:grid-cols-2 sm:items-center sm:py-32 sm:px-10"
        >
          <Reveal className={i % 2 === 1 ? "sm:order-2" : undefined}>
            <MediaPlaceholder media={service.media} />
          </Reveal>

          <Reveal delay={0.1} className={i % 2 === 1 ? "sm:order-1" : undefined}>
            <p className="font-serif text-sm italic text-mauve-light">
              {service.index} / {service.name}
            </p>
            <h3 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
              {service.headline}
            </h3>
            <p className="mt-6 max-w-md text-ivory/70">{service.copy}</p>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs tracking-[0.1em] uppercase text-ivory/70">
              {service.offerings.map((offering) => (
                <li key={offering}>{offering}</li>
              ))}
            </ul>

            <Link
              href={`/services#${service.slug}`}
              className="mt-8 inline-block text-xs tracking-[0.15em] uppercase underline underline-offset-4 hover:opacity-70"
            >
              {service.cta} →
            </Link>
          </Reveal>
        </div>
      ))}
    </section>
  );
}
