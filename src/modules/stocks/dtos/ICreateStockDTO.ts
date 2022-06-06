
export interface ICreateStockDTO {
  name: string;
  type: string;
  average_price: number;
  sales_price?: number;
  quantity: number;
}
