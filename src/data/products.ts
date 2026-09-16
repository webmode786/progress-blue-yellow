/**
 * Central product catalogue for Skyline Building Material Trading FZC.
 *
 * Source of truth: the Skyline Product Catalogue 2026. Each category is
 * transcribed into `src/data/catalogue/NN-<slug>.ts` and assembled here into
 * the runtime model used by every page (listing, category, detail, search).
 *
 * Images: products carry `image: null` until a verified product photograph is
 * available — the UI then shows a clearly marked placeholder rather than an
 * unrelated stock photo. Drop a real image path into `productImages` below to
 * replace a placeholder.
 */

import type { CategoryInput, ProductInput } from "./catalogue/types";

import { category as c01 } from "./catalogue/01-control-screen-specialty-cables";
import { category as c02 } from "./catalogue/02-silicone-high-temperature-cables";
import { category as c03 } from "./catalogue/03-rubber-pvc-armoured-cables";
import { category as c04 } from "./catalogue/04-enclosures-panel-accessories";
import { category as c05 } from "./catalogue/05-cable-termination";
import { category as c06 } from "./catalogue/06-industrial-plugs-sockets-switchgear";
import { category as c07 } from "./catalogue/07-conduit-pipes-wiring-accessories";
import { category as c08 } from "./catalogue/08-cable-management-jointing-led-lighting";
import { category as c09 } from "./catalogue/09-switchgear-protection-control";
import { category as c10 } from "./catalogue/10-lighting-lamps";
import { category as c11 } from "./catalogue/11-fans-ventilation-hvac";
import { category as c12 } from "./catalogue/12-plumbing-pipes-fittings";
import { category as c13 } from "./catalogue/13-sanitaryware-bathroom-water-heating";
import { category as c14 } from "./catalogue/14-hardware-fasteners-fixings";
import { category as c15 } from "./catalogue/15-tools-equipment";
import { category as c16 } from "./catalogue/16-ppe-safety-site-industrial-supplies";
import { category as c17 } from "./catalogue/17-building-materials-paints-chemicals";
import { category as c18 } from "./catalogue/18-earthing-lightning-protection";
import { category as c19 } from "./catalogue/19-networking-communication";

import imgCables from "@/assets/cat-cables-wires.jpg";
import imgControlCable from "@/assets/products/control-cable-ysly-jz.jpg";
import imgSiliconeCable from "@/assets/products/silicone-cable-fg4-2.jpg";
import imgArmouredCable from "@/assets/products/armoured-cables-lv-range.jpg";
import imgMetalEnclosure from "@/assets/products/metal-enclosures.jpg";
import imgBimetallicLugs from "@/assets/products/bimetallic-cable-lugs.jpg";
import imgBwGlands from "@/assets/products/bw-cable-glands.jpg";
import imgMcb from "@/assets/products/miniature-circuit-breaker-mcb.jpg";
import imgPvcConduit from "@/assets/products/electrical-pvc-conduit-pipe.jpg";
import imgContactor from "@/assets/products/magnetic-contactor.jpg";
import imgLedPanel from "@/assets/products/square-recessed-led-panel.jpg";
import imgFloodlight from "@/assets/products/led-floodlight.jpg";
import imgLedBulb from "@/assets/products/led-bulb-e27.jpg";
import imgExhaustFan from "@/assets/products/exhaust-fan-square.jpg";
import imgUpvcPipe from "@/assets/products/upvc-pipe.jpg";
import imgPprPipe from "@/assets/products/ppr-pipe.jpg";
import imgWaterHeater from "@/assets/products/electric-storage-water-heater.jpg";
import imgGiBolt from "@/assets/products/gi-bolt.jpg";
import imgSafetyShoes from "@/assets/products/safety-shoes.jpg";
import imgEarthRod from "@/assets/products/earth-rod.jpg";
import imgRj45 from "@/assets/products/rj45-connector.jpg";
import imgElectrical from "@/assets/cat-electrical.jpg";
import imgElectricalAccessories from "@/assets/cat-electrical-accessories.jpg";
import imgLighting from "@/assets/cat-lighting.jpg";
import imgPlumbing from "@/assets/cat-plumbing.jpg";
import imgHardware from "@/assets/cat-hardware-tools.jpg";
import imgConstruction from "@/assets/cat-construction.jpg";
import imgBuilding from "@/assets/cat-building.jpg";
import imgSafety from "@/assets/cat-safety.jpg";

export type Subcategory = {
  id: string;
  name: string;
  slug: string;
  categorySlug: string;
  description: string | null;
};

