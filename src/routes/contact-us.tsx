import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone, Building2 } from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/contact/ContactForm";
import { company, hasWhatsapp, whatsappLink } from "@/data/company";
import contactHero from "@/assets/contact-hero.jpg";

const title = "Contact Us | Skyline Building Material Trading FZC";
const description =
  "Contact Skyline Building Material Trading FZC for building materials and electrical products in the UAE. Send your BOQ or product list and get a quotation.";

export const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact-us" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact-us" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: title,
          description,
          about: {
            "@type": "Organization",
            name: company.legalName,
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

const details = [
  { icon: Building2, label: "Company", value: company.legalName },
  { icon: Phone, label: "Phone", value: company.phone },
  { icon: MessageCircle, label: "WhatsApp", value: company.whatsappDisplay },
  { icon: Mail, label: "Email", value: company.email },
  { icon: MapPin, label: "Address", value: company.address },
  { icon: Clock, label: "Business Hours", value: company.workingHours },
];

function ContactPage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main>
        <PageHero
          image={contactHero}
          imageAlt="Skyline Building Material Trading FZC trading office and material yard"
          title="Let's Build"
          highlight="Something Together"
          description="Have a product requirement or need a quotation? Get in touch with Skyline Building Material Trading FZC and our team will be happy to assist you."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
        />

        <section className="py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:px-8">
            <div>
              <span className="text-primary text-xs font-bold tracking-[0.18em] uppercase">
                Contact Information
              </span>
              <h2 className="font-display mt-3 text-3xl font-extrabold sm:text-4xl">
                Talk to our team
              </h2>
              <p className="text-muted-foreground mt-4 text-base leading-relaxed">
                Share your BOQ or product list and we'll respond with pricing,
                availability and lead times.
              </p>

              <ul className="mt-10 space-y-5">
                {details.map(({ icon: Icon, label, value }) => (
                  <Reveal key={label} delay={60}>
                    <li className="flex items-start gap-4">
                      <span className="bg-card text-primary border-border inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <div className="text-muted-foreground text-xs font-semibold tracking-[0.16em] uppercase">
                          {label}
                        </div>
                        <div className="mt-1 text-sm font-semibold">{value}</div>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ul>

              {hasWhatsapp ? (
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-whatsapp text-primary-foreground hover:shadow-lift mt-10 inline-flex h-12 items-center gap-2 rounded-md px-6 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              ) : null}
            </div>

            <Reveal delay={120}>
              <ContactForm />
            </Reveal>
          </div>
        </section>

        <section className="bg-secondary/60 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
              Find us
            </h2>
            <div className="border-border bg-card mt-6 overflow-hidden rounded-xl border">
              {company.mapEmbedUrl ? (
                <iframe
                  src={company.mapEmbedUrl}
                  title={`Location map for ${company.legalName}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[420px] w-full border-0"
                />
              ) : (
                <div className="flex h-[260px] flex-col items-center justify-center gap-3 px-6 text-center">
                  <MapPin className="text-primary h-8 w-8" aria-hidden="true" />
                  <p className="text-sm font-semibold">
                    Map will appear here once the address is confirmed.
                  </p>
                  <p className="text-muted-foreground max-w-md text-sm">
                    Add the Google Maps embed link in the site configuration and this
                    section shows the location automatically.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
