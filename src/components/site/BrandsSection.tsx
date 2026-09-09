import { brands } from "@/data/catalog";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function BrandsSection() {
  return (
    <section id="brands" className="bg-secondary/60 scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Partners"
          title="Brands We Work With"
          description="Brand partners are being confirmed and will be listed here."
          align="center"
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {brands.map((b, i) => (
            <Reveal key={b.id} delay={i * 70} className="h-full">
              <div className="border-border bg-card hover:border-accent flex h-24 items-center justify-center rounded-lg border transition-colors duration-500">
                {b.logo ? (
                  <img
                    src={b.logo}
                    alt={`${b.name} logo`}
                    loading="lazy"
                    decoding="async"
                    className="max-h-10 w-auto opacity-80"
                  />
                ) : (
                  <span className="text-muted-foreground text-sm font-semibold tracking-wide">
                    {b.name}
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
