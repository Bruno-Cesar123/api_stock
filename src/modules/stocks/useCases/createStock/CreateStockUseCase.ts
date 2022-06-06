import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { IStocksRepository } from "@modules/stocks/repositories/IStocksRepository";

interface IRequest {
  name: string;
  type: string;
  average_price: number;
  sales_price: number;
  quantity: number;
}

@injectable()
class CreateStockUseCase {
  constructor(
    @inject("StocksRepository")
    private stocksRepository: IStocksRepository,
  ) {}

  async execute({
    name,
    type,
    average_price,
    sales_price,
    quantity,
  }: IRequest): Promise<void> {
    const stockAlreadyExists = await this.stocksRepository.findByName(name);

    if (stockAlreadyExists) {
      throw new AppError("Stock Already exists");
    }

    this.stocksRepository.create({
      name,
      type,
      average_price,
      sales_price,
      quantity,
    });
  }
}

export { CreateStockUseCase };
