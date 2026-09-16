import { WorkGrid } from "@/components/work/WorkGrid";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Work",
  description:
    "Photo, video, and social content for Las Vegas brands and events by 8UP Studio.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <div className="px-6 pt-32 pb-28 sm:px-10 sm:pt-40 sm:pb-40">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs tracking-[0.2em] uppercase text-ink/65">Work</p>
        <h1 className="mt-4 font-serif text-5xl tracking-tight sm:text-7xl">
          Selected Projects
        </h1>

        <div className="mt-16">
          <WorkGrid />
        </div>
      </div>
    </div>
  );
}
