import { Stock } from "../../model/Stock";
import { IStocksRepository } from "../../repositories/IStocksRepository";

class ListStocksUseCase {
  constructor(private stocksRepository: IStocksRepository) {}

  execute(): Stock[] {
    const stocks = this.stocksRepository.list();

    return stocks;
  }
}

export { ListStocksUseCase };
