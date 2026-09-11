import { createFileRoute } from "@tanstack/react-router";

import aboutHero from "@/assets/about-hero.jpg";
import { Header } from "@/components/site/Header";
import { PageHero } from "@/components/site/PageHero";
import { AboutIntro } from "@/components/site/about/AboutIntro";
import { ApproachSection } from "@/components/site/about/ApproachSection";
import { MissionSection } from "@/components/site/about/MissionSection";
import { VisionSection } from "@/components/site/about/VisionSection";
import { SupplySection } from "@/components/site/about/SupplySection";
import { ValuesSection } from "@/components/site/about/ValuesSection";
import { JourneySection } from "@/components/site/about/JourneySection";
import { IndustriesSection } from "@/components/site/IndustriesSection";
import { WhyChoose } from "@/components/site/WhyChoose";
import { StatsBand } from "@/components/site/StatsBand";
import { BrandsSection } from "@/components/site/BrandsSection";
import { QuoteCTA } from "@/components/site/QuoteCTA";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { aboutStats } from "@/data/about";
import { company } from "@/data/company";

const title =
  "About Skyline Building Material Trading | Building & Electrical Products";
const description =
  "Learn more about Skyline Building Material Trading and our approach to supplying building materials, electrical products and construction solutions.";

export const Route = createFileRoute("/about-us")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about-us" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about-us" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: title,
          description,
          about: {
            "@type": "Organization",
            name: company.name,
            slogan: company.tagline,
          },
        }),
      },
    ],
  }),
});

function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main>
        <PageHero
          image={aboutHero}
          imageAlt="Commercial construction site at sunset with cable reels and pipes in the foreground"
          title="Building Trust."
          highlight="Supplying Quality."
          description="Your trusted partner for electrical products, building materials and construction solutions."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        />
        <AboutIntro />
        <ApproachSection />
        <MissionSection />
        <VisionSection />
        <SupplySection />
        <IndustriesSection />
        <WhyChoose title="Why Choose Skyline?" />
        <StatsBand items={aboutStats} />
        <BrandsSection
          title="Brands & Product Partners"
          description="Selected brands we supply. Listings are updated as ranges are confirmed."
          showExplore
        />
        <ValuesSection />
        <JourneySection />
        <QuoteCTA
          title="Have a Product Requirement?"
          description="Tell us what you need and our team will help you find the right product for your project."
          quoteHref="/#enquiry"
        />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
