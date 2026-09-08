/**
 * Central company configuration.
 * Update contact details, tagline and social links here — nowhere else.
 * Values wrapped in [square brackets] are placeholders awaiting real data.
 */

export const company = {
  name: "Skyline Building Material Trading",
  shortName: "Skyline",
  tagline: "Building Quality. Powering Progress.",
  supportingMessage:
    "Your trusted partner for quality electrical products, building materials and construction solutions.",
  // Digits only, international format, no "+" — used to build wa.me links.
  whatsappNumber: "971000000000",
  whatsappMessage:
    "Hello Skyline Building Material Trading, I would like to enquire about your products.",
  phone: "[Phone Number]",
  whatsappDisplay: "[WhatsApp Number]",
  email: "[Email Address]",
  address: "[Company Address]",
  workingHours: "[Working Hours]",
} as const;

export const whatsappLink = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(
  company.whatsappMessage,
)}`;

/** Future URL structure — pages are added progressively. */
export const routes = {
  home: "/",
  about: "/about-us",
  products: "/products",
  electrical: "/products/electrical",
  buildingMaterials: "/products/building-materials",
  brands: "/brands",
  industries: "/industries",
  contact: "/contact-us",
  quote: "/request-a-quote",
} as const;

export const mainNav = [
  { label: "Home", href: routes.home, hash: "#top" },
  { label: "About Us", href: routes.about, hash: "#about" },
  { label: "Products", href: routes.products, hash: "#categories" },
  { label: "Electrical", href: routes.electrical, hash: "#categories" },
  { label: "Building Materials", href: routes.buildingMaterials, hash: "#categories" },
  { label: "Brands", href: routes.brands, hash: "#brands" },
  { label: "Contact Us", href: routes.contact, hash: "#enquiry" },
] as const;
