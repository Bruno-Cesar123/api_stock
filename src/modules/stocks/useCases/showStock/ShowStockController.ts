import { Request, Response } from "express";
import { container } from "tsyringe";

import { ShowStockUseCase } from "./ShowStockUseCase";

class ShowStockController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showStockUseCase = container.resolve(ShowStockUseCase);

    const stock = await showStockUseCase.execute({
      id,
    });

    return response.json(stock);
  }
}

export { ShowStockController };
