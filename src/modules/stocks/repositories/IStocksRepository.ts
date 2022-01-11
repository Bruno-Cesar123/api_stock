import { Stock } from "../entities/Stock";

interface ICreateStockDTO {
  name: string;
  type: string;
  average_price: number;
  sales_price: number;
  quantity: number;
}

interface IStocksRepository {
  findByName(name: string): Stock;
  list(): Stock[];
  create({
    name,
    type,
    average_price,
    sales_price,
    quantity,
  }: ICreateStockDTO): void;
}

export { IStocksRepository, ICreateStockDTO };
