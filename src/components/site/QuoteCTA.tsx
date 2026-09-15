import { ArrowRight, MessageCircle } from "lucide-react";
import { hasWhatsapp, routes, whatsappLink } from "@/data/company";
import { Reveal } from "./Reveal";

type Props = {
  title?: string;
  description?: string;
  /** Where "Request a Quote" points — defaults to the Contact Us page. */
  quoteHref?: string;
};

export function QuoteCTA({
  title = "Need a price for your next project?",
  description = "Send us your requirement list and our team will come back with a quotation and availability.",
  quoteHref = routes.contact,
}: Props) {
  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24"
      style={{ background: "var(--gradient-brand)" }}
    >
      <div
        aria-hidden="true"
        className="bg-accent/15 float-slow absolute -top-20 right-[-5rem] h-72 w-72 rounded-full blur-3xl"
      />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="text-primary-foreground font-display text-3xl leading-tight font-extrabold text-balance sm:text-4xl">
            {title}
          </h2>
          <p className="text-primary-foreground/80 mt-4 text-base leading-relaxed sm:text-lg">
            {description}
          </p>
        </Reveal>

        <Reveal delay={140} className="flex flex-col gap-3 sm:flex-row">
          <a
            href={quoteHref}
            className="bg-accent text-accent-foreground hover:shadow-lift inline-flex h-12 items-center justify-center gap-2 rounded-md px-6 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5"
          >
            Request a Quote
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border-primary-foreground/35 text-primary-foreground hover:bg-primary-foreground/10 inline-flex h-12 items-center justify-center gap-2 rounded-md border px-6 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp Us
          </a>
        </Reveal>
      </div>
    </section>
  );
}
