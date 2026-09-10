import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

type Props = {
  image: string;
  imageAlt: string;
  title: string;
  highlight?: string;
  description: string;
  breadcrumbs: Crumb[];
};

export function PageHero({
  image,
  imageAlt,
  title,
  highlight,
  description,
  breadcrumbs,
}: Props) {
  return (
    <section className="relative isolate flex min-h-[62vh] items-end overflow-hidden pt-28 pb-14 sm:min-h-[70vh] sm:pt-32 sm:pb-20">
      <img
        src={image}
        alt={imageAlt}
        width={1920}
        height={1080}
        fetchPriority="high"
        decoding="async"
        className="hero-zoom absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Breadcrumb"
          className="reveal reveal-in text-primary-foreground/75 text-xs font-semibold tracking-[0.18em] uppercase"
        >
          <ol className="flex flex-wrap items-center gap-2">
            {breadcrumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-2">
                {c.href ? (
                  <a
                    href={c.href}
                    className="hover:text-accent transition-colors duration-300"
                  >
                    {c.label}
                  </a>
                ) : (
                  <span className="text-accent" aria-current="page">
                    {c.label}
                  </span>
                )}
                {i < breadcrumbs.length - 1 ? (
                  <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />
                ) : null}
              </li>
            ))}
          </ol>
        </nav>

        <h1
          style={{ ["--reveal-delay" as string]: "120ms" }}
          className="reveal reveal-in text-primary-foreground font-display mt-6 max-w-3xl text-4xl leading-[1.05] font-extrabold text-balance sm:text-5xl lg:text-6xl"
        >
          {title}
          {highlight ? <span className="text-accent"> {highlight}</span> : null}
        </h1>

        <p
          style={{ ["--reveal-delay" as string]: "240ms" }}
          className="reveal reveal-in text-primary-foreground/80 mt-5 max-w-2xl text-base leading-relaxed sm:text-lg"
        >
          {description}
        </p>

        <span
          aria-hidden="true"
          style={{ ["--reveal-delay" as string]: "340ms" }}
          className="reveal reveal-in bg-accent mt-8 block h-1 w-24 rounded-full"
        />
      </div>
    </section>
  );
}
