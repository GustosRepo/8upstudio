import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { MediaPlaceholder } from "@/components/media/MediaPlaceholder";

export const metadata: Metadata = {
  title: "About",
  description:
    "The creative studio behind 8UP — content creators who understand both sides of the camera.",
};

const beliefs = [
  "We shoot, edit, and post — so the content is built for how it will actually be used.",
  "We know what stops the scroll because we study what performs, not just what looks nice.",
  "We make people comfortable on camera. Most brands aren't used to being filmed.",
  "We care about the outcome, not just the deliverable.",
];

export default function AboutPage() {
  return (
    <div className="px-6 pt-32 pb-28 sm:px-10 sm:pt-40 sm:pb-40">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs tracking-[0.2em] uppercase text-ink/65">About</p>
        <h1 className="mt-4 max-w-2xl font-serif text-5xl tracking-tight sm:text-7xl">
          We understand content from both sides of the camera.
        </h1>

        <div className="mt-20 grid gap-12 sm:grid-cols-2 sm:items-center">
          <Reveal>
            <MediaPlaceholder
              media={{
                kind: "image",
                src: "/media/portrait-01.jpg",
                alt: "8UP Studio behind the scenes portrait",
                ratio: "portrait",
              }}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-ink/70">
              8UP Studio was built around a simple idea: content should look
              incredible <em>and</em> actually work. Photography, filming,
              editing, posting, and growing social accounts aren&apos;t
              separate skills here — they&apos;re one continuous process,
              shaped by real experience running social accounts for real
              Las Vegas businesses.
            </p>
          </Reveal>
        </div>

        <div className="mt-24 grid gap-8 sm:grid-cols-2">
          {beliefs.map((belief, i) => (
            <Reveal key={belief} delay={i * 0.05}>
              <p className="font-serif text-xl leading-snug sm:text-2xl">
                {belief}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-24">
          <Link
            href="/work-with-us"
            className="inline-block border border-ink px-6 py-3 text-xs tracking-[0.15em] uppercase transition-colors hover:bg-ink hover:text-ivory"
          >
            Work With 8UP →
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
