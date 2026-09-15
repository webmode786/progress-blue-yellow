import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Product } from "@/data/catalog";
import { quoteLinkFor } from "@/data/company";
import { ProductImage } from "@/components/site/products/ProductImage";

export function ProductCard({ product }: { product: Product }) {
  const categoryName = product.categoryName;

  return (
    <article className="border-border bg-card hover:shadow-lift group flex h-full flex-col overflow-hidden rounded-xl border transition-all duration-500 hover:-translate-y-1.5">
      <Link
        to="/products/$category/$product"
        params={{ category: product.categorySlug, product: product.slug }}
        className="bg-secondary relative block aspect-square overflow-hidden"
        aria-label={`View details for ${product.name}`}
      >
        <ProductImage
          product={product}
          className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <span className="text-primary text-[0.68rem] font-bold tracking-[0.16em] uppercase">
          {categoryName}
        </span>
        <h3 className="mt-2 text-lg leading-snug font-bold">{product.name}</h3>
        {product.brand ? (
          <span className="text-muted-foreground mt-1 text-xs font-medium">
            {product.brand}
          </span>
        ) : null}
        <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
          {product.shortDescription}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-3 pt-1">
          <a
            href="#enquiry"
            className="bg-accent text-accent-foreground inline-flex h-9 items-center rounded-md px-4 text-xs font-bold transition-transform duration-300 hover:-translate-y-0.5"
          >
            Request Quote
          </a>
          <a
            href="#enquiry"
            className="text-primary inline-flex items-center gap-1 text-xs font-bold"
          >
            View Product
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </article>
  );
}
