import express from "express";

import { stocksRoutes } from "./routes/stoks.routes";

const app = express();

app.use(express.json());

app.use("/stocks", stocksRoutes);

app.listen(3333, () => console.log("Server is running"));
