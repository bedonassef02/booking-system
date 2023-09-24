const { body, param } = require('express-validator');
const BadRequestException = require('../../utils/exceptions/bad-request.exception');
const offeringService = require('../../offering/offering.service');
const NotFoundException = require('../../utils/exceptions/not-found.exception');
const validationExceptionFilter = require('../../utils/filters/validation-exception.filter');
const whitelist = require('../../utils/pipes/whitelist.pipe');

const allowedFields = ['rate', 'description'];

const CreateReviewDto = [
  param('offerId')
    .isMongoId()
    .withMessage('id must be valid mongo id')
    .custom(async (offerId) => {
      const offer = await offeringService.findOne({ id: offerId });
      if (!offer) {
        throw new NotFoundException('offering not found');
      }
      return true;
    }),

  body('rate')
    .notEmpty()
    .withMessage('rate is required')
    .isNumeric()
    .withMessage('rate must be a number')
    .custom((rate) => {
      if (rate >= 1 && rate <= 5) {
        return true;
      }
      throw new BadRequestException('rate must be between 1 and 5');
    }),

  body('description')
    .optional()
    .isString()
    .withMessage('description must be a string')
    .isLength({ max: 256 })
    .withMessage('description max length is 256 characters'),

  validationExceptionFilter,

  whitelist(allowedFields),
];

module.exports = CreateReviewDto;
