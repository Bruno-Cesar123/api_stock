import { StocksRepository } from "../../repositories/StocksRepository";
import { ListStocksController } from "./ListStocksController";
import { ListStocksUseCase } from "./ListStocksUseCase";

const stocksRepository = StocksRepository.getInstance();
const listStocksUseCase = new ListStocksUseCase(stocksRepository);
const listStocksController = new ListStocksController(listStocksUseCase);

export { listStocksController };