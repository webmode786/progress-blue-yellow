import { ShieldCheck, Gem, Anchor, Handshake, type LucideIcon } from "lucide-react";
import { values } from "@/data/about";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";

const icons: Record<string, LucideIcon> = { ShieldCheck, Gem, Anchor, Handshake };

export function ValuesSection() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Principles"
          title="What We Value"
          align="center"
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border-border border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => {
            const Icon = icons[v.icon] ?? ShieldCheck;
            return (
              <Reveal key={v.id} delay={i * 90} className="h-full">
                <article className="bg-card hover:bg-secondary/70 group h-full p-8 transition-colors duration-500">
                  <span className="text-accent font-display text-sm font-bold tracking-widest">
                    0{i + 1}
                  </span>
                  <Icon
                    className="text-primary group-hover:text-accent mt-5 h-7 w-7 transition-all duration-500 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 text-lg font-bold">{v.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    {v.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
