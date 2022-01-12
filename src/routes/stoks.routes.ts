import { Router } from "express";

import createStockController from "../modules/stocks/useCases/createStock";
import { listStocksController } from "../modules/stocks/useCases/listStocks";

const stocksRoutes = Router();

stocksRoutes.post("/", (request, response) => {
  return createStockController().handle(request, response);
});

stocksRoutes.get("/", (request, response) => {
  return listStocksController.handle(request, response);
});

export { stocksRoutes };
