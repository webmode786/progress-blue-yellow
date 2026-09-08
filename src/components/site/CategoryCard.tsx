import { ArrowRight } from "lucide-react";
import type { Category } from "@/data/catalog";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <article className="border-border bg-card hover:shadow-lift group relative flex h-full flex-col overflow-hidden rounded-xl border transition-all duration-500 hover:-translate-y-1.5">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={category.image}
          alt={`${category.name} products supplied by Skyline Building Material Trading`}
          loading="lazy"
          decoding="async"
          width={1200}
          height={912}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
        />
        <span
          aria-hidden="true"
          className="bg-primary/0 group-hover:bg-primary/25 absolute inset-0 transition-colors duration-500"
        />
        <span
          aria-hidden="true"
          className="bg-accent absolute bottom-0 left-0 h-1 w-0 transition-[width] duration-500 group-hover:w-full"
        />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <h3 className="text-2xl font-bold">{category.name}</h3>
        <p className="text-muted-foreground mt-2 text-sm leading-relaxed sm:text-base">
          {category.shortDescription}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {category.subcategories.slice(0, 6).map((s) => (
            <li
              key={s.id}
              className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-xs font-medium"
            >
              {s.name}
            </li>
          ))}
          {category.subcategories.length > 6 ? (
            <li className="text-muted-foreground px-2 py-1 text-xs font-semibold">
              +{category.subcategories.length - 6} more
            </li>
          ) : null}
        </ul>

        <a
          href="#enquiry"
          className="text-primary mt-8 inline-flex items-center gap-2 self-start text-sm font-bold"
        >
          {category.ctaLabel}
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </article>
  );
}
