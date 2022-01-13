import { Stock } from "../../entities/Stock";
import { IStocksRepository } from "../../repositories/IStocksRepository";

class ListStocksUseCase {
  constructor(private stocksRepository: IStocksRepository) {}

  execute(): Promise<Stock[]> {
    const stocks = this.stocksRepository.list();

    return stocks;
  }
}

export { ListStocksUseCase };
