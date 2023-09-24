const { body, param } = require('express-validator')
const offeringService = require('../../offering/offering.service');
const NotFoundException = require('../../utils/exceptions/not-found.exception');
const validationExceptionFilter = require('../../utils/filters/validation-exception.filter');
const whitelist = require('../../utils/pipes/whitelist.pipe');
const allowedFields = ['time', 'duration', 'details', 'offering'];

const CreateBookingDto = [

    body('offering')
        .isMongoId().withMessage('offering must be a valid Mongo ID')
        .custom(async (id) => {
            const offer = await offeringService.findOne({ id });
            if (!offer) {
                throw new NotFoundException('offer not found');
            }
        })
    ,

    body('time')
        .notEmpty().withMessage('time is required')
        .isString().withMessage('time must be a string'),

    body('duration')
        .notEmpty().withMessage('duration is required')
        .isNumeric().withMessage('duration must be a number'),

    body('details')
        .notEmpty().withMessage('details is required')
        .isString().withMessage('details must be a string'),

    validationExceptionFilter,

    whitelist(allowedFields),
]

module.exports = CreateBookingDto;