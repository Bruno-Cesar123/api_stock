import { AppError } from "../../../../errors/AppError";
import { StocksRepositoryInMemory } from "../../repositories/in-memory/StocksRepositoryInMemory";
import { CreateStockUseCase } from "./CreateStockUseCase";

let createStockUseCase: CreateStockUseCase;
let stocksRepositoryInMemory: StocksRepositoryInMemory;

describe("Create Stock", () => {
  beforeEach(() => {
    stocksRepositoryInMemory = new StocksRepositoryInMemory();
    createStockUseCase = new CreateStockUseCase(stocksRepositoryInMemory);
  });

  it("should be able to create a new stock", async () => {
    const stock = {
      name: "Stock Test",
      type: "Stock Type Test",
      average_price: 2000,
      sales_price: 4000,
      quantity: 100,
    };

    await createStockUseCase.execute({
      name: stock.name,
      type: stock.type,
      average_price: stock.average_price,
      sales_price: stock.sales_price,
      quantity: stock.quantity,
    });

    const stockCreated = await stocksRepositoryInMemory.findByName(stock.name);

    expect(stockCreated).toHaveProperty("id");
  });

  it("should not be able to create a new stock with name exists", async () => {
    expect(async () => {
      const stock = {
        name: "Stock Test",
        type: "Stock Type Test",
        average_price: 2000,
        sales_price: 4000,
        quantity: 100,
      };

      await createStockUseCase.execute({
        name: stock.name,
        type: stock.type,
        average_price: stock.average_price,
        sales_price: stock.sales_price,
        quantity: stock.quantity,
      });

      await createStockUseCase.execute({
        name: stock.name,
        type: stock.type,
        average_price: stock.average_price,
        sales_price: stock.sales_price,
        quantity: stock.quantity,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
