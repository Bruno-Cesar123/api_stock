import { StocksRepository } from "../../repositories/StocksRepository";
import { CreateStockController } from "./CreateStockController";
import { CreateStockUseCase } from "./CreateStockUseCase";

const stocksRepository = StocksRepository.getInstance();

const createStockUseCase = new CreateStockUseCase(stocksRepository);

const createStockController = new CreateStockController(createStockUseCase);

export { createStockController };
