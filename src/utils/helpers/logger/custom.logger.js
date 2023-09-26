const { transports, format, createLogger } = require('winston'); // Import 'createLogger' from 'winston'
const winstonMongoDB = require('winston-mongodb');
const { DATABASE_URI } = require('../../../database/db.connection');

class CustomLogger {
    constructor(filename) {
        this.filename = filename;
        this.logger = this.createLogger();
    }

    createLogger() {
        return createLogger({ // Use 'createLogger' instead of 'winston.createLogger'
            transports: [
                new transports.Console(),
                new transports.File({
                    level: 'warn',
                    filename: `warning.log`,
                }),
                new transports.File({
                    level: 'error',
                    filename: `error.log`,
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
    }

    info(message) {
        this.logger.info({ message, filename: this.filename });
    }

    warn(message) {
        this.logger.warn({ message, filename: this.filename });
    }

    error(message) {
        this.logger.error({ message, filename: this.filename });
    }
}

module.exports = CustomLogger;
