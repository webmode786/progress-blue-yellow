import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { QuoteCTA } from "@/components/site/QuoteCTA";
import { ProductBrowser } from "@/components/site/products/ProductBrowser";
import { getCategory, getProductsByCategory } from "@/data/products";

export const Route = createFileRoute("/products/$category/")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    const category = getCategory(params.category);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Category not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const { category } = loaderData;
    const title = `${category.name} Supplier in UAE | Skyline Trading`;
    const description = `${category.description} Request a quote from Skyline Building Material & Electrical Trading.`;
    const url = `https://skylinetradingfzc.com/products/${category.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://skylinetradingfzc.com" },
              { "@type": "ListItem", position: 2, name: "Products", item: "https://skylinetradingfzc.com/products" },
              { "@type": "ListItem", position: 3, name: category.name, item: url },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: CategoryNotFound,
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const items = getProductsByCategory(category.slug);

  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main>
        <PageHero
          image={category.image}
          imageAlt={`${category.name} supplied by Skyline Building Material & Electrical Trading`}
          title={category.name}
          description={category.description}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: category.name },
          ]}
        />

        <section className="bg-background py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Subcategories"
              title={`${category.name} Range`}
              description={`${items.length} products across ${category.subcategories.length} subcategories.`}
            />
            <ul className="mt-8 flex flex-wrap gap-2">
              {category.subcategories.map((s) => (
                <li
                  key={s.id}
                  className="bg-secondary text-secondary-foreground rounded-full px-3.5 py-1.5 text-xs font-semibold"
                >
                  {s.name}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <ProductBrowser
                items={items}
                showCategoryFilter={false}
                pageSize={12}
              />
            </div>
          </div>
        </section>

        <QuoteCTA
          title={`Need a quote for ${category.name.toLowerCase()}?`}
          quoteHref="/#enquiry"
        />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

function CategoryNotFound() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-40 text-center sm:px-6">
        <h1 className="text-3xl font-bold">Category not found</h1>
        <p className="text-muted-foreground mt-4">
          The category you are looking for is not part of our catalogue.
        </p>
        <Link
          to="/products"
          className="bg-accent text-accent-foreground mt-8 inline-flex h-11 items-center rounded-md px-6 text-sm font-bold"
        >
          Browse all products
        </Link>
      </main>
      <Footer />
    </div>
  );
}
