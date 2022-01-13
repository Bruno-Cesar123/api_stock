import { Stock } from "../entities/Stock";

interface ICreateStockDTO {
  name: string;
  type: string;
  average_price: number;
  sales_price: number;
  quantity: number;
}

interface IStocksRepository {
  findByName(name: string): Promise<Stock>;
  findById(id: string): Promise<Stock>;
  list(): Promise<Stock[]>;
  create({
    name,
    type,
    average_price,
    sales_price,
    quantity,
  }: ICreateStockDTO): Promise<void>;
  deleteStock(id: string): Promise<void>;
}

export { IStocksRepository, ICreateStockDTO };
