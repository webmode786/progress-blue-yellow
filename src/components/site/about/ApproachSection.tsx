import { BadgeCheck, Truck, Users, Headset, type LucideIcon } from "lucide-react";
import { approach } from "@/data/about";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";

const icons: Record<string, LucideIcon> = { BadgeCheck, Truck, Users, Headset };

export function ApproachSection() {
  return (
    <section className="bg-secondary/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How We Work"
          title="Our Approach"
          description="We believe successful projects start with the right products and the right supply partner."
          align="center"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {approach.map((item, i) => {
            const Icon = icons[item.icon] ?? BadgeCheck;
            return (
              <Reveal key={item.id} delay={i * 90} className="h-full">
                <article className="border-border bg-card hover:border-accent hover:shadow-lift group relative h-full overflow-hidden rounded-xl border p-7 transition-all duration-500 hover:-translate-y-1">
                  <span
                    aria-hidden="true"
                    className="bg-accent absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  />
                  <span className="bg-secondary text-primary group-hover:bg-accent group-hover:text-accent-foreground inline-flex h-12 w-12 items-center justify-center rounded-lg transition-all duration-500 group-hover:-translate-y-0.5">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    {item.description}
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
