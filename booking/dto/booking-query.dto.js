const { query } = require('express-validator');
const QueryDto = require('../../utils/dto/query.dto');
const PAYMENT = require('../utils/constants/payment');
const validationExceptionFilter = require('../../utils/filters/validation-exception.filter');
const STATUS = require('../utils/constants/status');

const BookingQueryDto = [filter, ...QueryDto, validationExceptionFilter];

module.exports = BookingQueryDto;
