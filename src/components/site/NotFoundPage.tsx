import { Link } from "@tanstack/react-router";
import { ArrowRight, Cable, Fan, Home, Lightbulb, MessageCircle, Package, Plug, Wrench, Building2 } from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = [
  { name: "Electrical Cables", slug: "rubber-pvc-armoured-cables", icon: Cable },
  { name: "Cable Glands & Lugs", slug: "cable-termination", icon: Plug },
  { name: "Cable Ties & Accessories", slug: "cable-management-jointing-led-lighting", icon: Wrench },
  { name: "Lighting & Lamps", slug: "lighting-lamps", icon: Lightbulb },
  { name: "Fans, Ventilation & HVAC", slug: "fans-ventilation-hvac", icon: Fan },
  { name: "Building Materials", slug: "building-materials-paints-chemicals", icon: Building2 },
];

const whatsapp = "https://wa.me/971589187575";

export function NotFoundPage() {
  return (
    <>
      <title>Page Not Found | Skyline Building Material Trading FZC</title>
      <meta name="robots" content="noindex, follow" />
      <meta
        name="description"
        content="The page you are looking for could not be found. Browse Skyline's electrical products and building materials or contact our team."
      />
      <Header forceSolid />
      <main className="bg-background pt-28 md:pt-32">
        <section className="container mx-auto px-4 pb-16 text-center">
          <div aria-hidden="true" className="relative mx-auto flex max-w-xl items-center justify-center">
            <div className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-gradient-to-r from-transparent via-accent to-transparent" />
            <span className="relative bg-background px-6 font-display text-[6rem] font-black leading-none tracking-tight text-primary sm:text-[9rem]">
              4<span className="text-accent">0</span>4
            </span>
          </div>
          <h1 className="mt-6 font-display text-3xl font-bold text-foreground sm:text-4xl">Page Not Found</h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Sorry, the page you're looking for doesn't exist or may have been moved. Let's get you back to the right place.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/" className={cn(buttonVariants({ size: "lg" }), "h-12")}>
              <Home /> Back to Homepage
            </Link>
            <Link to="/products" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "h-12")}>
              <Package /> Browse Products
            </Link>
          </div>

          <nav aria-label="Helpful links" className="mt-12">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">Looking for something specific?</h2>
            <ul className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-6">
              <li><Link to="/products" className="font-medium text-primary hover:underline">Products</Link></li>
              <li><Link to="/about-us" className="font-medium text-primary hover:underline">About Us</Link></li>
              <li><Link to="/contact-us" className="font-medium text-primary hover:underline">Contact Us</Link></li>
              <li><Link to="/contact-us" hash="enquiry" className="font-medium text-primary hover:underline">Request a Quote</Link></li>
            </ul>
          </nav>
        </section>

        <section className="border-t bg-muted/40 py-14">
          <div className="container mx-auto px-4">
            <h2 className="text-center font-display text-2xl font-bold text-foreground">Explore Our Products</h2>
            <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map(({ name, slug, icon: Icon }) => (
                <li key={slug}>
                  <Link
                    to="/products/$category"
                    params={{ category: slug }}
                    className="group flex items-center gap-4 rounded-lg border bg-card p-4 transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="flex-1 font-semibold text-foreground">{name}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-14">
          <div className="container mx-auto max-w-3xl rounded-xl bg-primary px-6 py-10 text-center text-primary-foreground">
            <h2 className="font-display text-2xl font-bold">Need Help Finding the Right Product?</h2>
            <p className="mx-auto mt-3 max-w-2xl opacity-90">
              Our team can help you find the right electrical and building materials for your project. Contact Skyline Building Material Trading FZC for product information, availability and competitive pricing.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/contact-us" hash="enquiry" className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-accent px-6 font-semibold text-accent-foreground hover:opacity-90">
                Request a Quote
              </Link>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-primary-foreground/40 px-6 font-semibold hover:bg-primary-foreground/10">
                <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
