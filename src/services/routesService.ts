import { Router } from "express";
import fs from "fs";
import path from "path";

export default function autoImportRoutes(): Router {
  const routesPath = path.join(__dirname, "..", "routes");
  const router = Router();

  fs.readdirSync(routesPath).forEach((file) => {
    if (file.endsWith(".ts")) {
      const route = require(path.join(routesPath, file));
      router.use(route.default);
    }
  });

  return router;
}
