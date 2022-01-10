import { Router } from "express";

import { StocksRepository } from "../modules/stocks/repositories/StocksRepository";
import { createStockController } from "../modules/stocks/useCases/createStock";

const stocksRoutes = Router();
const stocksRepository = new StocksRepository();

stocksRoutes.post("/", (request, response) => {
  return createStockController.handle(request, response);
});

stocksRoutes.get("/", (request, response) => {
  const stocks = stocksRepository.list();

  return response.json(stocks);
});

export { stocksRoutes };
