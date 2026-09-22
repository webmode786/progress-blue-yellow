import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const points = ["Electrical Products", "Building Materials", "Project Supply"];

export function Hero() {
  return (
    <section
      id="top"
      className="bg-primary-deep relative isolate flex min-h-[92svh] items-center overflow-hidden"
    >
      <img
        src={heroImage}
        alt="Steel frame structure and stacked building materials on a modern construction site at sunset"
        width={1920}
        height={1088}
        fetchPriority="high"
        decoding="async"
        className="hero-zoom absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div
        aria-hidden="true"
        className="bg-accent/15 float-slow absolute -top-24 right-[-6rem] h-72 w-72 rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="border-primary-foreground/10 absolute inset-y-0 left-1/2 hidden w-px border-l lg:block"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-32 pb-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div
            className="reveal reveal-in text-primary-foreground/80 mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.7rem] font-semibold tracking-[0.2em] uppercase"
            style={{ ["--reveal-delay" as string]: "80ms" }}
          >
            {points.map((p) => (
              <span key={p} className="flex items-center gap-2">
                <span className="bg-accent h-1.5 w-1.5 rounded-full" aria-hidden="true" />
                {p}
              </span>
            ))}
          </div>

          <h1
            className="reveal reveal-in text-primary-foreground font-display text-4xl leading-[1.05] font-extrabold text-balance sm:text-6xl lg:text-7xl"
            style={{ ["--reveal-delay" as string]: "180ms" }}
          >
            Skyline Building Material
            <br />
            <span className="text-accent">&amp; Electrical</span> Trading
          </h1>

          <p
            className="reveal reveal-in text-primary-foreground font-display mt-5 text-lg font-bold tracking-tight sm:text-2xl"
            style={{ ["--reveal-delay" as string]: "260ms" }}
          >
            Building Quality. <span className="text-accent">Powering Progress.</span>
          </p>

          <p
            className="reveal reveal-in text-primary-foreground/80 mt-4 max-w-xl text-base leading-relaxed sm:text-lg"
            style={{ ["--reveal-delay" as string]: "320ms" }}
          >
            Quality building materials and electrical products for construction,
            commercial and industrial requirements.
          </p>

          <div
            className="reveal reveal-in mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ ["--reveal-delay" as string]: "440ms" }}
          >
            <a
              href="#categories"
              className="group bg-accent text-accent-foreground hover:shadow-lift inline-flex h-13 items-center justify-center gap-2 rounded-md px-7 text-base font-bold transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore Products
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <a
              href="#enquiry"
              className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 inline-flex h-13 items-center justify-center rounded-md border px-7 text-base font-semibold transition-colors duration-300"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="from-background absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t to-transparent"
      />
    </section>
  );
}
