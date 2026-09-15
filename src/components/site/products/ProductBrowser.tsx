import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import {
  productCategories,
  searchProducts,
  type Product,
} from "@/data/products";
import { ProductTile } from "./ProductTile";

type Props = {
  /** Products to browse — defaults to the full catalogue. */
  items: Product[];
  /** Hide the category filter on a single-category page. */
  showCategoryFilter?: boolean;
  /** How many products to show before "Load more". */
  pageSize?: number;
};

const selectClass =
  "border-border bg-background focus:border-primary h-11 w-full rounded-md border px-3 text-sm outline-none transition-colors duration-300";

export function ProductBrowser({
  items,
  showCategoryFilter = true,
  pageSize = 12,
}: Props) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");
  const [visible, setVisible] = useState(pageSize);

  const subOptions = useMemo(() => {
    const scope = category
      ? items.filter((p) => p.categorySlug === category)
      : items;
    const seen = new Map<string, string>();
    scope.forEach((p) => seen.set(p.subcategory, p.subcategoryName));
    return [...seen].map(([slug, name]) => ({ slug, name }));
  }, [items, category]);

  const typeOptions = useMemo(
    () => [...new Set(items.map((p) => p.productType))].sort(),
    [items],
  );

  const brandOptions = useMemo(
    () => [...new Set(items.flatMap((p) => p.brands))].sort(),
    [items],
  );

  const results = useMemo(() => {
    let list = items;
    if (category) list = list.filter((p) => p.categorySlug === category);
    if (subcategory) list = list.filter((p) => p.subcategory === subcategory);
    if (type) list = list.filter((p) => p.productType === type);
    if (brand) list = list.filter((p) => p.brands.includes(brand));
    return searchProducts(query, list);
  }, [items, category, subcategory, type, brand, query]);

  const shown = results.slice(0, visible);
  const hasFilters = Boolean(query || category || subcategory || type || brand);

  function reset() {
    setQuery("");
    setCategory("");
    setSubcategory("");
    setType("");
    setBrand("");
    setVisible(pageSize);
  }

  return (
    <div>
      <div className="border-border bg-card rounded-xl border p-4 sm:p-5">
        <div className="grid gap-3 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div className="relative">
            <Search
              className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2"
              aria-hidden="true"
            />
            <label htmlFor="product-search" className="sr-only">
              Search products
            </label>
            <input
              id="product-search"
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setVisible(pageSize);
              }}
              placeholder="Search products..."
              className="border-border bg-background focus:border-primary h-11 w-full rounded-md border pr-3 pl-9 text-sm outline-none transition-colors duration-300"
            />
          </div>

          {showCategoryFilter ? (
            <div>
              <label htmlFor="filter-category" className="sr-only">
                Filter by category
              </label>
              <select
                id="filter-category"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setSubcategory("");
                  setVisible(pageSize);
                }}
                className={selectClass}
              >
                <option value="">All categories</option>
                {productCategories.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          ) : null}

          <div>
            <label htmlFor="filter-subcategory" className="sr-only">
              Filter by subcategory
            </label>
            <select
              id="filter-subcategory"
              value={subcategory}
              onChange={(e) => {
                setSubcategory(e.target.value);
                setVisible(pageSize);
              }}
              className={selectClass}
            >
              <option value="">All subcategories</option>
              {subOptions.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="filter-type" className="sr-only">
              Filter by product type
            </label>
            <select
              id="filter-type"
              value={type}
              onChange={(e) => {
                setType(e.target.value);
                setVisible(pageSize);
              }}
              className={selectClass}
            >
              <option value="">All product types</option>
              {typeOptions.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
          <p className="text-muted-foreground text-sm" role="status">
            Showing {shown.length} of {results.length} products
          </p>
          {hasFilters ? (
            <button
              type="button"
              onClick={reset}
              className="text-primary inline-flex items-center gap-1 text-sm font-semibold"
            >
              <X className="h-3.5 w-3.5" aria-hidden="true" />
              Clear filters
            </button>
          ) : null}
        </div>
      </div>

      {results.length === 0 ? (
        <div className="border-border mt-10 rounded-xl border border-dashed p-10 text-center">
          <h3 className="text-lg font-bold">No products match your search</h3>
          <p className="text-muted-foreground mt-2 text-sm">
            Try a different keyword or clear the filters — and if you can't find an
            item, send us the requirement and we'll source it.
          </p>
        </div>
      ) : (
        <>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {shown.map((p) => (
              <ProductTile key={p.id} product={p} />
            ))}
          </div>

          {visible < results.length ? (
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setVisible((v) => v + pageSize)}
                className="border-border hover:border-accent inline-flex h-11 items-center rounded-md border px-6 text-sm font-bold transition-colors duration-300"
              >
                Load more products
              </button>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}
