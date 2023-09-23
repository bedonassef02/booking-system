const { param } = require('express-validator');
const validationExceptionFilter = require('../filters/validation-exception.filter');

const ParseMongoIdPipe = [
  param('id').isMongoId().withMessage('id must be valid mongo id'),

  validationExceptionFilter,
];

module.exports = ParseMongoIdPipe;
