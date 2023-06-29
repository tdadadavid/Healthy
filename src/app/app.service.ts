import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import { allowedHeaders, allowedMethods,allowedOrigins, notFoundErrorHandler, errorHanlder  } from "../core";
import { appRouter } from "./app.router";


export const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan('combined'))
app.use(cors({
    allowedHeaders,
    methods: allowedMethods,
    origin: allowedOrigins,
}))
app.use("/api/v1", appRouter);
app.use(notFoundErrorHandler.handle);
app.use(errorHanlder.handle);