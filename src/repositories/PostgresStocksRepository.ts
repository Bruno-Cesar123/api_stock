import { Stock } from "../model/Stock";
import { ICreateStockDTO, IStocksRepository } from "./IStocksRepository";

class PostgresStocksRepository implements IStocksRepository {
  findByName(name: string): Stock {
    console.log(name);
    return null;
  }
  list(): Stock[] {
    return null;
  }
  create({
    name,
    type,
    average_price,
    sales_price,
    quantity,
  }: ICreateStockDTO): void {
    console.log("Stock criado");
  }
}

export { PostgresStocksRepository };
