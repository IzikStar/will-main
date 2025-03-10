import { StatusCodes } from "http-status-codes";
import logger from "../Logger/logger.js";

const errorMiddleware = (err, req, res, next) => {
  logger.error(`${err.name}: ${err.message}`);
  
  res.status(err.statusCode ?? StatusCodes.INTERNAL_SERVER_ERROR).send({
    errorName: err.name ?? "סיסמא שגויה",
    errorMessage: err.message ?? "בלון מאוכזב ממך. תתאמץ יותר!",
  });
};

export { errorMiddleware };
