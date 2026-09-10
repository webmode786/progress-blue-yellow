import aboutIntro from "@/assets/about-intro.jpg";
import { Reveal } from "../Reveal";

export function AboutIntro() {
  return (
    <section id="about" className="bg-background scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={aboutIntro}
              alt="Shelves of cables, conduits, switchgear and hardware in a building materials store"
              width={1200}
              height={1400}
              loading="lazy"
              decoding="async"
              className="h-[380px] w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-105 sm:h-[520px]"
            />
          </div>
          <span
            aria-hidden="true"
            className="bg-accent absolute -bottom-4 -left-4 hidden h-24 w-24 rounded-2xl sm:block"
          />
        </Reveal>

        <Reveal delay={140}>
          <div className="text-primary mb-4 flex items-center gap-3 text-xs font-semibold tracking-[0.22em] uppercase">
            <span className="bg-accent h-0.5 w-8" aria-hidden="true" />
            About Skyline
          </div>
          <h2 className="font-display text-3xl leading-[1.12] font-bold text-balance sm:text-4xl">
            A Reliable Partner for Your Building &amp; Electrical Requirements
          </h2>
          <div className="text-muted-foreground mt-6 space-y-4 text-base leading-relaxed">
            <p>
              Skyline Building Material Trading is focused on providing quality
              products and dependable supply solutions for construction,
              electrical, commercial and industrial requirements.
            </p>
            <p>
              We understand that every project requires the right products,
              reliable sourcing and responsive service. Our goal is to make
              product procurement easier by bringing together a diverse range of
              building materials and electrical products under one trusted
              supplier.
            </p>
            <p>
              From individual requirements to larger project needs, we aim to
              provide practical product solutions backed by professional customer
              service.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
