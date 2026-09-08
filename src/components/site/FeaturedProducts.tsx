import { products } from "@/data/catalog";
import { ProductCard } from "./ProductCard";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function FeaturedProducts() {
  return (
    <section id="products" className="bg-background scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Selected Items"
            title="Featured Products"
            description="A sample of the product types we supply. Full ranges and options are confirmed on enquiry."
            className="max-w-xl"
          />
          <Reveal delay={120}>
            <a
              href="#enquiry"
              className="border-border text-foreground hover:border-accent inline-flex h-11 items-center rounded-md border px-5 text-sm font-semibold transition-colors duration-300"
            >
              Request a Quote
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={i * 110} className="h-full">
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
