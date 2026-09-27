import { saveSubmission } from "../services/database.js";
import { sendEmails } from "../services/emailService.js";

export async function submit(req, res) {
  const s = req.submission;
  try {
    await saveSubmission(s, {
      ip: req.ip,
      userAgent: String(req.get("user-agent") || "").slice(0, 500),
    });
  } catch (err) {
    console.error("DB insert failed:", err.message);
    return res.status(500).json({
      success: false,
      message: "Unable to submit your request. Please try again.",
    });
  }

  // Saved — email failures are logged but don't fail the request (avoids duplicate resubmits).
  await sendEmails(s, new Date().toISOString()).catch((e) =>
    console.error("Email error:", e.message),
  );

  res.json({ success: true, message: "Your request has been submitted successfully." });
}
