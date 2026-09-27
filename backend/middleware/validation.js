import { z } from "zod";

/** Trims, strips control characters and collapses whitespace. */
const text = (max) =>
  z
    .string()
    .transform((s) => s.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim())
    .pipe(z.string().max(max));

const optional = (max) => text(max).optional().transform((v) => (v ? v : undefined));

const schema = z
  .object({
    formType: z.enum(["contact", "quote", "product-enquiry", "other"]),
    name: text(120).pipe(z.string().min(2)),
    email: text(190).pipe(z.string().email()).transform((e) => e.toLowerCase()),
    phone: text(40).pipe(z.string().regex(/^[+]?[\d\s()-]{7,20}$/)),
    message: text(5000).pipe(z.string().min(10)),
    companyName: optional(160),
    whatsapp: optional(40),
    product: optional(255),
    productId: optional(120),
    productName: optional(255),
    category: optional(120),
    quantity: optional(120),
    sourcePage: optional(500),
  })
  .strict();

export function validateSubmission(req, res, next) {
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      success: false,
      message: "Please check the form fields and try again.",
    });
  }
  req.submission = parsed.data;
  next();
}
