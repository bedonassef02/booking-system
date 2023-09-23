const { body, param } = require("express-validator");
const validationExceptionFilter = require("../../utils/filters/validation-exception.filter");
const whitelist = require("../../utils/pipes/whitelist.pipe");
const slugify = require("slugify");
const { findOne } = require('../categories.service');
const ConflictException = require("../../utils/exceptions/conflict.exception");

const allowedFields = ["name", "slug"];

const UpdateCategoryDto = [
    param('id')
        .isMongoId().withMessage('category id must be valid mongo id'),

    body('name')
        .notEmpty().withMessage('name is required')
        .isString().withMessage('name must be a valid string')
        .isLength({ max: 32 }).withMessage('name max length 32 characters')
        .custom(async (name, { req }) => {
            const slug = await slugify(name, { lower: true });
            const category = await findOne({ slug });
            const { id } = req.params;
            if (category && category.id !== id) {
                throw new ConflictException('name already exists');
            }
            req.body.slug = slug;
        }),
    validationExceptionFilter,

    whitelist(allowedFields),
];

module.exports = UpdateCategoryDto;
