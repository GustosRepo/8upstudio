import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

export function FinalCTA() {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center bg-ink px-6 py-28 text-center text-ivory sm:px-10">
      <Reveal>
        <h2 className="font-serif text-5xl leading-[1.05] tracking-tight sm:text-8xl">
          READY TO MAKE
          <br />
          YOUR BRAND LOOK
          <br />
          <span className="italic text-mauve-light">THIS GOOD?</span>
        </h2>
      </Reveal>

      <Reveal delay={0.15} className="mt-12">
        <Link
          href="/work-with-us"
          className="inline-block border border-ivory px-8 py-4 text-xs tracking-[0.2em] uppercase transition-colors hover:bg-ivory hover:text-ink"
        >
          Work With 8UP
        </Link>
      </Reveal>
    </section>
  );
}
