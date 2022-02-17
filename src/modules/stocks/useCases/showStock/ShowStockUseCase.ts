import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { Stock } from "../../entities/Stock";
import { IStocksRepository } from "../../repositories/IStocksRepository";

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
