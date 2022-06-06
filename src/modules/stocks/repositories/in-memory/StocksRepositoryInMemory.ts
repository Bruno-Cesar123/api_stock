
import { Stock } from "@modules/stocks/infra/typeorm/entities/Stock";
import { ICreateStockDTO, IStocksRepository } from "../IStocksRepository";

class StocksRepositoryInMemory implements IStocksRepository {
  stocks: Stock[] = [];

  async findByName(name: string): Promise<Stock> {
    const stock = this.stocks.find(stock => stock.name === name);
    return stock;
  }

  async findById(id: string): Promise<Stock> {
    const stock = this.stocks.find(stock => stock.id === id);
    return stock;
  }

  async list(): Promise<Stock[]> {
    return this.stocks;
  }

  async create({
    name,
    type,
    average_price,
    sales_price,
    quantity,
  }: ICreateStockDTO): Promise<void> {
    const stock = new Stock();

    Object.assign(stock, {
      name,
      type,
      average_price,
      sales_price,
      quantity,
    });

    this.stocks.push(stock);
  }
  async deleteStock(id: string): Promise<void> {
    this.stocks = this.stocks.filter(stock => {
      return stock.id !== id;
    });
  }
}

export { StocksRepositoryInMemory };
