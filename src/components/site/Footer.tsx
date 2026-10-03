import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { company, hasWhatsapp, mainNav, routes, whatsappLink } from "@/data/company";
import { categories } from "@/data/catalog";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-deep text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <Logo tone="light" />
          <p className="text-primary-foreground/70 mt-5 max-w-xs text-sm leading-relaxed">
            {company.supportingMessage}
          </p>
          {hasWhatsapp ? (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent mt-5 inline-flex items-center gap-2 text-sm font-semibold"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp Us
            </a>
          ) : null}
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-[0.16em] uppercase">Company</h3>
          <ul className="mt-5 space-y-3">
            {mainNav.map((item) => (
              <li key={item.label}>
                {item.href === routes.products ? (
                  <Link
                    to="/products"
                    className="text-primary-foreground/70 hover:text-accent text-sm transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={
                      item.href === routes.about || item.href === routes.contact
                        ? item.href
                        : `/${item.hash}`
                    }
                    className="text-primary-foreground/70 hover:text-accent text-sm transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-[0.16em] uppercase">Products</h3>
          <ul className="mt-5 space-y-3">
            {categories.slice(0, 8).map((c) => (
              <li key={c.id}>
                <Link
                  to="/products/$category"
                  params={{ category: c.slug }}
                  className="text-primary-foreground/70 hover:text-accent text-sm transition-colors duration-300"
                >
                  {c.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/products"
                className="text-accent text-sm font-semibold transition-colors duration-300"
              >
                View all products
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-[0.16em] uppercase">Contact</h3>
          <ul className="text-primary-foreground/70 mt-5 space-y-4 text-sm">
            <li className="text-primary-foreground font-semibold">{company.legalName}</li>
            <li className="flex items-start gap-3">
              <Phone className="text-accent mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <a href={`tel:${company.phoneTel}`} className="hover:text-accent">{company.phone}</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="text-accent mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <a href={`mailto:${company.email}`} className="hover:text-accent">{company.email}</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="text-accent mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              {company.address}
            </li>
            <li className="flex items-start gap-3">
              <Clock className="text-accent mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              {company.workingHours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-primary-foreground/10 border-t">
        <div className="text-primary-foreground/60 mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
          <p>{company.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
