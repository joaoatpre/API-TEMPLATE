import express from "express";
import autoRoutes from "@/services/routesService";

// Importing protection middlewares
import helmetMiddleware from "@/middlewares/helmetMiddleware";
import corsMiddleware from "@/middlewares/corsMiddleware";
import rateLimitMiddleware from "@/middlewares/rateLimitMiddleware";

// Creating express app
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Using protection middlewares
app.use(helmetMiddleware());
app.use(corsMiddleware());
app.use(rateLimitMiddleware());

// Using auto import routes
app.use(autoRoutes());

export default app;
