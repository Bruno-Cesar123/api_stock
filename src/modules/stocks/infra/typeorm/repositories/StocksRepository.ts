import { ICreateStockDTO, IStocksRepository } from "@modules/stocks/repositories/IStocksRepository";
import { getRepository, Repository } from "typeorm";

import { Stock } from "../entities/Stock";


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

  async findById(id: string): Promise<Stock> {
    const stock = await this.repository.findOne({ id });

    return stock;
  }

  async deleteStock(id: string): Promise<void> {
    const stock = await this.repository.findOne({ id });

    await this.repository.remove(stock);
  }
}

export { StocksRepository };
