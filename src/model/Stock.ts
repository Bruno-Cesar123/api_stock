import { v4 as uuidv4 } from "uuid";

class Stock {
  id?: string;
  name: string;
  type: string;
  average_price: number;
  sales_price: number;
  quantity: number;
  created_at: Date;
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Stock };
