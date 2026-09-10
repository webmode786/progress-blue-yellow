import { Target } from "lucide-react";
import { Reveal } from "../Reveal";

export function MissionSection() {
  return (
    <section
      className="relative overflow-hidden py-20 sm:py-28"
      style={{ background: "var(--gradient-brand)" }}
    >
      {/* Blueprint-inspired grid + drifting accent glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        aria-hidden="true"
        className="bg-accent/20 float-slow absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <span className="border-accent/40 text-accent inline-flex h-14 w-14 items-center justify-center rounded-full border">
            <Target className="h-7 w-7" aria-hidden="true" />
          </span>
          <div className="text-accent mt-6 text-xs font-semibold tracking-[0.28em] uppercase">
            Our Mission
          </div>
          <h2 className="text-primary-foreground font-display mt-4 text-3xl leading-[1.12] font-extrabold text-balance sm:text-4xl">
            To Make Quality Products Easier to Source
          </h2>
          <p className="text-primary-foreground/80 mt-5 text-base leading-relaxed sm:text-lg">
            Our mission is to provide customers with access to reliable building
            materials, electrical products and related solutions while delivering
            responsive and professional service.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
