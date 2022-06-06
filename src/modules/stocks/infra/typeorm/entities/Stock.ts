import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("stocks")
class Stock {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  average_price: number;

  @Column()
  sales_price: number;

  @Column()
  quantity: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Stock };
