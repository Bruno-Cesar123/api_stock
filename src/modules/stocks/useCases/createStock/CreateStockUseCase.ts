import { IStocksRepository } from "../../repositories/IStocksRepository";

interface IRequest {
  name: string;
  type: string;
  average_price: number;
  sales_price: number;
  quantity: number;
}

class CreateStockUseCase {
  constructor(private stocksRepository: IStocksRepository) {}

  async execute({
    name,
    type,
    average_price,
    sales_price,
    quantity,
  }: IRequest): Promise<void> {
    const stockAlreadyExists = await this.stocksRepository.findByName(name);

    if (stockAlreadyExists) {
      throw new Error("Stock Already exists");
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
