import { getRepository, Repository } from "typeorm";

import { Stock } from "../../entities/Stock";
import { ICreateStockDTO, IStocksRepository } from "../IStocksRepository";

class StocksRepository implements IStocksRepository {
  private repository: Repository<Stock>;

  constructor() {
    this.repository = getRepository(Stock);
  }

  async create({
    name,
    type,
    average_price,
    sales_price,
    quantity,
  }: ICreateStockDTO): Promise<void> {
    const stock = this.repository.create({
      name,
      type,
      average_price,
      sales_price,
      quantity,
    });

    await this.repository.save(stock);
  }

  async list(): Promise<Stock[]> {
    const stocks = await this.repository.find();
    return stocks;
  }

  async findByName(name: string): Promise<Stock> {
    const stock = await this.repository.findOne({ name });

    return stock;
  }
}

export { StocksRepository };
