import { cn } from "@/lib/utils";

type SectionLabelProps = {
  index: string;
  label: string;
  className?: string;
  light?: boolean;
};

export function SectionLabel({ index, label, className, light }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-xs tracking-[0.2em] uppercase",
        light ? "text-ivory/60" : "text-ink/50",
        className
      )}
    >
      <span className="font-serif italic">{index}</span>
      <span className="h-px w-6 bg-current" />
      {label}
    </p>
  );
}
