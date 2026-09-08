import { categories } from "@/data/catalog";
import { CategoryCard } from "./CategoryCard";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function CategorySection() {
  return (
    <section id="categories" className="bg-secondary/60 scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Product Range"
          title="Explore Our Product Range"
          description="Reliable products for construction, electrical, industrial and commercial requirements."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {categories.map((c, i) => (
            <Reveal key={c.id} delay={i * 150} className="h-full">
              <CategoryCard category={c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
