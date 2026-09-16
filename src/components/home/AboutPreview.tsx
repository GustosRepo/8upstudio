import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { MediaPlaceholder } from "@/components/media/MediaPlaceholder";

export function AboutPreview() {
  return (
    <section className="bg-ivory px-6 py-28 sm:px-10 sm:py-40">
      <div className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-2 sm:items-center">
        <Reveal>
          <MediaPlaceholder
            media={{
              kind: "image",
              src: "/media/portrait-01.jpg",
              alt: "8UP Studio behind the scenes",
              ratio: "portrait",
            }}
          />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-xs tracking-[0.2em] uppercase text-ink/50">About</p>
          <h3 className="mt-4 font-serif text-3xl leading-tight tracking-tight sm:text-5xl">
            We understand content from both sides of the camera.
          </h3>
          <p className="mt-6 max-w-md text-ink/70">
            Photography, filming, editing, posting, and growing social
            accounts aren&apos;t separate skills to us — they&apos;re one
            continuous process, built on real experience running social
            accounts for real businesses.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-block text-xs tracking-[0.15em] uppercase underline underline-offset-4 hover:opacity-70"
          >
            Meet 8UP →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
