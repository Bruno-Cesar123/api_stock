import { Router } from "express";

import { CreateStockController } from "../modules/stocks/useCases/createStock/CreateStockController";
import { ListStocksController } from "../modules/stocks/useCases/listStocks/ListStocksController";

const stocksRoutes = Router();

const createStockController = new CreateStockController();
const listStocksController = new ListStocksController();

stocksRoutes.post("/", createStockController.handle);
stocksRoutes.get("/", listStocksController.handle);

export { stocksRoutes };
