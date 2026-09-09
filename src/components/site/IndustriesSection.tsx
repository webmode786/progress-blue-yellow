import {
  HardHat,
  Zap,
  Wrench,
  Building2,
  ClipboardList,
  Store,
  Factory,
  Hammer,
  type LucideIcon,
} from "lucide-react";
import { industries } from "@/data/catalog";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const icons: Record<string, LucideIcon> = {
  HardHat,
  Zap,
  Wrench,
  Building2,
  ClipboardList,
  Store,
  Factory,
  Hammer,
};

export function IndustriesSection() {
  return (
    <section id="industries" className="bg-background scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Who We Serve"
          title="Industries We Supply"
          description="Supporting teams across construction, contracting, facilities and commercial projects."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border-border border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => {
            const Icon = icons[ind.icon] ?? HardHat;
            return (
              <Reveal key={ind.id} delay={i * 70} className="h-full">
                <article className="bg-card hover:bg-secondary/70 group h-full p-7 transition-colors duration-500">
                  <Icon
                    className="text-primary group-hover:text-accent h-7 w-7 transition-colors duration-500"
                    aria-hidden="true"
                  />
                  <h3 className="mt-5 text-base font-bold">{ind.name}</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    {ind.description}
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
