import {
  Zap,
  Blocks,
  Droplets,
  HardHat,
  Factory,
  Check,
  type LucideIcon,
} from "lucide-react";
import { supplyAreas } from "@/data/about";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";

const icons: Record<string, LucideIcon> = {
  Zap,
  Bricks: Blocks,
  Blocks,
  Droplets,
  HardHat,
  Factory,
};

export function SupplySection() {
  return (
    <section id="what-we-supply" className="bg-secondary/60 scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Product Areas"
          title="What We Supply"
          description="A growing range of products for construction, electrical and project requirements."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {supplyAreas.map((area, i) => {
            const Icon = icons[area.icon] ?? Blocks;
            return (
              <Reveal key={area.id} delay={i * 80} className="h-full">
                <article className="border-border bg-card hover:border-accent hover:shadow-lift group h-full rounded-xl border p-7 transition-all duration-500 hover:-translate-y-1">
                  <span className="bg-secondary text-primary group-hover:bg-accent group-hover:text-accent-foreground inline-flex h-12 w-12 items-center justify-center rounded-lg transition-all duration-500 group-hover:-translate-y-0.5">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{area.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {area.items.map((item) => (
                      <li
                        key={item}
                        className="text-muted-foreground flex items-start gap-2 text-sm"
                      >
                        <Check
                          className="text-accent mt-0.5 h-4 w-4 shrink-0"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
