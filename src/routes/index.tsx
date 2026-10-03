import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { IntroSection } from "@/components/site/IntroSection";
import { CategorySection } from "@/components/site/CategorySection";
import { FeaturedProducts } from "@/components/site/FeaturedProducts";
import { StatsBand } from "@/components/site/StatsBand";
import { WhyChoose } from "@/components/site/WhyChoose";
import { BrandsSection } from "@/components/site/BrandsSection";
import { IndustriesSection } from "@/components/site/IndustriesSection";
import { QuoteCTA } from "@/components/site/QuoteCTA";
import { EnquirySection } from "@/components/site/EnquirySection";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { company } from "@/data/company";

const title = "Skyline Building Material Trading | Electrical & Building Materials";
const description =
  "Supplier of quality electrical products, building materials and construction supplies for contractors, developers and businesses. Request a quote today.";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: company.name,
          slogan: company.tagline,
          description,
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main>
        <Hero />
        <IntroSection />
        <CategorySection />
        <FeaturedProducts />
        <WhyChoose />
        <BrandsSection />
        <StatsBand />
        <IndustriesSection />
        <QuoteCTA />
        <EnquirySection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
