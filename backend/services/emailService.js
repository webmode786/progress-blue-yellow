import nodemailer from "nodemailer";

const COMPANY = "Skyline Building Material Trading FZC";
const LABELS = {
  quote: "Request Quote",
  contact: "Contact Us",
  "product-enquiry": "Product Enquiry",
  other: "Other",
};

let transporter;
function getTransporter() {
  transporter ??= nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 465,
    secure: String(process.env.SMTP_SECURE) !== "false",
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD },
  });
  return transporter;
}

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

/** Only rows with a value are shown. */
function rows(pairs) {
  const present = pairs.filter(([, v]) => v);
  return {
    html: present
      .map(([k, v]) => `<tr><td style="padding:6px 12px;font-weight:bold;vertical-align:top">${esc(k)}</td><td style="padding:6px 12px;white-space:pre-wrap">${esc(v)}</td></tr>`)
      .join(""),
    text: present.map(([k, v]) => `${k}: ${v}`).join("\n"),
  };
}

export async function sendEmails(s, submittedAt) {
  const label = LABELS[s.formType] || s.formType;
  const product = s.productName || s.product;
  const customer = rows([
    ["Name", s.name], ["Company", s.companyName], ["Email", s.email], ["Phone", s.phone],
    ["WhatsApp", s.whatsapp], ["Product / Requirement", product], ["Category", s.category],
    ["Quantity", s.quantity], ["Message", s.message],
  ]);
  const admin = rows([
    ["Form Type", label], ["Name", s.name], ["Company", s.companyName], ["Email", s.email],
    ["Phone", s.phone], ["WhatsApp", s.whatsapp], ["Product", product],
    ["Product ID", s.productId], ["Category", s.category], ["Quantity", s.quantity],
    ["Message", s.message], ["Source Page", s.sourcePage], ["Submitted At", submittedAt],
  ]);
  const t = getTransporter();
  const from = process.env.SMTP_FROM || process.env.SMTP_USER;

  const results = await Promise.allSettled([
    t.sendMail({
      from,
      to: s.email,
      replyTo: process.env.ADMIN_EMAIL,
      subject: `Thank You for Contacting ${COMPANY}`,
      text: `Dear ${s.name},\n\nThank you for contacting ${COMPANY}. We have received your request and our team will contact you shortly.\n\n${customer.text}\n\nRegards,\n${COMPANY}`,
      html: `<div style="font-family:Arial,sans-serif;color:#1a1a1a"><h2 style="color:#1043a8">${COMPANY}</h2><p>Dear ${esc(s.name)},</p><p>Thank you for contacting us. We have received your request and our team will contact you shortly.</p><table style="border-collapse:collapse;border:1px solid #e5e5e5">${customer.html}</table><p>Regards,<br/>${COMPANY}</p></div>`,
    }),
    t.sendMail({
      from,
      to: process.env.ADMIN_EMAIL,
      replyTo: s.email,
      subject: `New Website Enquiry – ${label}`,
      text: `NEW WEBSITE REQUEST\n\n${admin.text}`,
      html: `<div style="font-family:Arial,sans-serif"><h2 style="color:#1043a8">NEW WEBSITE REQUEST</h2><table style="border-collapse:collapse;border:1px solid #e5e5e5">${admin.html}</table></div>`,
    }),
  ]);
  results.forEach((r) => r.status === "rejected" && console.error("Email failed:", r.reason?.message));
}
