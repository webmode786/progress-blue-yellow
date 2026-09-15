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
  whatsappNumber: "",
  whatsappMessage:
    "Hello Skyline Building Material Trading FZC, I would like to enquire about your products.",
  phone: "[Phone Number]",
  whatsappDisplay: "[WhatsApp Number]",
  email: "[Email Address]",
  address: "[Company Address]",
  workingHours: "[Working Hours]",
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

/** Quote-request link that pre-selects a product in the enquiry form. */
export const quoteLinkFor = (productName: string) =>
  `/?product=${encodeURIComponent(productName)}#enquiry`;

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
  { label: "Brands", href: routes.brands, hash: "#brands" },
  { label: "Contact Us", href: routes.contact, hash: "#enquiry" },
] as const;
