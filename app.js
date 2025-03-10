import express from "express";
import userRouter from "./routes/userRouter.js";
import cors from "cors";
import { errorMiddleware } from "./Middlewares/ErrorMiddleware.js";
import { loggerMiddleware } from "./Middlewares/LoggerMiddleware.js";
import logger from "./Logger/logger.js";

// to enable .env vars
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 88;

app.use(loggerMiddleware);
app.use("", userRouter);
app.use(errorMiddleware);

app.listen(port, () => {
    logger.info(`Server running on port ${port}`);
});
