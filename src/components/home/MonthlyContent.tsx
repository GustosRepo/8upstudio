import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

const inclusions = [
  "Scheduled content shoots",
  "Photography",
  "Short-form video",
  "Editing",
  "Content planning",
  "Social-ready deliverables",
  "Optional social management",
];

export function MonthlyContent() {
  return (
    <section className="bg-mauve/15 px-6 py-28 sm:px-10 sm:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-serif text-4xl leading-[1.05] tracking-tight sm:text-6xl">
            YOUR BUSINESS NEEDS
            <br />
            <span className="italic">CONTENT EVERY MONTH.</span>
          </h2>
          <p className="mt-8 max-w-lg text-ink/70">
            Work with 8UP continuously rather than booking individual shoots —
            a steady stream of content built into how your business grows.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-12">
          <ul className="grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
            {inclusions.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="h-px w-4 bg-ink/40" />
                {item}
              </li>
            ))}
          </ul>

          <Link
            href="/work-with-us"
            className="mt-12 inline-block border border-ink px-6 py-3 text-xs tracking-[0.15em] uppercase transition-colors hover:bg-ink hover:text-ivory"
          >
            Let&apos;s Build Your Content →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
