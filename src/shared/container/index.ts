import { container } from "tsyringe";

import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { StocksRepository } from "@modules/stocks/infra/typeorm/repositories/StocksRepository";
import { IStocksRepository } from "@modules/stocks/repositories/IStocksRepository";
import './providers/StorageProvider';

container.registerSingleton<IStocksRepository>(
  "StocksRepository",
  StocksRepository,
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository,
);
