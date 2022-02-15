import { Router } from "express";

import { stocksRoutes } from "./stoks.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/stocks", stocksRoutes);
router.use("/users", usersRoutes);

export { router };
