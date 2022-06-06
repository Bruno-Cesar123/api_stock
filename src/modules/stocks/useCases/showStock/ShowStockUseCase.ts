import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { Stock } from "@modules/stocks/infra/typeorm/entities/Stock";
import { IStocksRepository } from "@modules/stocks/repositories/IStocksRepository";

interface IRequest {
  id: string;
}

@injectable()
class ShowStockUseCase {
  constructor(
    @inject("StocksRepository")
    private stocksRepository: IStocksRepository,
  ) {}

  async execute({ id }: IRequest): Promise<Stock> {
    const stock = await this.stocksRepository.findById(id);

    if (!stock) {
      throw new AppError("Stock does not exists");
    }

    return stock;
  }
}

export { ShowStockUseCase };
