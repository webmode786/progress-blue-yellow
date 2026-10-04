import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { QuoteCTA } from "@/components/site/QuoteCTA";
import { CategoryTile } from "@/components/site/products/CategoryTile";
import { ProductBrowser } from "@/components/site/products/ProductBrowser";
import { ProductTile } from "@/components/site/products/ProductTile";
import { productCategories, products, featuredProducts } from "@/data/products";
import { company } from "@/data/company";
import heroImage from "@/assets/products-hero.jpg";

const title = "Our Products | Building Materials & Electrical Supplier in UAE";
const description =
  "Explore the Skyline product range: electrical accessories, cables and wires, lighting, plumbing, hardware, construction materials and safety products for projects across the UAE.";

export const Route = createFileRoute("/products/")({
  staticData: { sitemap: true },
  component: ProductsPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://skylinetradingfzc.com/products" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://skylinetradingfzc.com/products" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Products", item: "/products" },
          ],
        }),
      },
    ],
  }),
});

function ProductsPage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main>
        <PageHero
          image={heroImage}
          imageAlt="Building materials and electrical supplies stocked in a trading warehouse"
          title="Electrical & Building Materials"
          highlight="Product Catalogue"
          description="Quality Building Materials & Electrical Products for Every Project"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
        />

        <section className="bg-background py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl">
              <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
                {company.name} supplies a wide range of building materials and
                electrical products to contractors, construction companies,
                developers, maintenance teams, businesses and individual customers.
                From cables, switchgear and lighting to pipes, hardware, finishing
                materials and safety equipment, our catalogue is organised by
                category so you can find what a job needs and send a single
                enquiry.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="categories" className="bg-secondary/60 scroll-mt-20 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Product Range"
              title="Browse Product Categories"
              description={`${productCategories.length} categories covering electrical and building-material requirements.`}
              align="center"
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {productCategories.map((c, i) => (
                <Reveal key={c.id} delay={i * 80} className="h-full">
                  <CategoryTile category={c} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Selected Items"
              title="Featured Products"
              description="A sample of frequently requested items across our categories."
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {featuredProducts.slice(0, 4).map((p) => (
                <ProductTile key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>

        <section id="all-products" className="bg-secondary/60 scroll-mt-20 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Search & Filter"
              title="Find a Product"
              description="Search by product name, category, subcategory, type or keyword."
            />
            <div className="mt-10">
              <ProductBrowser items={products} />
            </div>

            <div className="mt-12">
              <Link
                to="/"
                hash="enquiry"
                className="text-primary inline-flex items-center gap-2 text-sm font-bold"
              >
                Can't find an item? Send us your requirement
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <QuoteCTA quoteHref="/#enquiry" />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
