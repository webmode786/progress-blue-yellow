/**
 * AI-readable Markdown + llms.txt generators.
 * Built on request from the same product, blog and company data the HTML pages
 * use, so they always stay in sync. Convention: append ".md" to any public page
 * path (home = /index.md, /products/<cat>.md, /products/<cat>/<product>.md,
 * /blogs.md, /blogs/<slug>.md).
 */
import { company } from "@/data/company";
import { brands } from "@/data/catalog";
import { productCategories, products, getCategory, getProduct, getProductsByCategory } from "@/data/products";
import { blogs, getBlog } from "@/data/blogs";

export const SITE = "https://skylinetradingfzc.com";
const abs = (p: string) => (p.startsWith("http") ? p : `${SITE}${p.startsWith("/") ? "" : "/"}${p}`);
const location = `${company.address}, United Arab Emirates`;

const about =
  `${company.legalName} supplies electrical products, electrical cables, electrical accessories, plumbing, hardware and building materials to contractors, construction companies, facility management companies, traders and businesses across the UAE. Based in ${location}.`;

function header(title: string, canonical: string, description: string) {
  return `# ${title}\n\n> ${description}\n\nCanonical URL: ${abs(canonical)}\n\n`;
}

const contactBlock = () =>
  `## Contact\n\n- Email: ${company.email}\n- Phone / WhatsApp: ${company.phone} (https://wa.me/${company.whatsappNumber})\n- Address: ${location}\n- Hours: ${company.workingHours}\n- Contact page: ${SITE}/contact-us\n`;

const list = (items: string[]) => items.map((i) => `- ${i}`).join("\n");

function homeMd() {
  return (
    header(company.legalName, "/", company.supportingMessage) +
    `${about}\n\n## Product categories\n\n` +
    productCategories.map((c) => `- [${c.name}](${SITE}/products/${c.slug}.md) — ${c.shortDescription}`).join("\n") +
    `\n\n## Brands we work with\n\n${list(brands.map((b) => b.name))}\n\n## Pages\n\n- [About Us](${SITE}/about-us.md)\n- [All Products](${SITE}/products.md)\n- [Blog](${SITE}/blogs.md)\n- [Contact Us](${SITE}/contact-us.md)\n\n` +
    contactBlock()
  );
}

function aboutMd() {
  return (
    header(`About ${company.legalName}`, "/about-us", company.supportingMessage) +
    `${about}\n\n## Brands\n\n${list(brands.map((b) => b.name))}\n\n` +
    contactBlock()
  );
}

function contactMd() {
  return (
    header(`Contact ${company.legalName}`, "/contact-us", "Request a quote or ask about product availability.") +
    contactBlock()
  );
}

function productsMd() {
  return (
    header("Our Products", "/products", "Quality building materials & electrical products for every project.") +
    productCategories
      .map(
        (c) =>
          `## [${c.name}](${SITE}/products/${c.slug}.md)\n\n${c.shortDescription}\n\nSubcategories: ${c.subcategories.map((s) => s.name).join(", ")}`,
      )
      .join("\n\n") +
    "\n"
  );
}

function categoryMd(slug: string) {
  const c = getCategory(slug);
  if (!c) return null;
  const items = getProductsByCategory(slug);
  let out = header(c.name, `/products/${c.slug}`, c.shortDescription) + `${c.description}\n\n`;
  for (const s of c.subcategories) {
    const ps = items.filter((p) => p.subcategory === s.slug);
    if (!ps.length) continue;
    out += `## ${s.name}\n\n` + ps.map((p) => `- [${p.name}](${SITE}/products/${c.slug}/${p.slug}.md)${p.productCode ? ` (${p.productCode})` : ""} — ${p.shortDescription}`).join("\n") + "\n\n";
  }
  return out;
}

