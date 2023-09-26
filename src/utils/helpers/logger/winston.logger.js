const expressWinston = require('express-winston');
const { transports, format } = require('winston');
const winstonMongoDB = require('winston-mongodb');
const { DATABASE_URI } = require('../../../database/db.connection');

const winstonLogger = expressWinston.logger({
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.timestamp(),
        format.printf(({ timestamp, level, message }) => {
          return `${timestamp} [${level}]: ${message}`;
        }),
      ),
    }),
    new transports.File({
      level: 'warn',
      filename: 'warning.log',
      format: format.combine(
        format.timestamp(),
        format.printf(({ timestamp, level, message }) => {
          return `${timestamp} [${level}]: ${message}`;
        }),
      ),
    }),
    new transports.File({
      level: 'error',
      filename: 'error.log',
      format: format.combine(
        format.timestamp(),
        format.printf(({ timestamp, level, message }) => {
          return `${timestamp} [${level}]: ${message}`;
        }),
      ),
    }),
    new winstonMongoDB.MongoDB({
      level: 'info',
      db: DATABASE_URI,
      options: {
        useUnifiedTopology: true,
      },
      format: format.combine(
        format.json(),
        format.timestamp(),
        format.metadata(),
        format.prettyPrint(),
      ),
    }),
  ],
  format: format.combine(
    format.json(),
    format.timestamp(),
    format.metadata(),
    format.prettyPrint(),
  ),
  statusLevels: true,
});

module.exports = winstonLogger;
