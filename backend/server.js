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

app.use(helmet());
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
