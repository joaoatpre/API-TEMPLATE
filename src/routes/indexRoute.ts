import { Router } from "express";
import { getIndex } from "@/controllers/indexController";

const route = Router();

route.get("/", getIndex);

export default route;
