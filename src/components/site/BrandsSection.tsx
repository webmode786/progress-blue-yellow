import { ArrowRight } from "lucide-react";
import { brands } from "@/data/catalog";
import { routes } from "@/data/company";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

type Props = {
  title?: string;
  description?: string;
  showExplore?: boolean;
};

export function BrandsSection({
  title = "Trusted Brands We Work With",
  description = "We partner with leading brands to provide reliable, high-quality electrical and building material solutions for our customers.",
  showExplore = false,
}: Props) {
  return (
    <section id="brands" className="bg-secondary/60 scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Partners"
          title={title}
          description={description}
          align="center"
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {brands.map((b, i) => (
            <Reveal key={b.id} delay={i * 70} className="h-full">
              <div className="border-border bg-card hover:border-accent group flex h-24 items-center justify-center rounded-lg border transition-colors duration-500">
                {b.logo ? (
                  <img
                    src={b.logo}
                    alt={`${b.name} logo`}
                    loading="lazy"
                    decoding="async"
                    className="max-h-10 w-auto opacity-80 grayscale transition duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                ) : (
                  <span className="text-muted-foreground group-hover:text-primary text-sm font-semibold tracking-wide transition-colors duration-500">
                    {b.name}
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {showExplore ? (
          <Reveal delay={120} className="mt-10 text-center">
            <a
              href={routes.products}
              className="text-primary hover:text-accent inline-flex items-center gap-2 text-sm font-bold transition-colors duration-300"
            >
              Explore Products
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
