import app from "@/app";
import { apiConfig } from "@/configs/apiConfig";

const ENVIRONMENT = apiConfig.project.environment;
const PORT = apiConfig.project.port;

/* prettier-ignore */
if (!ENVIRONMENT || (ENVIRONMENT !== "production" && ENVIRONMENT !== "development")) {
  console.error("No valid environment provided");
  process.exit(1);
}

/* prettier-ignore */
app.listen(PORT, () => {
  console.log(
    `[Server - ${ENVIRONMENT.toUpperCase()}] Running at http://localhost:${PORT}`
  );
});
