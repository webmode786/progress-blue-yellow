/**
 * Central company configuration.
 * Update contact details, tagline and social links here — nowhere else.
 * Values wrapped in [square brackets] are placeholders awaiting real data.
 */

export const company = {
  name: "Skyline Building Material & Electrical Trading",
  /** Registered trading entity. */
  legalName: "Skyline Building Material Trading FZC",
  shortName: "Skyline",
  tagline: "Building Quality. Powering Progress.",
  supportingMessage:
    "Your trusted partner for quality electrical products, building materials and construction solutions.",
  // Digits only, international format, no "+" — used to build wa.me links.
  // Set to "" while unknown so WhatsApp buttons stay hidden instead of broken.
  whatsappNumber: "971589187575",
  whatsappMessage:
    "Hello Skyline Building Material Trading FZC, I would like to enquire about your products.",
  phone: "+971 58 918 7575",
  phoneTel: "+971589187575",
  whatsappDisplay: "+971 58 918 7575",
  email: "info@skylinetradingfzc.com",
  address: "Sharjah Research Technology and Innovation Park Free Zone Authority, Sharjah",
  workingHours: "Monday – Sunday: Open 24/7 (Always Open)",
  /** Paste a Google Maps embed URL here once the location is confirmed. */
  mapEmbedUrl: "",
  /** Optional link to the location on Google Maps. */
  mapLink: "",
} as const;

/** True only when a real WhatsApp number has been configured above. */
export const hasWhatsapp = company.whatsappNumber.length > 0;

/** Build a WhatsApp link with any pre-filled message. */
export const waLink = (message: string) =>
  `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const whatsappLink = waLink(company.whatsappMessage);

/** Pre-filled WhatsApp enquiry for a specific product. */
export const productWhatsappLink = (productName: string) =>
  waLink(
    `Hello ${company.name}, I am interested in ${productName}. Please share the price and availability.`,
  );

type QuoteProduct = {
  name: string;
  productCode?: string | null;
  categoryName?: string | null;
  categorySlug?: string | null;
};

/** Quote-request link that pre-fills the Contact Us enquiry form. */
export const quoteLinkFor = (product: QuoteProduct | string) => {
  const p: QuoteProduct = typeof product === "string" ? { name: product } : product;
  const params = new URLSearchParams({ product: p.name });
  if (p.productCode) params.set("code", p.productCode);
  if (p.categorySlug) params.set("category", p.categorySlug);
  return `/contact-us?${params.toString()}#enquiry-form`;
};

/** Future URL structure — pages are added progressively. */
export const routes = {
  home: "/",
  about: "/about-us",
  products: "/products",
  brands: "/brands",
  industries: "/industries",
  contact: "/contact-us",
  quote: "/request-a-quote",
} as const;

export const mainNav = [
  { label: "Home", href: routes.home, hash: "#top" },
  { label: "About Us", href: routes.about, hash: "#about" },
  { label: "Products", href: routes.products, hash: "#categories" },
  { label: "Contact Us", href: routes.contact, hash: "#enquiry" },
] as const;

/** Builds the pre-filled WhatsApp enquiry from current form values; empty optional fields are skipped. */
export function whatsappEnquiryLink(f: {
  name: string;
  company?: string;
  email: string;
  phone: string;
  product?: string;
  productCode?: string;
  category?: string;
  quantity?: string;
  message: string;
}) {
  const rows: [string, string | undefined][] = [
    ["Name", f.name],
    ["Company", f.company],
    ["Email", f.email],
    ["Phone / WhatsApp", f.phone],
    ["Product", f.product],
    ["Product Code", f.productCode],
    ["Category", f.category],
    ["Quantity", f.quantity],
  ];
  const lines = rows.filter(([, v]) => v && v.trim()).map(([k, v]) => `${k}: ${v!.trim()}`);
  return waLink(
    `Hello ${company.legalName},\n\nI would like to make an enquiry.\n\n${lines.join("\n")}\n\nMessage:\n${f.message.trim()}\n\nI would like to receive more information about this requirement.`,
  );
}
