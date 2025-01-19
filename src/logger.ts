import pino from "pino";

const logger = pino({
  level: process.env.LOG_LEVEL || "info",
});

const contextLogger = (context: any) => {
  return logger.child({ context });
};

export default contextLogger;
export { logger };
