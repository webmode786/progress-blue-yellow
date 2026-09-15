import { Link } from "@tanstack/react-router";
import { featuredProducts } from "@/data/products";
import { ProductTile } from "./products/ProductTile";
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
            <Link
              to="/products"
              className="border-border text-foreground hover:border-accent inline-flex h-11 items-center rounded-md border px-5 text-sm font-semibold transition-colors duration-300"
            >
              Browse All Products
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.slice(0, 8).map((p, i) => (
            <Reveal key={p.id} delay={i * 90} className="h-full">
              <ProductTile product={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
