import 'reflect-metadata';
import 'dotenv';
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import "../typeorm";
import "@shared/container";
import { errors } from 'celebrate';
import cors from 'cors';
import { AppError } from "@shared/errors/AppError";
import upload from "@config/upload";

import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(cors());

app.use('/avatar', express.static(`${upload.tmpFolder}/avatar`));

app.use(router);

app.use(errors());

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  },
);

app.listen(3333, () => console.log("Server is running"));