export type ProductCategory = {
  id: string;
  /** Catalogue number, e.g. "01". */
  number: string;
  name: string;
  slug: string;
  href: string;
  image: string;
  icon: string;
  shortDescription: string;
  description: string;
  ctaLabel: string;
  featured: boolean;
  subcategories: Subcategory[];
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  /** Category slug — kept as `category` for backwards compatibility. */
  category: string;
  categorySlug: string;
  categoryName: string;
  subcategory: string;
  subcategoryName: string;
  /** Subcategory name, used as the browsable "product type". */
  productType: string;
  productCode: string | null;
  brand: string | null;
  brands: string[];
  /** Null until a verified product photograph is available. */
  image: string | null;
  gallery: string[];
  shortDescription: string;
  description: string;
  features: string[];
  specifications: { label: string; value: string }[];
  /** Sizes / ratings / configurations of the same product. */
  sizes: string[];
  /** Alias of `sizes` kept for existing components. */
  variants: string[];
  material: string | null;
  colour: string | null;
  packaging: string | null;
  applications: string[];
  standards: string[];
  featured: boolean;
  keywords: string[];
};

const inputs: CategoryInput[] = [
  c01,
  c02,
  c03,
  c04,
  c05,
  c06,
  c07,
  c08,
  c09,
  c10,
  c11,
  c12,
  c13,
  c14,
  c15,
  c16,
  c17,
  c18,
  c19,
];

/** Category cover imagery. Swap for real photography when available. */
const categoryImages: Record<string, string> = {
  "control-screen-specialty-cables": imgCables,
  "silicone-high-temperature-cables": imgCables,
  "rubber-pvc-armoured-cables": imgCables,
  "enclosures-panel-accessories": imgElectrical,
  "cable-termination": imgElectricalAccessories,
  "industrial-plugs-sockets-switchgear": imgElectrical,
  "conduit-pipes-wiring-accessories": imgElectricalAccessories,
  "cable-management-jointing-led-lighting": imgLighting,
  "switchgear-protection-control": imgElectrical,
  "lighting-lamps": imgLighting,
  "fans-ventilation-hvac": imgElectrical,
  "plumbing-pipes-fittings": imgPlumbing,
  "sanitaryware-bathroom-water-heating": imgPlumbing,
  "hardware-fasteners-fixings": imgHardware,
  "tools-equipment": imgHardware,
  "ppe-safety-site-industrial-supplies": imgSafety,
  "building-materials-paints-chemicals": imgConstruction,
  "earthing-lightning-protection": imgBuilding,
  "networking-communication": imgElectricalAccessories,
};

const categoryIcons: Record<string, string> = {
  "control-screen-specialty-cables": "Cable",
  "silicone-high-temperature-cables": "Flame",
  "rubber-pvc-armoured-cables": "Cable",
  "enclosures-panel-accessories": "Box",
  "cable-termination": "Wrench",
  "industrial-plugs-sockets-switchgear": "Plug",
  "conduit-pipes-wiring-accessories": "PipeIcon",
  "cable-management-jointing-led-lighting": "Lightbulb",
  "switchgear-protection-control": "ShieldCheck",
  "lighting-lamps": "Lightbulb",
  "fans-ventilation-hvac": "Fan",
  "plumbing-pipes-fittings": "Droplets",
  "sanitaryware-bathroom-water-heating": "ShowerHead",
  "hardware-fasteners-fixings": "Bolt",
  "tools-equipment": "Hammer",
  "ppe-safety-site-industrial-supplies": "HardHat",
  "building-materials-paints-chemicals": "Building2",
  "earthing-lightning-protection": "Zap",
  "networking-communication": "Network",
};

/**
 * Verified product photography, keyed by `"<category-slug>/<product-slug>"`.
 * Add entries here to replace a placeholder tile with a real image.
 */
const productImages: Record<string, string> = {
  "control-screen-specialty-cables/control-cable-ysly-jz": imgControlCable,
  "silicone-high-temperature-cables/silicone-cable-fg4-2": imgSiliconeCable,
  "rubber-pvc-armoured-cables/armoured-cables-lv-range": imgArmouredCable,
  "enclosures-panel-accessories/metal-enclosures": imgMetalEnclosure,
  "cable-termination/bimetallic-cable-lugs": imgBimetallicLugs,
  "cable-termination/bw-cable-glands": imgBwGlands,
  "industrial-plugs-sockets-switchgear/miniature-circuit-breaker-mcb": imgMcb,
  "conduit-pipes-wiring-accessories/electrical-pvc-conduit-pipe": imgPvcConduit,
  "switchgear-protection-control/magnetic-contactor": imgContactor,
  "lighting-lamps/square-recessed-led-panel": imgLedPanel,
  "lighting-lamps/led-floodlight": imgFloodlight,
  "lighting-lamps/led-bulb-e27": imgLedBulb,
  "fans-ventilation-hvac/exhaust-fan-square": imgExhaustFan,
  "plumbing-pipes-fittings/upvc-pipe": imgUpvcPipe,
  "plumbing-pipes-fittings/ppr-pipe": imgPprPipe,
  "sanitaryware-bathroom-water-heating/electric-storage-water-heater": imgWaterHeater,
  "hardware-fasteners-fixings/gi-bolt": imgGiBolt,
  "ppe-safety-site-industrial-supplies/safety-shoes": imgSafetyShoes,
  "earthing-lightning-protection/earth-rod": imgEarthRod,
  "networking-communication/rj45-connector": imgRj45,
};

