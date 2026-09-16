import { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "702-market",
    client: "702 Market",
    title: "702 Market",
    categories: ["Photo", "Video", "Social", "Events", "Brands"],
    cover: {
      kind: "video",
      src: "/media/702market-hero.mp4",
      poster: "/media/702market-hero.jpg",
      alt: "702 Market event coverage",
      ratio: "cinematic",
    },
    gallery: [
      {
        kind: "image",
        src: "/media/702market-hero.jpg",
        alt: "702 Market storefront",
        ratio: "landscape",
      },
      {
        kind: "video",
        src: "/media/702market-reel-01.mp4",
        poster: "/media/702market-reel-01-poster.jpg",
        alt: "702 Market vertical reel",
        ratio: "vertical-video",
      },
    ],
    description:
      "Ongoing event, brand, and social content for one of Las Vegas's most active local markets.",
    services: ["Event Coverage", "Photo", "Video", "Social"],
    metrics: [
      { label: "Events Covered", value: "7" },
      { label: "Organic Views", value: "50K+" },
      { label: "Ad Spend", value: "$0" },
    ],
  },
  {
    slug: "brand-refresh",
    client: "Local Brand",
    title: "Brand Content Refresh",
    categories: ["Photo", "Brands"],
    cover: {
      kind: "image",
      src: "/media/brand-photo-01.jpg",
      alt: "Brand refresh photography",
      ratio: "portrait",
    },
    gallery: [
      {
        kind: "image",
        src: "/media/brand-photo-02.jpg",
        alt: "Brand refresh photography detail",
        ratio: "portrait",
      },
    ],
    description: "A full brand photography refresh built for social-first use.",
    services: ["Brand Photography"],
  },
  {
    slug: "event-coverage",
    client: "Community Event",
    title: "Live Event Coverage",
    categories: ["Video", "Events", "Social"],
    cover: {
      kind: "video",
      src: "/media/event-video-01.mp4",
      poster: "/media/event-video-01-poster.jpg",
      alt: "Event coverage video",
      ratio: "cinematic",
    },
    gallery: [
      {
        kind: "image",
        src: "/media/portrait-01.jpg",
        alt: "Event portrait",
        ratio: "portrait",
      },
    ],
    description: "Full-day event coverage cut into short-form recap content.",
    services: ["Event Coverage", "Video", "Social"],
  },
];
