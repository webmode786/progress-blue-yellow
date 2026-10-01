import { useEffect, useState, type FormEvent } from "react";
import { CheckCircle2, Mail, MapPin, Phone, Clock, Loader2, MessageCircle } from "lucide-react";
import { company, hasWhatsapp, whatsappEnquiryLink } from "@/data/company";
import { categories } from "@/data/catalog";
import { submitForm } from "@/lib/api";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

type Errors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

const fieldClass =
  "border-border bg-background focus:border-primary w-full rounded-md border px-4 py-3 text-sm outline-none transition-colors duration-300";

export function EnquirySection() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [message, setMessage] = useState("");

  /** Pre-fills the requirement when arriving from a product "Request a Quote". */
  useEffect(() => {
    const product = new URLSearchParams(window.location.search).get("product");
    if (product) {
      setMessage(
        `I would like a quotation for: ${product}. Please share price and availability.`,
      );
    }
  }, []);


  function onWhatsapp(e: React.MouseEvent<HTMLButtonElement>) {
    const form = e.currentTarget.form;
    if (!form) return;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const next: Errors = {};
    if (get("name").length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(get("email")))
      next.email = "Please enter a valid email address.";
    if (get("phone").replace(/\D/g, "").length < 7)
      next.phone = "Please enter a valid phone number.";
    if (get("message").length < 10)
      next.message = "Please tell us a little more about your requirement.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    const slug = get("category");
    window.open(
      whatsappEnquiryLink({
        name: get("name"),
        company: get("company"),
        email: get("email"),
        phone: get("phone"),
        product: new URLSearchParams(window.location.search).get("product") ?? "",
        category: categories.find((c) => c.slug === slug)?.name ?? slug,
        message: get("message"),
      }),
      "_blank",
      "noopener,noreferrer",
    );
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (name.length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
      next.email = "Please enter a valid email address.";
    if (phone.replace(/\D/g, "").length < 7)
      next.phone = "Please enter a valid phone number.";
    if (message.length < 10)
      next.message = "Please tell us a little more about your requirement.";

    setErrors(next);
    setSubmitError("");
    if (Object.keys(next).length > 0) return;

    setSending(true);
    const product = new URLSearchParams(window.location.search).get("product") ?? "";
    const result = await submitForm({
      formType: product ? "product-enquiry" : "quote",
      name,
      email,
      phone,
      message,
      companyName: String(data.get("company") ?? "").trim(),
      category: String(data.get("category") ?? ""),
      product,
      productName: product,
    });
    setSending(false);
    if (!result.success) {
      setSubmitError(result.message);
      return;
    }
    setSent(true);
    setMessage("");
    form.reset();
  }

  return (
    <section id="enquiry" className="bg-secondary/60 scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-16 lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Get in Touch"
            title="Request a Quote"
            description="Share your requirement and our team will respond with pricing and availability."
          />

          <Reveal delay={140} className="mt-10 space-y-5">
            {[
              { icon: Phone, label: "Phone", value: company.phone },
              { icon: Mail, label: "Email", value: company.email },
              { icon: MapPin, label: "Address", value: company.address },
              { icon: Clock, label: "Working Hours", value: company.workingHours },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <span className="bg-card text-primary border-border inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <div className="text-xs font-semibold tracking-[0.16em] uppercase text-muted-foreground">
                    {label}
                  </div>
                  <div className="mt-1 text-sm font-semibold">{value}</div>
                </div>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="border-border bg-card rounded-xl border p-6 shadow-[var(--shadow-card)] sm:p-9">
            {sent ? (
              <div className="flex flex-col items-start gap-4 py-10">
                <CheckCircle2 className="text-whatsapp h-10 w-10" aria-hidden="true" />
                <h3 className="text-xl font-bold">Thank you — enquiry received</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Your details have been captured. Our team will get back to you
                  shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="text-primary text-sm font-bold"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form noValidate onSubmit={onSubmit} className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-semibold">
                      Full Name
                    </label>
                    <input id="name" name="name" className={fieldClass} />
                    {errors.name ? (
                      <p className="text-destructive mt-1.5 text-xs">{errors.name}</p>
                    ) : null}
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Company <span className="text-muted-foreground">(optional)</span>
                    </label>
                    <input id="company" name="company" className={fieldClass} />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={fieldClass}
                    />
                    {errors.email ? (
                      <p className="text-destructive mt-1.5 text-xs">{errors.email}</p>
                    ) : null}
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-semibold">
                      Phone
                    </label>
                    <input id="phone" name="phone" type="tel" className={fieldClass} />
                    {errors.phone ? (
                      <p className="text-destructive mt-1.5 text-xs">{errors.phone}</p>
                    ) : null}
                  </div>
                </div>

                <div>
                  <label htmlFor="category" className="mb-2 block text-sm font-semibold">
                    Product Category
                  </label>
                  <select id="category" name="category" className={fieldClass}>
                    <option value="">Select a category</option>
                    {categories.map((c) => (
                      <option key={c.id} value={c.slug}>
                        {c.name}
                      </option>
                    ))}
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-semibold">
                    Your Requirement
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={fieldClass}
                    placeholder="Products, quantities, delivery location and timeline."
                  />
                  {errors.message ? (
                    <p className="text-destructive mt-1.5 text-xs">{errors.message}</p>
                  ) : null}
                </div>

                {submitError ? (
                  <p role="alert" className="text-destructive text-sm">
                    {submitError}
                  </p>
                ) : null}
                <button
                  type="submit"
                  disabled={sending}
                  className="bg-accent text-accent-foreground hover:shadow-lift inline-flex h-13 items-center justify-center gap-2 rounded-md px-7 text-base font-bold transition-all duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {sending ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                      Sending…
                    </>
                  ) : (
                    "Send Enquiry"
                  )}
                </button>
                {hasWhatsapp ? (
                  <button
                    type="button"
                    onClick={onWhatsapp}
                    className="bg-whatsapp text-primary-foreground hover:shadow-lift -mt-2 inline-flex h-13 items-center justify-center gap-2 rounded-md px-7 text-base font-bold transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Send via WhatsApp
                  </button>
                ) : null}
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
