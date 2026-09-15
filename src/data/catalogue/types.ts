/**
 * Shared input types for the Skyline catalogue source files.
 *
 * Each `NN-<slug>.ts` file in this folder transcribes one category of the
 * printed Skyline Product Catalogue 2026 into structured data. The aggregator
 * in `src/data/products.ts` turns these inputs into the runtime Product model.
 *
 * Rules for these files:
 * - Only information supported by the catalogue. Never invent specs, codes,
 *   brands, certifications or dimensions.
 * - One product per real product. Sizes / colours / packaging variations of the
 *   same product belong in `sizes` or `options`, never as separate products.
 */

export type SubcategoryInput = {
  name: string;
  slug: string;
  description?: string;
};

export type ProductInput = {
  name: string;
  slug: string;
  /** Slug of the subcategory this product sits under. */
  subcategory: string;
  /** Catalogue product / model reference, e.g. "YSLY-JZ". */
  productCode?: string;
  brands?: string[];
  shortDescription: string;
  description?: string;
  features?: string[];
  specifications?: { label: string; value: string }[];
  /** Available sizes, ratings or configurations of the SAME product. */
  sizes?: string[];
  material?: string;
  colour?: string;
  packaging?: string;
  applications?: string[];
  standards?: string[];
  keywords?: string[];
  featured?: boolean;
};

export type CategoryInput = {
  /** Catalogue number, e.g. "01". */
  number: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  subcategories: SubcategoryInput[];
  products: ProductInput[];
};
