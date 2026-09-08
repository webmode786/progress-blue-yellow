import catElectrical from "@/assets/cat-electrical.jpg";
import catBuilding from "@/assets/cat-building.jpg";
import prodCable from "@/assets/prod-cable.jpg";
import prodBoard from "@/assets/prod-board.jpg";
import prodFasteners from "@/assets/prod-fasteners.jpg";
import prodPlumbing from "@/assets/prod-plumbing.jpg";

export type Subcategory = {
  id: string;
  name: string;
  slug: string;
  categorySlug: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  href: string;
  image: string;
  shortDescription: string;
  ctaLabel: string;
  subcategories: Subcategory[];
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  category: string;
  subcategory: string;
  /** null when a brand has not been confirmed. */
  brand: string | null;
  image: string;
  gallery: string[];
  shortDescription: string;
  description: string;
  /** Left empty on purpose — no unverified specifications. */
  specifications: { label: string; value: string }[];
  features: string[];
  applications: string[];
  sku: string;
};

export type Brand = {
  id: string;
  name: string;
  slug: string;
  /** Set to a logo path once confirmed; null renders a text placeholder card. */
  logo: string | null;
};

export type Industry = {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
};

const sub = (categorySlug: string, name: string, slug: string): Subcategory => ({
  id: `${categorySlug}-${slug}`,
  name,
  slug,
  categorySlug,
});

export const categories: Category[] = [
  {
    id: "electrical",
    name: "Electrical",
    slug: "electrical",
    href: "/products/electrical",
    image: catElectrical,
    shortDescription:
      "Powering projects with reliable electrical products and accessories.",
    ctaLabel: "Explore Electrical",
    subcategories: [
      sub("electrical", "Electrical Cables & Wires", "cables-wires"),
      sub("electrical", "Switches & Sockets", "switches-sockets"),
      sub("electrical", "Circuit Breakers", "circuit-breakers"),
      sub("electrical", "Distribution Boards", "distribution-boards"),
      sub("electrical", "Electrical Accessories", "electrical-accessories"),
      sub("electrical", "Conduits & Accessories", "conduits-accessories"),
      sub("electrical", "Cable Management", "cable-management"),
      sub("electrical", "Lighting", "lighting"),
      sub("electrical", "Industrial Electrical Products", "industrial-electrical"),
    ],
  },
  {
    id: "building-materials",
    name: "Building Materials",
    slug: "building-materials",
    href: "/products/building-materials",
    image: catBuilding,
    shortDescription:
      "Essential materials and products for construction and development projects.",
    ctaLabel: "Explore Building Materials",
    subcategories: [
      sub("building-materials", "Construction Materials", "construction-materials"),
      sub("building-materials", "Cement & Related Products", "cement"),
      sub("building-materials", "Steel / Metal Products", "steel-metal"),
      sub("building-materials", "Hardware", "hardware"),
      sub("building-materials", "Fasteners", "fasteners"),
      sub("building-materials", "Tools", "tools"),
      sub("building-materials", "Plumbing Materials", "plumbing"),
      sub("building-materials", "Building Accessories", "building-accessories"),
      sub("building-materials", "Adhesives & Sealants", "adhesives-sealants"),
      sub("building-materials", "Safety Products", "safety"),
    ],
  },
];

/** Representative placeholder products. No pricing, specs or claims. */
export const products: Product[] = [
  {
    id: "p-001",
    name: "Electrical Cable & Wire",
    slug: "electrical-cable-wire",
    category: "electrical",
    subcategory: "cables-wires",
    brand: null,
    image: prodCable,
    gallery: [prodCable],
    shortDescription:
      "Cables and wires for power and lighting circuits across project types.",
    description:
      "Placeholder description. Cable and wire options can be supplied in a range of sizes and configurations based on your project requirement.",
    specifications: [],
    features: ["Multiple size options", "Suitable for power and lighting circuits"],
    applications: ["Residential", "Commercial", "Industrial"],
    sku: "[SKU]",
  },
  {
    id: "p-002",
    name: "Distribution Board",
    slug: "distribution-board",
    category: "electrical",
    subcategory: "distribution-boards",
    brand: null,
    image: prodBoard,
    gallery: [prodBoard],
    shortDescription:
      "Distribution boards and enclosures for organised circuit protection.",
    description:
      "Placeholder description. Board sizes and configurations available on request.",
    specifications: [],
    features: ["Modular configurations", "Circuit protection ready"],
    applications: ["Fit-out projects", "Facility maintenance"],
    sku: "[SKU]",
  },
  {
    id: "p-003",
    name: "Fasteners & Fixings",
    slug: "fasteners-fixings",
    category: "building-materials",
    subcategory: "fasteners",
    brand: null,
    image: prodFasteners,
    gallery: [prodFasteners],
    shortDescription:
      "Bolts, screws, anchors and fixings for general construction work.",
    description:
      "Placeholder description. Assorted fastener types and sizes supplied to requirement.",
    specifications: [],
    features: ["Assorted sizes", "General construction use"],
    applications: ["Construction", "Maintenance", "Fit-out"],
    sku: "[SKU]",
  },
  {
    id: "p-004",
    name: "Plumbing Pipes & Fittings",
    slug: "plumbing-pipes-fittings",
    category: "building-materials",
    subcategory: "plumbing",
    brand: null,
    image: prodPlumbing,
    gallery: [prodPlumbing],
    shortDescription: "Pipes, fittings and accessories for plumbing installations.",
    description:
      "Placeholder description. Pipe and fitting ranges available on enquiry.",
    specifications: [],
    features: ["Range of diameters", "Fittings and accessories"],
    applications: ["Plumbing", "MEP", "Maintenance"],
    sku: "[SKU]",
  },
];

/**
 * Brand partners are placeholders until confirmed.
 * Replace name/logo once verified — no distributorship claims are made.
 */
export const brands: Brand[] = Array.from({ length: 8 }, (_, i) => ({
  id: `brand-${i + 1}`,
  name: `[Brand ${i + 1}]`,
  slug: `brand-${i + 1}`,
  logo: null,
}));

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
  { id: "products", value: null as number | null, placeholder: "[X]+", label: "Products" },
  { id: "brands", value: null as number | null, placeholder: "[X]+", label: "Brands" },
  { id: "customers", value: null as number | null, placeholder: "[X]+", label: "Customers" },
  {
    id: "experience",
    value: null as number | null,
    placeholder: "[X]+",
    label: "Years of Experience",
  },
];
