import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { MediaPlaceholder } from "@/components/media/MediaPlaceholder";
import { serviceFamilies } from "@/data/services";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Content creation, social media management, and monthly content programs for Las Vegas businesses.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="px-6 pt-32 pb-28 sm:px-10 sm:pt-40 sm:pb-40">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs tracking-[0.2em] uppercase text-ink/65">Services</p>
        <h1 className="mt-4 max-w-2xl font-serif text-5xl tracking-tight sm:text-7xl">
          Built around three ways we help you grow.
        </h1>

        <div className="mt-24 flex flex-col gap-28">
          {serviceFamilies.map((service) => (
            <div
              key={service.slug}
              id={service.slug}
              className="grid gap-10 sm:grid-cols-2 sm:items-center"
            >
              <Reveal>
                <MediaPlaceholder media={service.media} />
              </Reveal>
              <Reveal delay={0.1}>
                <p className="font-serif text-sm italic text-mauve">
                  {service.index} / {service.name}
                </p>
                <h2 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
                  {service.headline}
                </h2>
                <p className="mt-6 max-w-md text-ink/70">{service.copy}</p>
                <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs tracking-[0.1em] uppercase text-ink/65">
                  {service.offerings.map((offering) => (
                    <li key={offering}>{offering}</li>
                  ))}
                </ul>
                <Link
                  href="/work-with-us"
                  className="mt-8 inline-block border border-ink px-6 py-3 text-xs tracking-[0.15em] uppercase transition-colors hover:bg-ink hover:text-ivory"
                >
                  {service.cta} →
                </Link>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
