import { Reveal } from "@/components/motion/Reveal";
import { MediaPlaceholder } from "@/components/media/MediaPlaceholder";

export function EditorialStatement() {
  return (
    <section className="relative bg-ivory px-6 py-28 sm:px-10 sm:py-40">
      <div className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-[1.2fr_0.8fr] sm:items-center">
        <Reveal>
          <h2 className="font-serif text-4xl leading-[1.05] tracking-tight sm:text-6xl">
            CONTENT PEOPLE
            <br />
            ACTUALLY WANT
            <br />
            <span className="italic text-mauve">TO WATCH.</span>
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-ink/70">
            We create photo, video and social content designed to make brands
            stand out and connect with the people they want to reach.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <MediaPlaceholder
            media={{
              kind: "image",
              src: "/media/portrait-01.jpg",
              alt: "Editorial portrait",
              ratio: "portrait",
            }}
          />
        </Reveal>
      </div>
    </section>
  );
}
