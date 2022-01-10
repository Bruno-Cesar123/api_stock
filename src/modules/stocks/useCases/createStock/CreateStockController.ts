import { Request, Response } from "express";

import { CreateStockUseCase } from "./CreateStockUseCase";

class CreateStockController {
  constructor(private createStockUseCase: CreateStockUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, type, average_price, sales_price, quantity } = request.body;

    this.createStockUseCase.execute({
      name,
      type,
      average_price,
      sales_price,
      quantity,
    });

    return response.status(201).send();
  }
}

export { CreateStockController };
