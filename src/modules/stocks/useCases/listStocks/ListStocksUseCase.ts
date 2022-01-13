import { inject, injectable } from "tsyringe";

import { Stock } from "../../entities/Stock";
import { IStocksRepository } from "../../repositories/IStocksRepository";

@injectable()
class ListStocksUseCase {
  constructor(
    @inject("StocksRepository")
    private stocksRepository: IStocksRepository,
  ) {}

  async execute(): Promise<Stock[]> {
    const stocks = await this.stocksRepository.list();

    return stocks;
  }
}

export { ListStocksUseCase };
