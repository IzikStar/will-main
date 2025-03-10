import logger from "../Logger/logger.js";

const loggerMiddleware = (req, res, next) => {
  logger.info(`request: ${req.method} ${req.url} recieved`);
  next();
};

export { loggerMiddleware };
