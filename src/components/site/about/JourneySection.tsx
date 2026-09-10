import { milestones } from "@/data/about";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";

/** Renders nothing until real milestones are added to src/data/about.ts. */
export function JourneySection() {
  if (milestones.length === 0) return null;

  return (
    <section className="bg-secondary/60 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Milestones" title="Our Journey" align="center" />

        <ol className="border-border relative mt-14 space-y-10 border-l pl-8">
          {milestones.map((m, i) => (
            <Reveal key={m.id} delay={i * 90} as="li" className="relative">
              <span
                aria-hidden="true"
                className="bg-accent absolute top-1.5 -left-[2.15rem] h-3 w-3 rounded-full ring-4 ring-[var(--color-background)]"
              />
              <div className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
                {m.year}
              </div>
              <h3 className="mt-2 text-lg font-bold">{m.title}</h3>
              <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                {m.description}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
