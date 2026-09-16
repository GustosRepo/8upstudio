"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { primaryNav, inquireNav } from "@/data/navigation";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-ivory/10 bg-ink/90 backdrop-blur-md"
          : "bg-gradient-to-b from-ink/50 to-transparent"
      )}
    >
      <div className="flex items-center justify-between px-6 py-5 text-ivory sm:px-10">
        <Link href="/" className="font-serif text-xl tracking-tight">
          {site.shortName}
        </Link>

        <nav className="hidden items-center gap-8 text-xs tracking-[0.15em] uppercase sm:flex">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="transition-opacity hover:opacity-60">
              {item.label}
            </Link>
          ))}
          <Link
            href={inquireNav.href}
            className="border border-ivory px-4 py-2 transition-colors hover:bg-ivory hover:text-ink"
          >
            {inquireNav.label}
          </Link>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="-m-3 flex flex-col gap-1.5 p-3 sm:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`h-px w-6 bg-ivory transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-ivory transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col gap-6 bg-ink px-6 pb-8 text-ivory sm:hidden"
          >
            {[...primaryNav, inquireNav].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-serif text-2xl"
              >
                {item.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
