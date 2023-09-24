const { body } = require('express-validator');
const validationExceptionFilter = require('../../utils/filters/validation-exception.filter');
const whitelist = require('../../utils/pipes/whitelist.pipe');
const categoryService = require('../../categories/categories.service');
const NotFoundException = require('../../utils/exceptions/not-found.exception');

const allowedFields = [
  'name',
  'description',
  'location',
  'price',
  'capacity',
  'facilities',
  'images',
  'days',
];

const CreateOfferingDto = [
  body('name')
    .notEmpty()
    .withMessage('name is required')
    .isString()
    .withMessage('name must be a valid string')
    .isLength({ max: 32 })
    .withMessage('name max length 32 characters'),

  body('description')
    .notEmpty()
    .withMessage('description is required')
    .isString()
    .withMessage('description must be a valid string')
    .isLength({ max: 2048 })
    .withMessage('description max length 2048 characters'),

  body('price')
    .notEmpty()
    .withMessage('price is required')
    .isNumeric()
    .withMessage('price must be a number')
    .custom((price) => {
      if (price < 0) {
        throw new Error('Price must be a non-negative number');
      }
      return true;
    }),

  body('location')
    .optional()
    .isString()
    .withMessage('location must be a valid string')
    .isLength({ max: 64 })
    .withMessage('location max length 64 characters'),

  body('capacity')
    .notEmpty()
    .withMessage('capacity is required')
    .isNumeric()
    .withMessage('capacity must be a number')
    .custom((capacity) => {
      if (capacity < 1) {
        throw new Error('Capacity must be a positive number');
      }
      return true;
    }),

  body('facilities')
    .optional()
    .isArray()
    .withMessage('facilities must be an array')
    .custom((facilities) => {
      if (facilities.length === 0) {
        throw new Error('At least one facility is required');
      }
      return true;
    }),

  body('images')
    .notEmpty()
    .withMessage('images is required')
    .isArray()
    .withMessage('images must be an array')
    .custom((images) => {
      if (images.length === 0) {
        throw new Error('At least one image is required');
      }
      return true;
    }),

  body('days')
    .notEmpty()
    .withMessage('days is required')
    .isNumeric()
    .withMessage('days must be a number')
    .custom((days) => {
      if (days < 0) {
        throw new Error('days must be a non-negative number');
      }
      return true;
    }),

  body('category')
    .notEmpty()
    .withMessage('category is required')
    .isMongoId()
    .withMessage('category must be a valid Mongo ID')
    .custom(async (id) => {
      const category = await categoryService.findById({ id });
      if (category) {
        return true;
      }
      throw new NotFoundException('category not found');
    }),
  validationExceptionFilter,

  whitelist(allowedFields),
];

module.exports = CreateOfferingDto;
