import { inject, injectable } from "tsyringe";

import { IStocksRepository } from "../../repositories/IStocksRepository";

interface IRequest {
  id: string;
}

@injectable()
class DeleteStockUseCase {
  constructor(
    @inject("StocksRepository")
    private stocksRepository: IStocksRepository,
  ) {}

  async execute({ id }: IRequest): Promise<void> {
    const stock = await this.stocksRepository.findById(id);

    if (!stock) {
      throw new Error("Stock does not exists");
    }

    await this.stocksRepository.deleteStock(id);
  }
}

export { DeleteStockUseCase };
