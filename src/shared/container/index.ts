import { container } from "tsyringe";

import { StocksRepository } from "../../modules/stocks/repositories/implementations/StocksRepository";
import { IStocksRepository } from "../../modules/stocks/repositories/IStocksRepository";

container.registerSingleton<IStocksRepository>(
  "StocksRepository",
  StocksRepository,
);
