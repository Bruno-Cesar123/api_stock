import { StocksRepository } from "../../repositories/StocksRepository";
import { CreateStockController } from "./CreateStockController";
import { CreateStockUseCase } from "./CreateStockUseCase";

const stocksRepository = new StocksRepository();

const createStockUseCase = new CreateStockUseCase(stocksRepository);

const createStockController = new CreateStockController(createStockUseCase);

export { createStockController };
