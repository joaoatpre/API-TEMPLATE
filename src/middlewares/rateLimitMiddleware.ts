import rateLimit from "express-rate-limit";
import { apiConfig } from "@/configs/apiConfig";

export default function rateLimitMiddleware() {
  return rateLimit({
    windowMs: apiConfig.protections.rateLimit.windowMs,
    max: apiConfig.protections.rateLimit.max,
  });
}
