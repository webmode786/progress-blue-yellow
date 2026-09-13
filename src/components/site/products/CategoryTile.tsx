import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ProductCategory } from "@/data/products";
import { productCount } from "@/data/products";

export function CategoryTile({ category }: { category: ProductCategory }) {
  const count = productCount(category.slug);

  return (
    <article className="border-border bg-card hover:shadow-lift group flex h-full flex-col overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-1">
      <Link
        to="/products/$category"
        params={{ category: category.slug }}
        className="relative block aspect-[16/10] overflow-hidden"
        aria-label={`View ${category.name} products`}
      >
        <img
          src={category.image}
          alt={`${category.name} supplied by Skyline Building Material & Electrical Trading`}
          loading="lazy"
          decoding="async"
          width={1200}
          height={900}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
        />
        <span
          aria-hidden="true"
          className="bg-accent absolute bottom-0 left-0 h-1 w-0 transition-[width] duration-500 group-hover:w-full"
        />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold">{category.name}</h3>
          <span className="bg-secondary text-secondary-foreground shrink-0 rounded-full px-3 py-1 text-xs font-semibold">
            {count} {count === 1 ? "product" : "products"}
          </span>
        </div>
        <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
          {category.shortDescription}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {category.subcategories.slice(0, 4).map((s) => (
            <li
              key={s.id}
              className="border-border text-muted-foreground rounded-full border px-2.5 py-1 text-[0.7rem] font-medium"
            >
              {s.name}
            </li>
          ))}
          {category.subcategories.length > 4 ? (
            <li className="text-muted-foreground px-1 py-1 text-[0.7rem] font-semibold">
              +{category.subcategories.length - 4} more
            </li>
          ) : null}
        </ul>

        <Link
          to="/products/$category"
          params={{ category: category.slug }}
          className="text-primary mt-6 inline-flex items-center gap-2 self-start text-sm font-bold"
        >
          {category.ctaLabel}
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
}
