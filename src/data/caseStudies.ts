import { CaseStudy } from "./types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "702-market",
    client: "702 Market",
    summary:
      "702 Market needed consistent, high-quality content across a full calendar of live events without an internal creative team. 8UP became the recurring photo, video, and social partner behind the brand.",
    services: ["Event Coverage", "Photo", "Video", "Social"],
    metrics: [
      { label: "Events Covered", value: "7" },
      { label: "Organic Views", value: "50K+" },
      { label: "Ad Spend", value: "$0" },
    ],
    cover: {
      kind: "video",
      src: "/media/702market-hero.mp4",
      poster: "/media/702market-hero.jpg",
      alt: "702 Market case study cover",
      ratio: "cinematic",
    },
    gallery: [
      {
        kind: "video",
        src: "/media/702market-reel-01.mp4",
        poster: "/media/702market-reel-01-poster.jpg",
        alt: "702 Market vertical reel",
        ratio: "vertical-video",
      },
      {
        kind: "image",
        src: "/media/702market-hero.jpg",
        alt: "702 Market storefront",
        ratio: "landscape",
      },
    ],
  },
];
