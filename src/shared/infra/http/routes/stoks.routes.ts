import { Router } from "express";

import { CreateStockController } from "@modules/stocks/useCases/createStock/CreateStockController";
import { DeleteStockController } from "@modules/stocks/useCases/deleteStock/DeleteStockController";
import { ListStocksController } from "@modules/stocks/useCases/listStocks/ListStocksController";
import { ShowStockController } from "@modules/stocks/useCases/showStock/ShowStockController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const stocksRoutes = Router();

const createStockController = new CreateStockController();
const listStocksController = new ListStocksController();
const deleteStockController = new DeleteStockController();
const showStockController = new ShowStockController();

stocksRoutes.use(ensureAuthenticated);
stocksRoutes.post("/", createStockController.handle);
stocksRoutes.get("/", listStocksController.handle);
stocksRoutes.delete("/:id", deleteStockController.handle);
stocksRoutes.get("/:id", showStockController.handle);

export { stocksRoutes };
