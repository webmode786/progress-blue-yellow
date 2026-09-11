import {
  BadgeCheck,
  Truck,
  LayoutGrid,
  Scale,
  Headset,
  Users,
  type LucideIcon,
} from "lucide-react";
import { whyChoose } from "@/data/catalog";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const icons: Record<string, LucideIcon> = {
  BadgeCheck,
  Truck,
  LayoutGrid,
  Scale,
  Headset,
  Users,
};

export function WhyChoose() {
  return (
    <section id="why-us" className="bg-background scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Skyline"
          title={title}
          description="A supply partner built around reliability, range and responsive service."
          align="center"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((item, i) => {
            const Icon = icons[item.icon] ?? BadgeCheck;
            return (
              <Reveal key={item.id} delay={i * 90} className="h-full">
                <article className="border-border bg-card hover:border-accent hover:shadow-lift group h-full rounded-xl border p-7 transition-all duration-500 hover:-translate-y-1">
                  <span className="bg-secondary text-primary group-hover:bg-accent group-hover:text-accent-foreground inline-flex h-12 w-12 items-center justify-center rounded-lg transition-colors duration-500">
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
