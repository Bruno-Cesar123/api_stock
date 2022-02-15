import { container } from "tsyringe";

import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { StocksRepository } from "../../modules/stocks/repositories/implementations/StocksRepository";
import { IStocksRepository } from "../../modules/stocks/repositories/IStocksRepository";

container.registerSingleton<IStocksRepository>(
  "StocksRepository",
  StocksRepository,
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository,
);
