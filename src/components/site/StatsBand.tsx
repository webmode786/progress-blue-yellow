import { stats } from "@/data/catalog";
import { Reveal } from "./Reveal";

export function StatsBand() {
  return (
    <section
      className="relative overflow-hidden py-16"
      style={{ background: "var(--gradient-brand)" }}
    >
      <div
        aria-hidden="true"
        className="bg-accent/15 float-slow absolute -bottom-24 left-[-4rem] h-64 w-64 rounded-full blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((s, i) => (
          <Reveal key={s.id} delay={i * 110} className="text-center">
            <div className="text-accent font-display text-4xl font-extrabold sm:text-5xl">
              {s.value ?? s.placeholder}
            </div>
            <div className="text-primary-foreground/80 mt-2 text-xs font-semibold tracking-[0.18em] uppercase">
              {s.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
