const STATUS_CODE = require('../constants/status-code');

const globalExceptionFilter = (err, req, res, next) => {
  console.error(err);
  const status = err.status || STATUS_CODE.INTERNAL_SERVER_ERROR;
  res.status(status).json({ error: err.message });
};

module.exports = globalExceptionFilter;
