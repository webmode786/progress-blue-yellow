import { cn } from "@/lib/utils";
import { company } from "@/data/company";

/**
 * Text logo placeholder — swap the inner markup for an <img> when the
 * real logo file is supplied. Keeps sizing/colour contract identical.
 */
export function Logo({
  tone = "dark",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <span
        aria-hidden="true"
        className="bg-accent flex h-9 w-9 shrink-0 items-center justify-center rounded-[6px]"
      >
        <span className="text-accent-foreground font-display text-lg leading-none font-extrabold">
          S
        </span>
      </span>
      <span className="leading-none">
        <span
          className={cn(
            "font-display block text-[0.95rem] font-extrabold tracking-tight sm:text-base",
            tone === "light" ? "text-primary-foreground" : "text-foreground",
          )}
        >
          SKYLINE
        </span>
        <span
          className={cn(
            "mt-1 block text-[0.58rem] font-semibold tracking-[0.18em] uppercase",
            tone === "light" ? "text-primary-foreground/70" : "text-muted-foreground",
          )}
        >
          Building Material Trading
        </span>
      </span>
      <span className="sr-only">{company.name}</span>
    </span>
  );
}
