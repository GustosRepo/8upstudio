export type MediaKind = "image" | "video";

export type Media = {
  kind: MediaKind;
  src: string;
  poster?: string;
  alt: string;
  ratio: "portrait" | "landscape" | "square" | "vertical-video" | "cinematic";
};

export type Metric = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  client: string;
  title: string;
  categories: ("Photo" | "Video" | "Social" | "Events" | "Brands")[];
  cover: Media;
  gallery: Media[];
  description?: string;
  services?: string[];
  metrics?: Metric[];
};

export type ServiceFamily = {
  slug: string;
  index: string;
  name: string;
  headline: string;
  copy: string;
  offerings: string[];
  cta: string;
  media: Media;
};

export type CaseStudy = {
  slug: string;
  client: string;
  summary: string;
  services: string[];
  metrics: Metric[];
  cover: Media;
  gallery: Media[];
};
