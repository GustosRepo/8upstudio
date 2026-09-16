import { Reveal } from "@/components/motion/Reveal";

const steps = ["Shoot", "Edit", "Create", "Publish", "Grow"];

export function Differentiator() {
  return (
    <section className="bg-ivory px-6 py-28 sm:px-10 sm:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-serif text-4xl leading-[1.05] tracking-tight sm:text-6xl">
            WE DON&apos;T JUST
            <br />
            MAKE CONTENT.
          </h2>
          <h2 className="mt-2 font-serif text-4xl leading-[1.05] tracking-tight text-mauve italic sm:text-6xl">
            WE HELP YOU
            <br />
            DO SOMETHING WITH IT.
          </h2>
          <p className="mt-8 max-w-xl text-ink/70">
            8UP combines production quality with practical social media
            knowledge — so the work doesn&apos;t just look good, it moves your
            business forward.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-16">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-4">
            {steps.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span className="font-serif text-2xl sm:text-3xl">{step}</span>
                {i < steps.length - 1 && (
                  <span className="text-mauve">→</span>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
