import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { BlogCard } from "@/components/site/blog/BlogCard";
import { blogs } from "@/data/blogs";
import heroImg from "@/assets/hero-construction.jpg";

const SITE = "https://progress-blue-yellow.lovable.app";
const title = "Electrical & Building Material Blog UAE | Skyline Trading";
const description =
  "Guides and insights on electrical cables, supplies and building materials for contractors and businesses across the UAE, from Skyline Building Material Trading FZC.";

export const Route = createFileRoute("/blogs/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/blogs` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/blogs` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Electrical & Building Material Insights",
          url: `${SITE}/blogs`,
          blogPost: blogs.map((b) => ({
            "@type": "BlogPosting",
            headline: b.title,
            url: `${SITE}/blogs/${b.slug}`,
            datePublished: b.date,
          })),
        }),
      },
    ],
  }),
  component: BlogsPage,
});

function BlogsPage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main>
        <PageHero
          image={heroImg}
          imageAlt="Construction site with building materials and electrical works"
          title="Electrical & Building Material"
          highlight="Insights"
          description="Explore expert insights, product guides, industry trends, and practical information about electrical supplies, cables, building materials, and solutions for businesses across the UAE."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blogs" }]}
        />
        <section className="py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
            {blogs.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 70} className="h-full">
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
