/**
 * Shared form submission service — every site form posts through submitForm().
 * The API base URL comes from VITE_API_BASE_URL (e.g. https://api.your-domain.com).
 */

export type FormType = "contact" | "quote" | "product-enquiry" | "other";

export type FormPayload = {
  formType: FormType;
  name: string;
  email: string;
  phone: string;
  message: string;
  companyName?: string;
  whatsapp?: string;
  product?: string;
  productId?: string;
  productName?: string;
  category?: string;
  quantity?: string;
  sourcePage?: string;
};

export type SubmitResult = { success: boolean; message: string };

const FALLBACK_ERROR =
  "We couldn't submit your request right now. Please try again or contact us directly.";

/** Drops empty optional fields so non-product forms never send blank product data. */
function clean(payload: FormPayload) {
  return Object.fromEntries(
    Object.entries(payload).filter(([, v]) => typeof v === "string" && v.trim() !== ""),
  );
}

export async function submitForm(payload: FormPayload): Promise<SubmitResult> {
  const base = (import.meta.env.VITE_API_BASE_URL ?? "").replace(/\/+$/, "");
  if (!base) {
    console.error("VITE_API_BASE_URL is not configured");
    return { success: false, message: FALLBACK_ERROR };
  }
  const body = clean({
    ...payload,
    sourcePage: payload.sourcePage ?? window.location.pathname + window.location.search,
  });

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);
  try {
    const res = await fetch(`${base}/api/forms/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    const json = (await res.json().catch(() => null)) as SubmitResult | null;
    if (res.ok && json?.success) return json;
    return { success: false, message: json?.message || FALLBACK_ERROR };
  } catch {
    return { success: false, message: FALLBACK_ERROR };
  } finally {
    clearTimeout(timer);
  }
}
