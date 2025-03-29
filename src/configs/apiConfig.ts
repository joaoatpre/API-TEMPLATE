import dotenv from "dotenv";
import { apiConfigType } from "types/apiConfig";

dotenv.config();

const DEFAULT_ENVIRONMENT = "development"; // Default environment
const DEFAULT_PORT = 8080; // Default port
const DEFAULT_CORS_ORIGIN = "*"; // Allow all origins
const DEFAULT_RATE_LIMIT_WINDOW_MS = 60000; // 1 minute
const DEFAULT_RATE_LIMIT_MAX = 1000; // 1000 requests

export const apiConfig: apiConfigType = {
  project: {
    environment: process.env.NODE_ENV?.toString() || DEFAULT_ENVIRONMENT,
    port: Number(process.env.PORT) || DEFAULT_PORT,
  },
  protections: {
    cors: {
      origin: process.env.CORS_ORIGIN?.toString() || DEFAULT_CORS_ORIGIN,
    },
    rateLimit: {
      windowMs:
        Number(process.env.RATE_LIMIT_WINDOW_MS) ||
        DEFAULT_RATE_LIMIT_WINDOW_MS,
      max: Number(process.env.RATE_LIMIT_MAX) || DEFAULT_RATE_LIMIT_MAX,
    },
  },
};
