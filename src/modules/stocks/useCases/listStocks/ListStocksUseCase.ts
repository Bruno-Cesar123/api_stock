import { inject, injectable } from "tsyringe";

import { Stock } from "@modules/stocks/infra/typeorm/entities/Stock";
import { IStocksRepository } from "@modules/stocks/repositories/IStocksRepository";

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
