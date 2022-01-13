import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteStockUseCase } from "./DeleteStockUseCase";

class DeleteStockController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteStockUseCase = container.resolve(DeleteStockUseCase);

    await deleteStockUseCase.execute({
      id,
    });

    return response.json({ message: "delete succefully" });
  }
}

export { DeleteStockController };
