/**
 * Shared site data: brands, industries, benefits and headline stats.
 *
 * Product categories and products now live in `src/data/products.ts` and are
 * re-exported here so existing sections keep a single import path.
 */

export type {
  Subcategory,
  Product,
  ProductCategory as Category,
} from "./products";

export {
  productCategories as categories,
  products,
  featuredProducts,
  getCategory,
  getProduct,
  getProductsByCategory,
  productCount,
  productPath,
  relatedProducts,
  searchProducts,
} from "./products";

export type Brand = {
  id: string;
  name: string;
  slug: string;
  /** Set to a logo path once confirmed; null renders a text placeholder card. */
  logo: string | null;
  altName?: string;
  /** Logo is white and needs a dark tile. */
  darkBg?: boolean;
};

export type Industry = {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
};

/**
 * Brand partners are placeholders until confirmed.
 * Replace name/logo once verified — no distributorship claims are made.
 */
import ducab from "@/assets/ducab-logo.jpg";
import nci from "@/assets/nci-logo.png";
import rr from "@/assets/rr-logo.png";
import decoduct from "@/assets/decoduct-logo.png";
import topCable from "@/assets/top-cable-spain-logo.png";
import barton from "@/assets/barton-logo.png";
import hager from "@/assets/hager-logo.png";
import schneider from "@/assets/schneider-logo.png";

/** Official logos; null keeps a name fallback until a logo is supplied. */
const brandList: [string, string, string | null, boolean?][] = [
  ["Ducab", "Ducab", ducab],
  ["National (NCI)", "National NCI", nci],
  ["RR", "RR", rr],
  ["Decoduct", "Decoduct", decoduct],
  ["Top Cable Spain", "Top Cable Spain", topCable],
  ["Barton", "Barton", barton, true],
  ["MK", "MK", null],
  ["Tenby", "Tenby", null],
  ["Schneider", "Schneider", schneider],
  ["Hager", "Hager", hager],
];
export const brands: Brand[] = brandList.map(([name, altName, logo, darkLogo]) => {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  return { id: slug, name, altName, slug, logo, darkBg: !!darkLogo };
});

export const industries: Industry[] = [
  {
    id: "construction",
    name: "Construction",
    slug: "construction",
    description: "Materials and supply support for site and build programmes.",
    icon: "HardHat",
  },
  {
    id: "electrical-contracting",
    name: "Electrical Contracting",
    slug: "electrical-contracting",
    description: "Cables, boards and accessories for electrical installations.",
    icon: "Zap",
  },
  {
    id: "mep",
    name: "MEP",
    slug: "mep",
    description: "Products across mechanical, electrical and plumbing scopes.",
    icon: "Wrench",
  },
  {
    id: "real-estate",
    name: "Real Estate & Developers",
    slug: "real-estate-developers",
    description: "Supply support for development and handover requirements.",
    icon: "Building2",
  },
  {
    id: "facility-management",
    name: "Facility Management",
    slug: "facility-management",
    description: "Consumables and replacement items for managed properties.",
    icon: "ClipboardList",
  },
  {
    id: "commercial",
    name: "Commercial Projects",
    slug: "commercial-projects",
    description: "Fit-out and refurbishment product requirements.",
    icon: "Store",
  },
  {
    id: "industrial",
    name: "Industrial Projects",
    slug: "industrial-projects",
    description: "Products suited to plant, warehouse and industrial settings.",
    icon: "Factory",
  },
  {
    id: "maintenance",
    name: "Maintenance",
    slug: "maintenance",
    description: "Ongoing supply for repair and maintenance teams.",
    icon: "Hammer",
  },
];

export const whyChoose = [
  {
    id: "quality",
    title: "Quality Products",
    description: "Products selected to meet professional project requirements.",
    icon: "BadgeCheck",
  },
  {
    id: "supply",
    title: "Reliable Supply",
    description: "Dependable sourcing and supply for ongoing requirements.",
    icon: "Truck",
  },
  {
    id: "range",
    title: "Wide Product Range",
    description:
      "Electrical and building-material solutions from multiple categories.",
    icon: "LayoutGrid",
  },
  {
    id: "value",
    title: "Competitive Solutions",
    description: "Value-focused solutions for contractors and businesses.",
    icon: "Scale",
  },
  {
    id: "service",
    title: "Professional Service",
    description: "Responsive support from enquiry to delivery.",
    icon: "Headset",
  },
  {
    id: "customer",
    title: "Customer Focus",
    description: "We work to understand each customer's specific requirement.",
    icon: "Users",
  },
];

/** Editable placeholders — no invented numbers. */
export const stats = [
  { id: "products", value: null as number | null, placeholder: "500+", label: "Products" },
  { id: "brands", value: null as number | null, placeholder: "10+", label: "Brands" },
  { id: "customers", value: null as number | null, placeholder: "50+", label: "Customers" },
  {
    id: "experience",
    value: null as number | null,
    placeholder: "5+",
    label: "Years of Experience",
  },
];
