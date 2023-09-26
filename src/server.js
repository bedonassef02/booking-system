const app = require('./app');

const { dbConnection } = require('./database/db.connection');
const CustomLogger = require('./utils/helpers/logger/custom.logger');

const port = process.env.PORT || 3000;
const logger = new CustomLogger('SERVER');

dbConnection
  .then(
    logger.info('connecting to database successfully'),
    app.listen(port, () => {
      logger.info('listening on port ' + port);
    }),
  )
  .catch((err) => {
    logger.error('db connection error: ' + err);
  });
