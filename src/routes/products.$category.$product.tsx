import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle } from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ProductTile } from "@/components/site/products/ProductTile";
import { getProduct, relatedProducts } from "@/data/products";
import { company, productWhatsappLink, quoteLinkFor } from "@/data/company";

export const Route = createFileRoute("/products/$category/$product")({
  loader: ({ params }) => {
    const product = getProduct(params.category, params.product);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Product not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const { product } = loaderData;
    const title = `${product.name} | ${product.categoryName} | Skyline Trading UAE`;
    const description = `${product.shortDescription} ${product.categoryName} supplied by Skyline Building Material & Electrical Trading. Request a quote.`;
    const url = `/products/${product.categorySlug}/${product.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.description,
            category: `${product.categoryName} / ${product.subcategoryName}`,
            brand: { "@type": "Organization", name: company.name },
          }),
        },
      ],
    };
  },
  notFoundComponent: ProductNotFound,
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const related = relatedProducts(product);

  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-28 sm:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-muted-foreground text-xs font-semibold tracking-[0.14em] uppercase">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link to="/products" className="hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  to="/products/$category"
                  params={{ category: product.categorySlug }}
                  className="hover:text-primary transition-colors"
                >
                  {product.categoryName}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-primary" aria-current="page">
                {product.name}
              </li>
            </ol>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <div className="border-border bg-secondary overflow-hidden rounded-xl border">
                <img
                  src={product.image}
                  alt={`${product.name} — ${product.subcategoryName} supplied by Skyline`}
                  width={1200}
                  height={900}
                  decoding="async"
                  className="aspect-[4/3] h-full w-full object-cover"
                />
              </div>
              {product.gallery.length > 1 ? (
                <ul className="mt-4 grid grid-cols-4 gap-3">
                  {product.gallery.map((g, i) => (
                    <li key={g + i} className="border-border overflow-hidden rounded-lg border">
                      <img
                        src={g}
                        alt={`${product.name} view ${i + 1}`}
                        loading="lazy"
                        decoding="async"
                        width={300}
                        height={225}
                        className="aspect-[4/3] w-full object-cover"
                      />
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            <div>
              <span className="text-primary text-xs font-bold tracking-[0.18em] uppercase">
                {product.categoryName} · {product.subcategoryName}
              </span>
              <h1 className="font-display mt-3 text-3xl leading-tight font-extrabold sm:text-4xl">
                {product.name}
              </h1>
              <p className="text-muted-foreground mt-5 text-base leading-relaxed">
                {product.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={quoteLinkFor(product.name)}
                  className="bg-accent text-accent-foreground hover:shadow-lift inline-flex h-12 items-center gap-2 rounded-md px-6 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5"
                >
                  Request a Quote
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={productWhatsappLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-whatsapp text-primary-foreground inline-flex h-12 items-center gap-2 rounded-md px-6 text-sm font-bold transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp Inquiry
                </a>
              </div>

              {product.specifications.length > 0 ? (
                <section className="mt-10">
                  <h2 className="text-lg font-bold">Technical Specifications</h2>
                  <dl className="border-border mt-4 divide-y rounded-lg border">
                    {product.specifications.map((s) => (
                      <div key={s.label} className="grid gap-1 p-4 sm:grid-cols-[180px_1fr]">
                        <dt className="text-muted-foreground text-sm font-semibold">
                          {s.label}
                        </dt>
                        <dd className="text-sm font-medium">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                </section>
              ) : null}

              {product.variants.length > 0 ? (
                <section className="mt-8">
                  <h2 className="text-lg font-bold">Available Sizes & Variants</h2>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {product.variants.map((v) => (
                      <li
                        key={v}
                        className="bg-secondary text-secondary-foreground rounded-full px-3 py-1.5 text-xs font-semibold"
                      >
                        {v}
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground mt-3 text-xs">
                    Other sizes and configurations available on request.
                  </p>
                </section>
              ) : null}

              {product.applications.length > 0 ? (
                <section className="mt-8">
                  <h2 className="text-lg font-bold">Applications</h2>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {product.applications.map((a) => (
                      <li key={a} className="flex items-center gap-2 text-sm">
                        <Check className="text-primary h-4 w-4 shrink-0" aria-hidden="true" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}
            </div>
          </div>
        </div>

        {related.length > 0 ? (
          <section className="bg-secondary/60 mt-20 py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionHeading
                eyebrow="Related"
                title={`More in ${product.categoryName}`}
              />
              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {related.map((p) => (
                  <ProductTile key={p.id} product={p} />
                ))}
              </div>
            </div>
          </section>
        ) : (
          <div className="h-20" />
        )}
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

function ProductNotFound() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-40 text-center sm:px-6">
        <h1 className="text-3xl font-bold">Product not found</h1>
        <p className="text-muted-foreground mt-4">
          This product is not in our catalogue. Browse the full range or send us your
          requirement.
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
