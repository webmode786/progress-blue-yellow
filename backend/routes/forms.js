import { Router } from "express";
import { submitLimiter } from "../middleware/rateLimiter.js";
import { validateSubmission } from "../middleware/validation.js";
import { submit } from "../controllers/formsController.js";

const router = Router();
router.post("/submit", submitLimiter, validateSubmission, submit);
export default router;
