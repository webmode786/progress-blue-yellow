import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: Props) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <div
          className={cn(
            "mb-4 flex items-center gap-3 text-xs font-semibold tracking-[0.22em] uppercase",
            align === "center" && "justify-center",
            tone === "dark" ? "text-accent" : "text-primary",
          )}
        >
          <span className="bg-accent h-0.5 w-8" aria-hidden="true" />
          {eyebrow}
        </div>
      ) : null}
      <h2
        className={cn(
          "text-3xl leading-[1.1] font-bold text-balance sm:text-4xl lg:text-[2.75rem]",
          tone === "dark" ? "text-primary-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-primary-foreground/75" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
