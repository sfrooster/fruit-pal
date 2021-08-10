import winston from 'winston';

export const loggerLevels = {
  error: 0,
  warn: 1,
  info: 2,
  debug: 4
};

const level = () => process.env.LOG_LEVEL || 'debug';

const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`,
  )
);

const transports = [
  new winston.transports.Console()
];

export const logger = winston.createLogger({
  level: level(),
  levels: loggerLevels,
  format,
  transports,
});