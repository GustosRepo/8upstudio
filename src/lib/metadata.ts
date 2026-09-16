import type { Metadata } from "next";
import { site } from "@/data/site";

export const siteKeywords = [
  "Las Vegas content creator",
  "Las Vegas brand photography",
  "Las Vegas videographer",
  "Las Vegas social media content",
  "Las Vegas social media management",
  "Las Vegas business content creation",
  "Las Vegas event content",
  "Las Vegas short-form video",
];

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
};

/** Shared per-page metadata builder so title/OG/Twitter/canonical stay in sync. */
export function buildMetadata({ title, description, path, noIndex }: BuildMetadataInput): Metadata {
  const url = `${site.url}${path}`;
  const ogImage = `${site.url}/api/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    keywords: siteKeywords,
    openGraph: {
      title: `${title} — ${site.name}`,
      description,
      url,
      siteName: site.name,
      locale: "en_US",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${site.name}`,
      description,
      images: [ogImage],
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}
