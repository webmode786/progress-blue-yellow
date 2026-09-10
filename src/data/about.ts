/**
 * About page content — fully editable.
 * Values in [square brackets] are placeholders awaiting confirmed information.
 */

export type IconItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export const approach: IconItem[] = [
  {
    id: "quality-first",
    title: "Quality First",
    description:
      "We focus on sourcing products that meet the requirements of professional construction and electrical applications.",
    icon: "BadgeCheck",
  },
  {
    id: "reliable-supply",
    title: "Reliable Supply",
    description:
      "We work to provide dependable product availability and supply support for our customers.",
    icon: "Truck",
  },
  {
    id: "customer-focus",
    title: "Customer Focus",
    description:
      "We take the time to understand customer requirements and help identify suitable product solutions.",
    icon: "Users",
  },
  {
    id: "professional-service",
    title: "Professional Service",
    description:
      "From enquiry to quotation and order support, we aim to make the purchasing experience simple and efficient.",
    icon: "Headset",
  },
];

export const values: IconItem[] = [
  {
    id: "integrity",
    title: "Integrity",
    description:
      "We believe in transparent and professional business relationships.",
    icon: "ShieldCheck",
  },
  {
    id: "quality",
    title: "Quality",
    description:
      "We focus on providing products suitable for our customers' requirements.",
    icon: "Gem",
  },
  {
    id: "reliability",
    title: "Reliability",
    description: "We strive to be a dependable supply partner.",
    icon: "Anchor",
  },
  {
    id: "service",
    title: "Service",
    description: "We value responsive communication and customer support.",
    icon: "Handshake",
  },
];

export type SupplyArea = {
  id: string;
  title: string;
  icon: string;
  items: string[];
};

export const supplyAreas: SupplyArea[] = [
  {
    id: "electrical",
    title: "Electrical Products",
    icon: "Zap",
    items: [
      "Cables & Wires",
      "Switches & Sockets",
      "Circuit Breakers",
      "Distribution Boards",
      "Electrical Accessories",
      "Conduits & Cable Management",
      "Lighting",
    ],
  },
  {
    id: "building-materials",
    title: "Building Materials",
    icon: "Bricks",
    items: [
      "Construction Materials",
      "Hardware",
      "Fasteners",
      "Tools",
      "Adhesives & Sealants",
      "Building Accessories",
    ],
  },
  {
    id: "plumbing",
    title: "Plumbing",
    icon: "Droplets",
    items: ["Pipes", "Fittings", "Valves", "Plumbing Accessories"],
  },
  {
    id: "safety",
    title: "Safety Products",
    icon: "HardHat",
    items: [
      "Personal Protective Equipment",
      "Safety Accessories",
      "Site Safety Products",
    ],
  },
  {
    id: "industrial",
    title: "Industrial Products",
    icon: "Factory",
    items: [
      "Industrial Electrical Products",
      "Maintenance Products",
      "Project Supplies",
    ],
  },
];

/** Editable trust figures — no invented numbers. */
export const aboutStats = [
  {
    id: "categories",
    value: null as number | null,
    placeholder: "[XX]+",
    label: "Product Categories",
  },
  { id: "products", value: null as number | null, placeholder: "[XX]+", label: "Products" },
  { id: "brands", value: null as number | null, placeholder: "[XX]+", label: "Brands" },
  { id: "customers", value: null as number | null, placeholder: "[XX]+", label: "Customers" },
];

export type Milestone = { id: string; year: string; title: string; description: string };

/**
 * Company journey. Left empty on purpose — no invented history.
 * Add milestones here and the "Our Journey" section appears automatically.
 */
export const milestones: Milestone[] = [];
