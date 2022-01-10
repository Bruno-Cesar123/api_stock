import { Stock } from "../model/Stock";
import { ICreateStockDTO, IStocksRepository } from "./IStocksRepository";

class StocksRepository implements IStocksRepository {
  private stocks: Stock[];

  constructor() {
    this.stocks = [];
  }

  create({
    name,
    type,
    average_price,
    sales_price,
    quantity,
  }: ICreateStockDTO): void {
    const newStock = new Stock();

    Object.assign(newStock, {
      name,
      type,
      average_price,
      sales_price,
      quantity,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.stocks.push(newStock);
  }

  list(): Stock[] {
    return this.stocks;
  }

  findByName(name: string): Stock {
    const stock = this.stocks.find(stock => stock.name === name);

    return stock;
  }
}

export { StocksRepository };
