const { query } = require('express-validator');
const QueryDto = require('../../utils/dto/query.dto');
const validationExceptionFilter = require('../../utils/filters/validation-exception.filter');

const BookingQueryDto = [filter, ...QueryDto, validationExceptionFilter];

module.exports = BookingQueryDto;
