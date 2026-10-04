import { createFileRoute, Link } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { blogs } from "@/data/blogs";
import { productCategories, products } from "@/data/products";

const SITE = "https://progress-blue-yellow.lovable.app";
const title = "Sitemap | Skyline Building Material Trading FZC";
const description =
  "Browse all Skyline pages, product categories, catalogue products and electrical and building material articles.";

const primaryPages = [
  { label: "Home", to: "/" as const },
  { label: "About Us", to: "/about-us" as const },
  { label: "Products", to: "/products" as const },
  { label: "Blogs", to: "/blogs" as const },
  { label: "Contact Us", to: "/contact-us" as const },
];

export const Route = createFileRoute("/sitemap")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/sitemap` },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/sitemap` }],
  }),
  component: SitemapPage,
});

function SitemapPage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-28 sm:pt-32">
        <section className="border-border border-b pb-12 sm:pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-primary text-xs font-bold tracking-[0.16em] uppercase">Site index</p>
            <h1 className="font-display mt-3 text-4xl font-extrabold sm:text-5xl">Sitemap</h1>
            <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed sm:text-lg">
              Find company information, product categories, catalogue items and practical industry insights.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <section>
            <h2 className="font-display text-2xl font-bold">Main Pages</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {primaryPages.map((page) => (
                <li key={page.to}>
                  <Link
                    to={page.to}
                    className="border-border hover:border-primary hover:text-primary block rounded-md border px-4 py-3 text-sm font-semibold transition-colors"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="border-border mt-14 border-t pt-14">
            <h2 className="font-display text-2xl font-bold">Product Categories &amp; Products</h2>
            <div className="mt-7 space-y-4">
              {productCategories.map((category) => {
                const categoryProducts = products.filter(
                  (product) => product.categorySlug === category.slug,
                );
                return (
                  <details key={category.slug} className="border-border rounded-md border">
                    <summary className="hover:text-primary cursor-pointer px-4 py-4 font-bold transition-colors sm:px-5">
                      {category.name} ({categoryProducts.length})
                    </summary>
                    <div className="border-border border-t px-4 py-5 sm:px-5">
                      <Link
                        to="/products/$category"
                        params={{ category: category.slug }}
                        className="text-primary text-sm font-bold"
                      >
                        View category
                      </Link>
                      <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                        {categoryProducts.map((product) => (
                          <li key={product.id}>
                            <Link
                              to="/products/$category/$product"
                              params={{
                                category: product.categorySlug,
                                product: product.slug,
                              }}
                              className="text-muted-foreground hover:text-primary text-sm transition-colors"
                            >
                              {product.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </details>
                );
              })}
            </div>
          </section>

          <section className="border-border mt-14 border-t pt-14">
            <h2 className="font-display text-2xl font-bold">Blogs</h2>
            <ul className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2">
              {blogs.map((post) => (
                <li key={post.slug}>
                  <Link
                    to="/blogs/$slug"
                    params={{ slug: post.slug }}
                    className="text-muted-foreground hover:text-primary text-sm font-semibold transition-colors"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}