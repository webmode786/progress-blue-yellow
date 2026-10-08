import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { hasWhatsapp, mainNav, routes, whatsappLink } from "@/data/company";
import { productCategories } from "@/data/products";
import { Logo } from "./Logo";

export function Header({ forceSolid = false }: { forceSolid?: boolean } = {}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  /** Pages that exist get real URLs; the rest fall back to homepage anchors. */
  const realPages: string[] = [routes.about, routes.products, routes.contact];
  const navHref = (item: { label: string; href: string; hash: string }) =>
    realPages.includes(item.href) ? item.href : isHome ? item.hash : `/${item.hash}`;
  const quoteHref = routes.contact;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /** Detail pages sit on a plain light background, so the header stays solid there. */
  const isBlogArticle = /^\/blogs\/[^/]+\/?$/.test(pathname);
  const isProductDetail = /^\/products\/[^/]+\/[^/]+\/?$/.test(pathname);
  const isSitemap = /^\/sitemap\/?$/.test(pathname);
  const solid = forceSolid || scrolled || open || isBlogArticle || isProductDetail || isSitemap;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,padding] duration-500 ease-out",
        solid
          ? "bg-background/95 supports-[backdrop-filter]:bg-background/85 py-3 shadow-[0_8px_30px_-18px_oklch(0.24_0.015_260/0.55)] backdrop-blur"
          : "bg-transparent py-5",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link to="/" aria-label="Skyline home" className="shrink-0">
          <Logo tone={solid ? "dark" : "light"} />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {mainNav.map((item) =>
            item.href === routes.products ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <Link
                  to="/products"
                  onFocus={() => setProductsOpen(true)}
                  aria-expanded={productsOpen}
                  className={cn(
                    "inline-flex items-center gap-1 py-1 text-sm font-semibold transition-colors duration-300",
                    solid
                      ? "text-foreground hover:text-primary"
                      : "text-primary-foreground/90 hover:text-primary-foreground",
                  )}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>

                <div
                  hidden={!productsOpen}
                  className="border-border bg-card absolute top-full left-1/2 z-50 mt-3 max-h-[70vh] w-[52rem] -translate-x-1/2 overflow-y-auto rounded-xl border p-3 shadow-[var(--shadow-card)]"
                >
                  <ul className="grid grid-cols-3 gap-1">
                    {productCategories.map((c) => (
                      <li key={c.id}>
                        <Link
                          to="/products/$category"
                          params={{ category: c.slug }}
                          onClick={() => setProductsOpen(false)}
                          className="hover:bg-secondary block rounded-lg px-3 py-2 transition-colors duration-200"
                        >
                          <span className="block text-sm font-semibold">{c.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/products"
                    onClick={() => setProductsOpen(false)}
                    className="text-primary mt-1 block px-3 py-2 text-sm font-bold"
                  >
                    View all products →
                  </Link>
                </div>
              </div>
            ) : (
              <a
                key={item.label}
                href={navHref(item)}
                className={cn(
                  "relative py-1 text-sm font-semibold transition-colors duration-300",
                  "after:bg-accent after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100",
                  solid
                    ? "text-foreground hover:text-primary"
                    : "text-primary-foreground/90 hover:text-primary-foreground",
                )}
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {hasWhatsapp ? (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className={cn(
                "hidden h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300 sm:flex",
                solid
                  ? "border-border text-primary hover:bg-secondary"
                  : "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10",
              )}
            >
              <MessageCircle className="h-[18px] w-[18px]" aria-hidden="true" />
            </a>
          ) : null}

          <a
            href={quoteHref}
            className="bg-accent text-accent-foreground hover:shadow-lift hidden h-10 items-center rounded-md px-4 text-sm font-bold whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5 sm:inline-flex sm:px-5"
          >
            Request a Quote
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-md border transition-colors lg:hidden",
              solid
                ? "border-border text-foreground"
                : "border-primary-foreground/30 text-primary-foreground",
            )}
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-border bg-background max-h-[80vh] overflow-y-auto border-t lg:hidden"
      >
        <nav aria-label="Mobile" className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <ul className="flex flex-col">
            {mainNav.map((item) => (
              <li key={item.label}>
                {item.href === routes.products ? (
                  <div className="border-border/70 border-b py-3">
                    <div className="flex items-center justify-between">
                      <Link
                        to="/products"
                        onClick={() => setOpen(false)}
                        className="text-foreground hover:text-primary text-base font-semibold"
                      >
                        Products
                      </Link>
                      <button
                        type="button"
                        onClick={() => setProductsOpen((v) => !v)}
                        aria-expanded={productsOpen}
                        aria-label="Toggle product categories"
                        className="text-muted-foreground inline-flex h-8 w-8 items-center justify-center"
                      >
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform duration-300",
                            productsOpen && "rotate-180",
                          )}
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                    <ul hidden={!productsOpen} className="mt-2 space-y-1 pl-3">
                      {productCategories.map((c) => (
                        <li key={c.id}>
                          <Link
                            to="/products/$category"
                            params={{ category: c.slug }}
                            onClick={() => setOpen(false)}
                            className="text-muted-foreground hover:text-primary block py-2 text-sm font-medium"
                          >
                            {c.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <a
                    href={navHref(item)}
                    onClick={() => setOpen(false)}
                    className="border-border/70 text-foreground hover:text-primary block border-b py-3 text-base font-semibold"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <a
            href={quoteHref}
            onClick={() => setOpen(false)}
            className="bg-accent text-accent-foreground mt-5 flex h-11 items-center justify-center rounded-md px-5 text-sm font-bold sm:hidden"
          >
            Request a Quote
          </a>
          {hasWhatsapp ? (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="text-primary mt-4 inline-flex items-center gap-2 text-sm font-semibold"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp Us
            </a>
          ) : null}
        </nav>
      </div>
    </header>
  );
}