function productMd(cat: string, slug: string) {
  const p = getProduct(cat, slug);
  if (!p) return null;
  let out = header(p.name, `/products/${p.categorySlug}/${p.slug}`, p.shortDescription);
  const rows: [string, string | null][] = [
    ["Category", `[${p.categoryName}](${SITE}/products/${p.categorySlug}.md)`],
    ["Type", p.subcategoryName],
    ["Product code", p.productCode],
    ["Brand", p.brands.join(", ") || null],
    ["Material", p.material],
    ["Colour", p.colour],
    ["Packaging", p.packaging],
  ];
  out += "| Field | Value |\n|---|---|\n" + rows.filter(([, v]) => v).map(([k, v]) => `| ${k} | ${v} |`).join("\n") + "\n\n";
  if (p.description) out += `## Description\n\n${p.description}\n\n`;
  if (p.specifications.length)
    out += "## Specifications\n\n| Specification | Value |\n|---|---|\n" + p.specifications.map((s) => `| ${s.label} | ${s.value} |`).join("\n") + "\n\n";
  if (p.sizes.length) out += `## Sizes / options\n\n${list(p.sizes)}\n\n`;
  if (p.features.length) out += `## Features\n\n${list(p.features)}\n\n`;
  if (p.applications.length) out += `## Applications\n\n${list(p.applications)}\n\n`;
  if (p.standards.length) out += `## Standards\n\n${list(p.standards)}\n\n`;
  if (p.image) out += `## Image\n\n![${p.name}](${abs(p.image)})\n\n`;
  out += `## Enquiry\n\nPrice and availability on request. Email ${company.email} or WhatsApp https://wa.me/${company.whatsappNumber}.\n`;
  return out;
}

function blogsMd() {
  return (
    header("Electrical & Building Material Insights", "/blogs", "Guides and insights for contractors and businesses across the UAE.") +
    blogs.map((b) => `- [${b.title}](${SITE}/blogs/${b.slug}.md) — ${b.excerpt}`).join("\n") +
    "\n"
  );
}

function blogMd(slug: string) {
  const b = getBlog(slug);
  if (!b) return null;
  let out = header(b.title, `/blogs/${b.slug}`, b.metaDescription) + `Published: ${b.date} · Category: ${b.category}\n\n![${b.imageAlt}](${abs(b.image)})\n\n${b.intro}\n\n`;
  for (const s of b.sections) {
    out += `## ${s.heading}\n\n${s.paragraphs.join("\n\n")}\n\n`;
    if (s.list?.length) out += list(s.list) + "\n\n";
  }
  out += `## Conclusion\n\n${b.conclusion}\n\n`;
  if (b.links.length) out += `## Related links\n\n${b.links.map((l) => `- [${l.label}](${abs(l.href)})`).join("\n")}\n`;
  return out;
}

/** Returns Markdown for a ".md" path, or null when it isn't a public page. */
export function markdownForPath(pathname: string): string | null {
  const path = pathname.replace(/\.md$/, "").replace(/\/+$/, "");
  const seg = path.split("/").filter(Boolean);
  if (path === "/index" || path === "") return homeMd();
  if (path === "/about-us") return aboutMd();
  if (path === "/contact-us") return contactMd();
  if (path === "/products") return productsMd();
  if (path === "/blogs") return blogsMd();
  if (seg[0] === "products" && seg.length === 2) return categoryMd(seg[1]);
  if (seg[0] === "products" && seg.length === 3) return productMd(seg[1], seg[2]);
  if (seg[0] === "blogs" && seg.length === 2) return blogMd(seg[1]);
  return null;
}

export function llmsTxt() {
  return (
    `# ${company.legalName}\n\n> ${about}\n\nWebsite: ${SITE}\nEvery public page has a Markdown version: add ".md" to its URL (home: ${SITE}/index.md).\n\n` +
    `## Main pages\n\n- [Home](${SITE}/index.md)\n- [About Us](${SITE}/about-us.md)\n- [Products](${SITE}/products.md)\n- [Blog](${SITE}/blogs.md)\n- [Contact Us](${SITE}/contact-us.md)\n\n` +
    `## Product categories\n\n${productCategories.map((c) => `- [${c.name}](${SITE}/products/${c.slug}.md)`).join("\n")}\n\n` +
    `## Blog articles\n\n${blogs.map((b) => `- [${b.title}](${SITE}/blogs/${b.slug}.md)`).join("\n")}\n\n` +
    `## Optional\n\n- [Full product index](${SITE}/llms-full.txt)\n- [XML sitemap](${SITE}/sitemap.xml)\n\n` +
    contactBlock()
  );
}

export function llmsFullTxt() {
  let out = llmsTxt() + `\n## Brands\n\n${list(brands.map((b) => b.name))}\n\n## Full product index (${products.length} products)\n\n`;
  for (const c of productCategories) {
    out += `### ${c.name}\n\n${c.shortDescription}\n\n` +
      getProductsByCategory(c.slug).map((p) => `- [${p.name}](${SITE}/products/${c.slug}/${p.slug}.md)${p.productCode ? ` (${p.productCode})` : ""}`).join("\n") + "\n\n";
  }
  return out;
}

export const textResponse = (body: string, type: string) =>
  new Response(body, {
    status: 200,
    headers: { "content-type": `${type}; charset=utf-8`, "cache-control": "public, max-age=3600", "x-robots-tag": "noindex" },
  });
