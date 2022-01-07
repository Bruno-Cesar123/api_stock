import { IStocksRepository } from "../repositories/IStocksRepository";

interface IRequest {
  name: string;
  type: string;
  average_price: number;
  sales_price: number;
  quantity: number;
}

class CreateStockService {
  constructor(private stocksRepository: IStocksRepository) {}

  execute({
    name,
    type,
    average_price,
    sales_price,
    quantity,
  }: IRequest): void {
    const stockAlreadyExists = this.stocksRepository.findByName(name);

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

export { CreateStockService };
