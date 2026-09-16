import { Media } from "@/data/types";
import { cn } from "@/lib/utils";

const ratioClass: Record<Media["ratio"], string> = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[16/9]",
  square: "aspect-square",
  "vertical-video": "aspect-[9/16]",
  cinematic: "aspect-[21/9]",
};

type MediaPlaceholderProps = {
  media: Media;
  className?: string;
  labelPosition?: "bottom" | "center";
};

/** Renders a labeled placeholder box until real A6700 footage replaces it. */
export function MediaPlaceholder({
  media,
  className,
  labelPosition = "bottom",
}: MediaPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-linear-to-br from-ink/90 via-ink to-ink/80",
        ratioClass[media.ratio],
        className
      )}
    >
      <div className="absolute inset-0 flex flex-col justify-between p-4 text-ivory/70">
        <span className="text-[10px] tracking-[0.2em] uppercase">
          {media.kind === "video" ? "Video Placeholder" : "Image Placeholder"}
        </span>
        <div
          className={cn(
            "flex flex-col gap-1",
            labelPosition === "center" &&
              "flex-1 items-center justify-center text-center"
          )}
        >
          <span className="font-serif text-lg text-ivory/90">{media.alt}</span>
          <span className="font-mono text-[11px] text-ivory/70">{media.src}</span>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 border border-ivory/10" />
    </div>
  );
}
