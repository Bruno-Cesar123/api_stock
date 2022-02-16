import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { stocksRoutes } from "./stoks.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/stocks", stocksRoutes);
router.use("/users", usersRoutes);
router.use(authenticateRoutes);

export { router };
