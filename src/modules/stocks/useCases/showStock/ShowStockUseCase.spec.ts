import { StocksRepositoryInMemory } from "@modules/stocks/repositories/in-memory/StocksRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { ShowStockUseCase } from "./ShowStockUseCase";


let stocksRepositoryInMemory: StocksRepositoryInMemory;
let showStock: ShowStockUseCase;

describe("Show Stock", () => {
  beforeEach(() => {
    stocksRepositoryInMemory = new StocksRepositoryInMemory();
    showStock = new ShowStockUseCase(stocksRepositoryInMemory);
  });

  it("should be able to show the stock", async () => {
    const stock = await stocksRepositoryInMemory.create({
      name: "Stock Test",
      type: "Stock Type Test",
      average_price: 2000,
      sales_price: 4000,
      quantity: 100,
    });

    const profileStock = await showStock.execute({
      id: stock.id,
    });

    expect(profileStock.name).toBe("Stock Test");
    expect(profileStock.type).toBe("Stock Type Test");
  });

  it("should be able the info from non-existing stock", async () => {
    await expect(
      showStock.execute({
        id: 'non-existing-stock-id',
      }),
    ).rejects.toBeInstanceOf(AppError)
  })
})
