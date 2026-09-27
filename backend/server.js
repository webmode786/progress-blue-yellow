import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import formsRouter from "./routes/forms.js";

const app = express();
app.set("trust proxy", 1); // Hostinger sits behind a proxy — needed for real client IPs.

const allowed = (process.env.FRONTEND_URL || "")
  .split(",")
  .map((s) => s.trim().replace(/\/+$/, ""))
  .filter(Boolean);

const required = ["FRONTEND_URL", "DB_HOST", "DB_NAME", "DB_USER", "DB_PASSWORD", "SMTP_HOST", "SMTP_USER", "SMTP_PASSWORD", "ADMIN_EMAIL"];
const missing = required.filter((k) => !process.env[k]);
if (missing.length) console.warn(`Missing environment variables: ${missing.join(", ")}`);

app.use(helmet());
// Reject browser requests from any other website before they reach the handler.
app.use((req, res, next) => {
  const origin = req.get("origin");
  if (origin && !allowed.includes(origin.replace(/\/+$/, ""))) {
    return res.status(403).json({ success: false, message: "Unable to submit your request. Please try again." });
  }
  next();
});
app.use(
  cors({
    origin: (origin, cb) => cb(null, !origin || allowed.includes(origin)),
    methods: ["POST", "OPTIONS"],
  }),
);
app.use(express.json({ limit: "20kb" }));

app.get("/api/health", (_req, res) => res.json({ ok: true }));
app.use("/api/forms", formsRouter);

// Malformed JSON / oversize body / anything unexpected — never leak details.
app.use((err, _req, res, _next) => {
  console.error(err?.message || err);
  res.status(err?.status === 413 || err?.type ? 400 : 500).json({
    success: false,
    message: "Unable to submit your request. Please try again.",
  });
});

const port = Number(process.env.PORT) || 3000;
app.listen(port, () => console.log(`Skyline forms API listening on ${port}`));
