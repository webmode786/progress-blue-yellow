import { ImageIcon } from "lucide-react";
import type { Product } from "@/data/products";
import { cn } from "@/lib/utils";

type Props = {
  product: Product;
  className?: string | undefined;
  /** Hero images on detail pages load eagerly. */
  priority?: boolean | undefined;
};

/**
 * Renders a product photograph when one is available, otherwise a clearly
 * marked placeholder — never an unrelated stock image.
 */
export function ProductImage({ product, className, priority = false }: Props) {
  if (!product.image) {
    return (
      <div
        className={cn(
          "bg-secondary text-muted-foreground flex flex-col items-center justify-center gap-2 px-4 text-center",
          className,
        )}
        role="img"
        aria-label={`Product image for ${product.name} is available on request`}
      >
        <ImageIcon className="text-primary/50 h-7 w-7" aria-hidden="true" />
        <span className="text-[0.62rem] font-bold tracking-[0.16em] uppercase">
          Image on request
        </span>
      </div>
    );
  }

  return (
    <img
      src={product.image}
      alt={`${product.name} — ${product.subcategoryName} supplied by Skyline`}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      width={1200}
      height={900}
      className={cn("h-full w-full object-cover", className)}
    />
  );
}
