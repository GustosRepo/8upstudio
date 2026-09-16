import Link from "next/link";
import { footerNav, legalNav } from "@/data/navigation";
import { site, socialLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink px-6 py-16 text-ivory sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <div className="flex flex-col justify-between gap-10 sm:flex-row sm:items-end">
          <div>
            <p className="font-serif text-4xl sm:text-6xl">Let&apos;s make</p>
            <p className="font-serif text-4xl italic sm:text-6xl">something good.</p>
          </div>
          <Link
            href="/work-with-us"
            className="w-fit border border-ivory px-6 py-3 text-xs tracking-[0.15em] uppercase transition-colors hover:bg-ivory hover:text-ink"
          >
            Work With 8UP
          </Link>
        </div>

        <div className="flex flex-col gap-8 border-t border-ivory/15 pt-8 text-xs tracking-[0.1em] uppercase sm:flex-row sm:items-center sm:justify-between">
          <nav className="flex flex-wrap gap-6">
            {footerNav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:opacity-60">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-wrap gap-6">
            {socialLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:opacity-60" target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-ivory/70">
            {site.location} · © {new Date().getFullYear()} {site.name}
          </p>
        </div>

        <div className="flex flex-col gap-4 border-t border-ivory/10 pt-6 text-[10px] tracking-[0.1em] uppercase text-ivory/40 sm:flex-row sm:items-center sm:justify-between">
          <nav className="flex flex-wrap gap-6">
            {legalNav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-ivory/70">
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href="https://code-werx.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-ivory/70"
          >
            Made by CODEWERX
          </a>
        </div>
      </div>
    </footer>
  );
}
