import { Reveal } from "../Reveal";

export function VisionSection() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <div className="text-primary mb-4 flex items-center gap-3 text-xs font-semibold tracking-[0.22em] uppercase">
            <span className="bg-accent h-0.5 w-8" aria-hidden="true" />
            Our Vision
          </div>
          <h2 className="font-display text-3xl leading-[1.12] font-bold text-balance sm:text-4xl">
            A Trusted Name in Building Material Supply
          </h2>
          <p className="text-muted-foreground mt-5 text-base leading-relaxed sm:text-lg">
            Our vision is to build long-term relationships with customers by
            combining quality products, dependable supply and professional service
            to support projects across construction, electrical, commercial and
            industrial sectors.
          </p>
        </Reveal>

        <Reveal delay={140}>
          <div className="border-border bg-secondary/50 relative overflow-hidden rounded-2xl border p-6">
            {/* Architectural blueprint illustration */}
            <svg
              viewBox="0 0 400 260"
              role="img"
              aria-label="Line illustration of a modern city skyline"
              className="h-auto w-full"
            >
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path
                    d="M20 0H0V20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-primary/15"
                  />
                </pattern>
              </defs>
              <rect width="400" height="260" fill="url(#grid)" />
              <g
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
                className="text-primary/70 draw-line"
              >
                <path d="M20 240h360" />
                <path d="M50 240V150h60v90" />
                <path d="M130 240V90h70v150" />
                <path d="M220 240V130h50v110" />
                <path d="M290 240V60h50v180" />
                <path d="M340 60l-25-25-25 25" />
              </g>
              <g className="text-accent" fill="currentColor">
                <rect x="63" y="168" width="10" height="10" />
                <rect x="147" y="112" width="10" height="10" />
                <rect x="236" y="152" width="10" height="10" />
                <rect x="305" y="86" width="10" height="10" />
              </g>
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