const categoriesWithFeatured = new Set([
  "control-screen-specialty-cables",
  "cable-termination",
  "switchgear-protection-control",
  "lighting-lamps",
  "plumbing-pipes-fittings",
  "hardware-fasteners-fixings",
]);

export const productCategories: ProductCategory[] = inputs.map((c) => ({
  id: c.slug,
  number: c.number,
  name: c.name,
  slug: c.slug,
  href: `/products/${c.slug}`,
  image: categoryImages[c.slug] ?? imgConstruction,
  icon: categoryIcons[c.slug] ?? "Package",
  shortDescription: c.shortDescription,
  description: c.description,
  ctaLabel: "View Products",
  featured: categoriesWithFeatured.has(c.slug),
  subcategories: c.subcategories.map((s) => ({
    id: `${c.slug}-${s.slug}`,
    name: s.name,
    slug: s.slug,
    categorySlug: c.slug,
    description: s.description ?? null,
  })),
}));

const categoryBySlug = new Map(productCategories.map((c) => [c.slug, c]));

function buildProduct(cat: CategoryInput, p: ProductInput): Product {
  const subName =
    cat.subcategories.find((s) => s.slug === p.subcategory)?.name ?? p.subcategory;
  const brands = p.brands ?? [];
  const specs = [...(p.specifications ?? [])];
  const addSpec = (label: string, value?: string) => {
    if (value && !specs.some((s) => s.label.toLowerCase() === label.toLowerCase())) {
      specs.push({ label, value });
    }
  };
  addSpec("Material", p.material);
  addSpec("Colour", p.colour);
  addSpec("Packaging", p.packaging);
  if (p.standards?.length) addSpec("Standards", p.standards.join(", "));
  if (p.productCode) addSpec("Product code", p.productCode);
  return {
    id: `${cat.slug}-${p.slug}`,
    name: p.name,
    slug: p.slug,
    category: cat.slug,
    categorySlug: cat.slug,
    categoryName: cat.name,
    subcategory: p.subcategory,
    subcategoryName: subName,
    productType: subName,
    productCode: p.productCode ?? null,
    brand: brands[0] ?? null,
    brands,
    image: productImages[`${cat.slug}/${p.slug}`] ?? null,
    gallery: [],
    shortDescription: p.shortDescription,
    description: p.description ?? p.shortDescription,
    features: p.features ?? [],
    specifications: specs,
    sizes: p.sizes ?? [],
    variants: p.sizes ?? [],
    material: p.material ?? null,
    colour: p.colour ?? null,
    packaging: p.packaging ?? null,
    applications: p.applications ?? [],
    standards: p.standards ?? [],
    featured: p.featured ?? false,
    keywords: p.keywords ?? [],
  };
}

export const products: Product[] = inputs.flatMap((cat) =>
  cat.products.map((p) => buildProduct(cat, p)),
);

const productByKey = new Map(products.map((p) => [`${p.categorySlug}/${p.slug}`, p]));

export const getCategory = (slug: string) => categoryBySlug.get(slug);

export const getProductsByCategory = (slug: string) =>
  products.filter((p) => p.categorySlug === slug);

export const getProduct = (categorySlug: string, productSlug: string) =>
  productByKey.get(`${categorySlug}/${productSlug}`);

export const featuredProducts = products.filter((p) => p.featured);

export const productCount = (slug: string) =>
  products.filter((p) => p.categorySlug === slug).length;

export const productPath = (p: Pick<Product, "categorySlug" | "slug">) =>
  `/products/${p.categorySlug}/${p.slug}`;

export const relatedProducts = (p: Product, limit = 4) =>
  products
    .filter(
      (x) =>
        x.id !== p.id &&
        (x.subcategory === p.subcategory || x.categorySlug === p.categorySlug),
    )
    .sort((a, b) =>
      a.subcategory === p.subcategory ? -1 : b.subcategory === p.subcategory ? 1 : 0,
    )
    .slice(0, limit);

/** Free-text search across name, code, brand, category, specs and keywords. */
export function searchProducts(query: string, list: Product[] = products) {
  const q = query.trim().toLowerCase();
  if (!q) return list;
  const terms = q.split(/\s+/);
  return list.filter((p) => {
    const haystack = [
      p.name,
      p.productCode ?? "",
      p.categoryName,
      p.subcategoryName,
      p.shortDescription,
      p.brands.join(" "),
      p.keywords.join(" "),
      p.sizes.join(" "),
      p.applications.join(" "),
      p.specifications.map((s) => `${s.label} ${s.value}`).join(" "),
    ]
      .join(" ")
      .toLowerCase();
    return terms.every((t) => haystack.includes(t));
  });
}
