"use client";

import { usePathname } from "next/navigation";
import { MotionConfig } from "motion/react";
import { Header } from "./Header";
import { Footer } from "./Footer";

/** Keeps the marketing chrome off the intentionally minimal /admin routes. */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) return <>{children}</>;

  return (
    <MotionConfig reducedMotion="user">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </MotionConfig>
  );
}
