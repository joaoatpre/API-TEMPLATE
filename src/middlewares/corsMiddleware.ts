import cors from "cors";
import { apiConfig } from "@/configs/apiConfig";

export default function corsMiddleware() {
  return cors({
    origin: apiConfig.protections.cors.origin,
  });
}
