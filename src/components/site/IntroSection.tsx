import { company } from "@/data/company";
import { Reveal } from "./Reveal";

const pillars = [
  {
    title: "Electrical Supply",
    text: "Cables, boards, accessories and lighting for installation and maintenance scopes.",
  },
  {
    title: "Building Materials",
    text: "Construction materials, hardware, tools and site consumables in one place.",
  },
  {
    title: "Project Support",
    text: "Enquiry-to-delivery support for contractors, developers and businesses.",
  },
];

export function IntroSection() {
  return (
    <section id="about" className="bg-background scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-20 lg:px-8">
        <Reveal>
          <div className="text-primary mb-4 flex items-center gap-3 text-xs font-semibold tracking-[0.22em] uppercase">
            <span className="bg-accent h-0.5 w-8" aria-hidden="true" />
            Who We Are
          </div>
          <h2 className="text-3xl leading-[1.12] font-bold text-balance sm:text-4xl lg:text-[2.6rem]">
            A trading partner built around how projects actually buy.
          </h2>
          <p className="text-muted-foreground mt-6 text-base leading-relaxed sm:text-lg">
            {company.supportingMessage} We supply contractors, construction companies,
            developers, maintenance teams and businesses across electrical and
            building-material requirements.
          </p>
          <p className="text-muted-foreground mt-4 text-base leading-relaxed">
            Tell us the requirement and our team helps identify the right product,
            category and quantity for the job.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:gap-5">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={120 + i * 120}>
              <div className="border-border bg-card hover:border-accent group relative overflow-hidden rounded-lg border p-6 transition-colors duration-300 sm:p-7">
                <span
                  aria-hidden="true"
                  className="bg-accent absolute inset-y-0 left-0 w-0.5 origin-top scale-y-0 transition-transform duration-500 group-hover:scale-y-100"
                />
                <h3 className="text-lg font-bold">{p.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
