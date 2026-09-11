import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { mainNav, routes, whatsappLink } from "@/data/company";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  /** Pages that exist get real URLs; the rest fall back to homepage anchors. */
  const navHref = (item: { href: string; hash: string }) =>
    item.href === routes.about
      ? routes.about
      : isHome
        ? item.hash
        : `/${item.hash}`;
  const quoteHref = isHome ? "#enquiry" : "/#enquiry";

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

  const solid = scrolled || open;

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
        <a href="#top" aria-label={`${"Skyline"} home`} className="shrink-0">
          <Logo tone={solid ? "dark" : "light"} />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {mainNav.map((item) => (
            <a
              key={item.label}
              href={item.hash}
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
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
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

          <a
            href="#enquiry"
            className="bg-accent text-accent-foreground hover:shadow-lift inline-flex h-10 items-center rounded-md px-4 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 sm:px-5"
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
        className="border-border bg-background overflow-hidden border-t lg:hidden"
      >
        <nav aria-label="Mobile" className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <ul className="flex flex-col">
            {mainNav.map((item, i) => (
              <li key={item.label}>
                <a
                  href={item.hash}
                  onClick={() => setOpen(false)}
                  style={{ ["--reveal-delay" as string]: `${i * 40}ms` }}
                  className={cn(
                    "border-border/70 text-foreground hover:text-primary block border-b py-3 text-base font-semibold",
                    open && "reveal reveal-in",
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
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
        </nav>
      </div>
    </header>
  );
}
