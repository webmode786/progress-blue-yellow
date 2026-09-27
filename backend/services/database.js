import { pool } from "../config/database.js";

/** Parameterised insert — never concatenate user input into SQL. */
export async function saveSubmission(s, meta) {
  const [result] = await pool.execute(
    `INSERT INTO form_submissions
      (form_type, name, company_name, email, phone, whatsapp, product, product_id,
       product_name, category, quantity, message, source_page, ip_address, user_agent)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      s.formType, s.name, s.companyName ?? null, s.email, s.phone ?? null,
      s.whatsapp ?? null, s.product ?? null, s.productId ?? null, s.productName ?? null,
      s.category ?? null, s.quantity ?? null, s.message, s.sourcePage ?? null,
      meta.ip ?? null, meta.userAgent ?? null,
    ],
  );
  return result.insertId;
}
