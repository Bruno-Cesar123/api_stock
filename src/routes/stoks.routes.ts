import { Router } from "express";

import { CreateStockController } from "../modules/stocks/useCases/createStock/CreateStockController";
import { listStocksController } from "../modules/stocks/useCases/listStocks";

const stocksRoutes = Router();

const createStockController = new CreateStockController();

stocksRoutes.post("/", createStockController.handle);

stocksRoutes.get("/", (request, response) => {
  return listStocksController.handle(request, response);
});

export { stocksRoutes };
