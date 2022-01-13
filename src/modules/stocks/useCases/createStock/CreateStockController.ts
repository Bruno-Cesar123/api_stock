import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateStockUseCase } from "./CreateStockUseCase";

class CreateStockController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, type, average_price, sales_price, quantity } = request.body;

    const createStockUseCase = container.resolve(CreateStockUseCase);

    await createStockUseCase.execute({
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
