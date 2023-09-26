const { body } = require('express-validator');
const whitelist = require('../../utils/pipes/whitelist.pipe');
const STATUS = require('../utils/constants/status');
const validationExceptionFilter = require('../../utils/filters/validation-exception.filter');
const allowedFields = ['status'];

const UpdateBookingStatusDto = [
  body('status')
    .notEmpty()
    .withMessage('status is required')
    .isIn(Object.values(STATUS))
    .withMessage(`status must be one of ${Object.values(STATUS)}`),

  validationExceptionFilter,

  whitelist(allowedFields),
];

module.exports = UpdateBookingStatusDto;
