const { body } = require('express-validator');
const BadRequestException = require('../../utils/exceptions/bad-request.exception');
const validationExceptionFilter = require('../../utils/filters/validation-exception.filter');
const whitelist = require('../../utils/pipes/whitelist.pipe');

const allowedFields = ['currentPassword', 'newPassword', 'confirmPassword'];

const UpdatePasswordDto = [
  body('currentPassword')
    .notEmpty()
    .withMessage('currentPassword is required')
    .isString()
    .withMessage('currentPassword must be a string')
    .isLength({ min: 8, max: 32 }),

  body('newPassword')
    .notEmpty()
    .withMessage('currentPassword is required')
    .isString()
    .withMessage('currentPassword must be a string')
    .isLength({ min: 8, max: 32 }),

  body('confirmPassword')
    .notEmpty()
    .withMessage('confirmPassword is required')
    .isString()
    .withMessage('confirmPassword must be a string')
    .isLength({ min: 8, max: 32 })
    .custom((confirmPassword, { req }) => {
      const { newPassword } = req.body;
      if (newPassword === confirmPassword) {
        return true;
      }
      throw new BadRequestException('newPassword not match confirmPassword');
    }),

  validationExceptionFilter,

  whitelist(allowedFields),
];

module.exports = UpdatePasswordDto;
