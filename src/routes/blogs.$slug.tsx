import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronRight, Clock, Link2, Check } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { BlogCard } from "@/components/site/blog/BlogCard";
import { blogs, formatBlogDate, getBlog } from "@/data/blogs";
import { company } from "@/data/company";

const SITE = "https://skylinetradingfzc.com";

export const Route = createFileRoute("/blogs/$slug")({
  staticData: { sitemap: false },
  loader: ({ params }) => {
    const post = getBlog(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Article not found" }, { name: "robots", content: "noindex" }] };
    const p = loaderData.post;
    const url = `${SITE}/blogs/${params.slug}`;
    return {
      meta: [
        { title: p.metaTitle },
        { name: "description", content: p.metaDescription },
        { property: "og:title", content: p.metaTitle },
        { property: "og:description", content: p.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "article:published_time", content: p.date },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: p.title,
            description: p.metaDescription,
            datePublished: p.date,
            mainEntityOfPage: url,
            author: { "@type": "Organization", name: company.legalName },
            publisher: { "@type": "Organization", name: company.legalName },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE },
              { "@type": "ListItem", position: 2, name: "Blogs", item: `${SITE}/blogs` },
              { "@type": "ListItem", position: 3, name: p.title, item: url },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: BlogNotFound,
  component: BlogDetail,
});

function BlogNotFound() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="mx-auto max-w-3xl px-4 pt-40 pb-24 text-center">
        <h1 className="text-foreground text-3xl font-bold">Article not found</h1>
        <Link to="/blogs" className="text-primary mt-6 inline-block font-bold">Back to all blogs</Link>
      </main>
      <Footer />
    </div>
  );
}

function ShareBar({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false);
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  const items = [
    { label: "WhatsApp", href: `https://wa.me/?text=${t}%20${u}` },
    { label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}` },
    { label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${u}` },
    { label: "X", href: `https://twitter.com/intent/tweet?text=${t}&url=${u}` },
  ];
  const btn =
    "border-border hover:border-primary hover:text-primary inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-semibold transition-colors";
  return (
    <div className="border-border mt-12 border-t pt-8">
      <h2 className="text-foreground text-lg font-bold">Share This Article</h2>
      <div className="mt-4 flex flex-wrap gap-3">
        {items.map((i) => (
          <a key={i.label} href={i.href} target="_blank" rel="noopener noreferrer" className={btn} aria-label={`Share on ${i.label}`}>
            {i.label}
          </a>
        ))}
        <button
          type="button"
          className={btn}
          onClick={async () => {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
        >
          {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Link2 className="h-4 w-4" aria-hidden="true" />}
          {copied ? "Link copied" : "Copy Link"}
        </button>
      </div>
    </div>
  );
}

function BlogDetail() {
  const { post } = Route.useLoaderData();
  const url = `${SITE}/blogs/${post.slug}`;
  const related = blogs.filter((b) => b.slug !== post.slug).slice(0, 3);

  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-28 sm:pt-32">
        <article className="mx-auto max-w-3xl px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="text-muted-foreground flex flex-wrap items-center gap-1 text-sm">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-3 w-3" aria-hidden="true" />
            <Link to="/blogs" className="hover:text-primary">Blogs</Link>
            <ChevronRight className="h-3 w-3" aria-hidden="true" />
            <span className="text-foreground line-clamp-1">{post.title}</span>
          </nav>
          <p className="text-primary mt-8 text-xs font-semibold tracking-[0.18em] uppercase">{post.category}</p>
          <h1 className="text-foreground mt-3 text-3xl leading-tight font-bold text-balance sm:text-4xl">{post.title}</h1>
          <div className="text-muted-foreground mt-4 flex flex-wrap items-center gap-3 text-sm">
            <span>{company.legalName}</span>
            <span aria-hidden="true">•</span>
            <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" aria-hidden="true" /> {post.readMinutes} min read</span>
          </div>
          <img
            src={post.image}
            alt={post.imageAlt}
            width={1200}
            height={750}
            className="mt-8 aspect-[16/10] w-full rounded-lg object-cover"
          />
          <div className="text-foreground/90 mt-10 space-y-5 text-base leading-relaxed sm:text-lg">
            <p>{post.intro}</p>
            {post.sections.map((s) => (
              <section key={s.heading} className="space-y-4 pt-4">
                <h2 className="text-foreground text-2xl font-bold">{s.heading}</h2>
                {s.image ? (
                  <img src={s.image.src} alt={s.image.alt} loading="lazy" className="aspect-[16/9] w-full rounded-lg object-cover" />
                ) : null}
                {s.paragraphs.map((p) => <p key={p.slice(0, 30)}>{p}</p>)}
                {s.list ? (
                  <ul className="list-disc space-y-2 pl-6">
                    {s.list.map((li) => <li key={li}>{li}</li>)}
                  </ul>
                ) : null}
              </section>
            ))}
            <section className="space-y-4 pt-4">
              <h2 className="text-foreground text-2xl font-bold">Conclusion</h2>
              <p>{post.conclusion}</p>
            </section>
          </div>

          <div className="bg-secondary/60 mt-10 rounded-lg p-6 sm:p-8">
            <h2 className="text-foreground text-xl font-bold">Need electrical or building materials for your project?</h2>
            <p className="text-muted-foreground mt-2">Send us your requirements and our team will prepare a quotation.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="/contact-us#enquiry-form" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-5 py-2.5 text-sm font-bold">Request a Quote</a>
              {post.links.filter((l: { href: string }) => !l.href.includes("enquiry")).map((l: { label: string; href: string }) => (
                <a key={l.href} href={l.href} className="border-border hover:border-primary rounded-md border px-5 py-2.5 text-sm font-semibold">{l.label}</a>
              ))}
            </div>
          </div>

          <ShareBar title={post.title} url={url} />
        </article>

        <section className="bg-secondary/40 mt-20 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-foreground text-2xl font-bold sm:text-3xl">Related Articles</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((b) => <BlogCard key={b.slug} post={b} />)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
