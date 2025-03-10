import winston, { format } from "winston";

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || "debug",
  format: winston.format.json(),
  transports: [new winston.transports.Console(), new winston.transports.File({filename: "tovaloads.log"})],
});

export default logger;
