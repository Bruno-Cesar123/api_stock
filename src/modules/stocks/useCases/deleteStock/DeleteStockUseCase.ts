import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { IStocksRepository } from "@modules/stocks/repositories/IStocksRepository";

interface IRequest {
  id: string;
}

@injectable()
class DeleteStockUseCase {
  constructor(
    @inject("StocksRepository")
    private stocksRepository: IStocksRepository,
  ) {}

  async execute({ id }: IRequest): Promise<void> {
    const stock = await this.stocksRepository.findById(id);

    if (!stock) {
      throw new AppError("Stock does not exists");
    }

    await this.stocksRepository.deleteStock(id);
  }
}

export { DeleteStockUseCase };
