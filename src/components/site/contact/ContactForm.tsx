import { useEffect, useRef, useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Paperclip, AlertTriangle } from "lucide-react";
import { productCategories } from "@/data/products";
import { submitForm } from "@/lib/api";

type FieldName =
  | "fullName"
  | "companyName"
  | "email"
  | "phone"
  | "message";

type Errors = Partial<Record<FieldName, string>>;

const fieldClass =
  "border-border bg-background focus:border-primary w-full rounded-md border px-4 py-3 text-sm outline-none transition-colors duration-300";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phonePattern = /^[+]?[\d\s()-]{7,20}$/;

/**
 * Enquiry form for the Contact Us page.
 *
 * Pre-fills product, product code and category from the URL so a
 * "Request a Quote" click on a product page arrives ready to send.
 * Submission is handled in the browser — connect it to a backend or inbox
 * when one is available.
 */
export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [product, setProduct] = useState("");
  const [productCode, setProductCode] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [errorText, setErrorText] = useState(
    "We couldn't submit your request right now. Please try again or contact us directly.",
  );
  const startedAt = useRef(Date.now());

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const p = params.get("product") ?? "";
    const code = params.get("code") ?? "";
    const cat = params.get("category") ?? "";
    if (p) setProduct(p);
    if (code) setProductCode(code);
    if (cat) setCategory(cat);
    if (p) {
      setMessage(
        `Product Enquiry: ${p}${code ? ` — ${code}` : ""}\n\nPlease share price, availability and lead time.`,
      );
    }
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    // Honeypot + minimum time on page: basic bot protection.
    if (get("website") || Date.now() - startedAt.current < 2000) {
      setStatus("error");
      return;
    }

    const next: Errors = {};
    if (get("fullName").length < 2) next.fullName = "Please enter your full name.";
    if (get("companyName").length < 2)
      next.companyName = "Please enter your company name.";
    if (!emailPattern.test(get("email")))
      next.email = "Please enter a valid email address.";
    if (!phonePattern.test(get("phone")))
      next.phone = "Please enter a valid phone or WhatsApp number.";
    if (get("message").length < 10)
      next.message = "Please tell us a little more about your requirement.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    if (status === "sending") return;
    setStatus("sending");
    const productName = get("product");
    const result = await submitForm({
      formType: productName ? "product-enquiry" : "contact",
      name: get("fullName"),
      companyName: get("companyName"),
      email: get("email"),
      phone: get("phone"),
      message: get("message"),
      product: productName,
      productName,
      productId: get("productCode"),
      category: get("category"),
      quantity: get("quantity"),
    });
    if (!result.success) {
      setErrorText(result.message);
      setStatus("error");
      return;
    }
    setStatus("sent");
    form.reset();
    setMessage("");
    setProduct("");
    setProductCode("");
    setCategory("");
  }

  if (status === "sent") {
    return (
      <div className="border-border bg-card rounded-xl border p-8 shadow-[var(--shadow-card)] sm:p-10">
        <CheckCircle2 className="text-whatsapp h-10 w-10" aria-hidden="true" />
        <h2 className="mt-4 text-xl font-bold">Thank you — enquiry received</h2>
        <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
          Your details have been captured. Our team will review the requirement and
          come back to you with pricing and availability.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-primary mt-6 text-sm font-bold"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="border-border bg-card rounded-xl border p-6 shadow-[var(--shadow-card)] sm:p-9">
      <h2 className="text-xl font-bold">Send us an enquiry</h2>
      <p className="text-muted-foreground mt-2 text-sm">
        Fields marked with * are required.
      </p>

      {status === "error" ? (
        <p
          role="alert"
          className="border-destructive/40 bg-destructive/10 text-destructive mt-5 flex items-start gap-2 rounded-md border p-3 text-sm"
        >
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          {errorText}
        </p>
      ) : null}

      <form noValidate onSubmit={onSubmit} className="mt-6 grid gap-5">
        <div aria-hidden="true" className="hidden">
          <label htmlFor="website">Leave this field empty</label>
          <input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            id="fullName"
            label="Full Name *"
            error={errors.fullName}
            autoComplete="name"
          />
          <Field
            id="companyName"
            label="Company Name *"
            error={errors.companyName}
            autoComplete="organization"
          />
          <Field
            id="email"
            label="Email Address *"
            type="email"
            error={errors.email}
            autoComplete="email"
          />
          <Field
            id="phone"
            label="Phone / WhatsApp Number *"
            type="tel"
            error={errors.phone}
            autoComplete="tel"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="product" className="mb-2 block text-sm font-semibold">
              Product <span className="text-muted-foreground">(optional)</span>
            </label>
            <input
              id="product"
              name="product"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="productCode" className="mb-2 block text-sm font-semibold">
              Product Code <span className="text-muted-foreground">(optional)</span>
            </label>
            <input
              id="productCode"
              name="productCode"
              value={productCode}
              onChange={(e) => setProductCode(e.target.value)}
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="category" className="mb-2 block text-sm font-semibold">
              Category <span className="text-muted-foreground">(optional)</span>
            </label>
            <select
              id="category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={fieldClass}
            >
              <option value="">Select a category</option>
              {productCategories.map((c) => (
                <option key={c.id} value={c.slug}>
                  {c.name}
                </option>
              ))}
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="quantity" className="mb-2 block text-sm font-semibold">
              Quantity Required{" "}
              <span className="text-muted-foreground">(optional)</span>
            </label>
            <input
              id="quantity"
              name="quantity"
              inputMode="numeric"
              placeholder="e.g. 500 m, 20 pcs"
              className={fieldClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-semibold">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={fieldClass}
            placeholder="Products, quantities, specifications, delivery location and timeline."
          />
          {errors.message ? (
            <p className="text-destructive mt-1.5 text-xs">{errors.message}</p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="attachment"
            className="mb-2 flex items-center gap-2 text-sm font-semibold"
          >
            <Paperclip className="h-4 w-4" aria-hidden="true" />
            Attachment{" "}
            <span className="text-muted-foreground font-normal">
              (optional — BOQ or product list)
            </span>
          </label>
          <input
            id="attachment"
            name="attachment"
            type="file"
            accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,.jpg,.jpeg,.png"
            className="border-border file:bg-secondary file:text-secondary-foreground w-full rounded-md border px-4 py-2.5 text-sm file:mr-4 file:rounded file:border-0 file:px-3 file:py-1.5 file:text-xs file:font-semibold"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-accent text-accent-foreground hover:shadow-lift inline-flex h-13 items-center justify-center gap-2 rounded-md px-7 text-base font-bold transition-all duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            "Submit Enquiry"
          )}
        </button>
      </form>
    </div>
  );
}

function Field({
  id,
  label,
  error,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  type?: string | undefined;
  autoComplete?: string | undefined;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        className={fieldClass}
      />
      {error ? <p className="text-destructive mt-1.5 text-xs">{error}</p> : null}
    </div>
  );
}
