import { Router } from "express";

import { CreateStockController } from "../modules/stocks/useCases/createStock/CreateStockController";
import { DeleteStockController } from "../modules/stocks/useCases/deleteStock/DeleteStockController";
import { ListStocksController } from "../modules/stocks/useCases/listStocks/ListStocksController";

const stocksRoutes = Router();

const createStockController = new CreateStockController();
const listStocksController = new ListStocksController();
const deleteStockController = new DeleteStockController();

stocksRoutes.post("/", createStockController.handle);
stocksRoutes.get("/", listStocksController.handle);
stocksRoutes.delete("/:id", deleteStockController.handle);

export { stocksRoutes };
