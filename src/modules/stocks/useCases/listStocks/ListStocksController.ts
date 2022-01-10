import { Request, Response } from "express";

import { ListStocksUseCase } from "./ListStocksUseCase";

class ListStocksController {
  constructor(private listStocksUseCase: ListStocksUseCase) {}

  handle(request: Request, response: Response): Response {
    const all = this.listStocksUseCase.execute();

    return response.json(all);
  }
}

export { ListStocksController };
