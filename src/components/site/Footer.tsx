import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { company, mainNav, whatsappLink } from "@/data/company";
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
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent mt-5 inline-flex items-center gap-2 text-sm font-semibold"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp Us
          </a>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-[0.16em] uppercase">Company</h3>
          <ul className="mt-5 space-y-3">
            {mainNav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.hash}
                  className="text-primary-foreground/70 hover:text-accent text-sm transition-colors duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-[0.16em] uppercase">Products</h3>
          <ul className="mt-5 space-y-3">
            {categories.flatMap((c) =>
              c.subcategories.slice(0, 4).map((s) => (
                <li key={s.id}>
                  <a
                    href="#categories"
                    className="text-primary-foreground/70 hover:text-accent text-sm transition-colors duration-300"
                  >
                    {s.name}
                  </a>
                </li>
              )),
            )}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-[0.16em] uppercase">Contact</h3>
          <ul className="text-primary-foreground/70 mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="text-accent mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              {company.phone}
            </li>
            <li className="flex items-start gap-3">
              <Mail className="text-accent mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              {company.email}
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="text-accent mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              {company.address}
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
