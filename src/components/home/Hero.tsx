"use client";

import Link from "next/link";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-ink text-ivory">
      {/* /public/media/hero-reel.mp4 — full-bleed autoplay muted reel, poster fallback below */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-b from-ink/10 via-ink/40 to-ink" />
        <div className="absolute inset-0 flex items-center justify-center text-ivory/15">
          <span className="font-mono text-xs tracking-[0.3em] uppercase">
            hero-reel.mp4
          </span>
        </div>
      </div>

      <div className="relative z-10 flex w-full flex-col gap-10 px-6 pb-16 sm:px-10 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-serif text-[15vw] leading-[0.92] tracking-tight sm:text-[9vw]">
            WE MAKE
            <br />
            BRANDS LOOK
            <br />
            <span className="italic">GOOD.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-ivory/70">
            Photo · Video · Social
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/work"
              className="border border-ivory px-6 py-3 text-xs tracking-[0.15em] uppercase transition-colors hover:bg-ivory hover:text-ink"
            >
              View Our Work
            </Link>
            <Link
              href="/work-with-us"
              className="px-6 py-3 text-xs tracking-[0.15em] uppercase text-ivory/70 underline underline-offset-4 transition-colors hover:text-ivory"
            >
              Work With Us
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute right-6 bottom-6 hidden flex-col items-center gap-2 sm:right-10 sm:flex"
      >
        <span className="h-12 w-px bg-ivory/40" />
        <span className="text-[10px] tracking-[0.2em] uppercase text-ivory/50">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
