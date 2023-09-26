const { body } = require('express-validator')
const whitelist = require('../../utils/pipes/whitelist.pipe')
const validationExceptionFilter = require('../../utils/filters/validation-exception.filter')


const allowedFields = ['offering'];

const insertWishlistDto = [
    body('offering')
        .notEmpty().withMessage('offering is required')
        .isMongoId().withMessage('offering must be a valid Mongo id'),



    validationExceptionFilter,

    whitelist(allowedFields),
]

module.exports = insertWishlistDto;