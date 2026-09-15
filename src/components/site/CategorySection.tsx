import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { productCategories } from "@/data/products";
import { CategoryTile } from "./products/CategoryTile";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function CategorySection() {
  return (
    <section id="categories" className="bg-secondary/60 scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Product Range"
          title="Explore Our Products"
          description="Reliable products for construction, electrical, industrial and commercial requirements."
          align="center"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories
            .filter((c) => c.featured)
            .slice(0, 6)
            .map((c, i) => (
            <Reveal key={c.id} delay={i * 90} className="h-full">
              <CategoryTile category={c} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={160} className="mt-12 flex justify-center">
          <Link
            to="/products"
            className="bg-primary text-primary-foreground hover:shadow-lift inline-flex h-12 items-center gap-2 rounded-md px-7 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5"
          >
            View All Products
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
