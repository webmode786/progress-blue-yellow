import { Link } from "@tanstack/react-router";
import { ArrowUpRight, FileText } from "lucide-react";
import type { Product } from "@/data/products";
import { quoteLinkFor } from "@/data/company";
import { ProductImage } from "./ProductImage";

export function ProductTile({ product }: { product: Product }) {
  return (
    <article className="border-border bg-card hover:shadow-lift group flex h-full flex-col overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-1">
      <Link
        to="/products/$category/$product"
        params={{ category: product.categorySlug, product: product.slug }}
        className="bg-secondary relative block aspect-[4/3] overflow-hidden"
        aria-label={`View details for ${product.name}`}
      >
        <ProductImage
          product={product}
          className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <span className="text-primary text-[0.68rem] font-bold tracking-[0.16em] uppercase">
          {product.categoryName}
        </span>
        <h3 className="mt-2 text-base leading-snug font-bold sm:text-lg">
          <Link
            to="/products/$category/$product"
            params={{ category: product.categorySlug, product: product.slug }}
            className="hover:text-primary transition-colors duration-300"
          >
            {product.name}
          </Link>
        </h3>
        <span className="text-muted-foreground mt-1 text-xs font-medium">
          {product.subcategoryName}
          {product.productCode ? ` · ${product.productCode}` : ""}
          {product.brand ? ` · ${product.brand}` : ""}
        </span>
        <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
          {product.shortDescription}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-2 pt-1">
          <Link
            to="/products/$category/$product"
            params={{ category: product.categorySlug, product: product.slug }}
            className="border-border hover:border-accent inline-flex h-9 items-center gap-1 rounded-md border px-3 text-xs font-bold transition-colors duration-300"
          >
            View Details
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
          <a
            href={quoteLinkFor(product)}
            className="bg-accent text-accent-foreground inline-flex h-9 items-center gap-1.5 rounded-md px-3 text-xs font-bold transition-transform duration-300 hover:-translate-y-0.5"
          >
            <FileText className="h-3.5 w-3.5" aria-hidden="true" />
            Request a Quote
          </a>
        </div>
      </div>
    </article>
  );
}
