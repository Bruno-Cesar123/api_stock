import { StocksRepository } from "../../repositories/implementations/StocksRepository";
import { CreateStockController } from "./CreateStockController";
import { CreateStockUseCase } from "./CreateStockUseCase";

export default (): CreateStockController => {
  const stocksRepository = new StocksRepository();

  const createStockUseCase = new CreateStockUseCase(stocksRepository);

  const createStockController = new CreateStockController(createStockUseCase);

  return createStockController;
};
