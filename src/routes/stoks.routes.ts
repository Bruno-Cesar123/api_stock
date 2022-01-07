import { Router } from "express";

import { StocksRepositories } from "../repositories/StocksRepository";
import { CreateStockService } from "../services/CreateStockService";

const stocksRoutes = Router();
const stocksRepository = new StocksRepositories();

stocksRoutes.post("/", (request, response) => {
  const { name, type, average_price, sales_price, quantity } = request.body;

  const createStockService = new CreateStockService(stocksRepository);

  createStockService.execute({
    name,
    type,
    average_price,
    sales_price,
    quantity,
  });

  return response.status(201).send();
});

stocksRoutes.get("/", (request, response) => {
  const stocks = stocksRepository.list();

  return response.json(stocks);
});

export { stocksRoutes };
