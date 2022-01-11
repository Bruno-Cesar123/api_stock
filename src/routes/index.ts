import { Router } from "express";

import { stocksRoutes } from "./stoks.routes";

const router = Router();

router.use("/stocks", stocksRoutes);

export { router };
