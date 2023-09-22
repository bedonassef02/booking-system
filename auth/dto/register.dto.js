const { body } = require("express-validator");
const validationExceptionFilter = require("../../utils/filters/validation-exception.filter");
const whitelist = require("../../utils/pipes/whitelist.pipe");
const usersService = require("../../users/users.service");
const ConflictException = require("../../utils/exceptions/conflict.exception");

const allowedFields = ["name", "email", "password"];

const RegisterDto = [
    body('name')
        .notEmpty().withMessage('name is required')
        .isString().withMessage('name must be string')
        .isLength({ max: 32 }).withMessage('email max length 32 characters'),

    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Invalid email format')
        .isLength({ max: 32 }).withMessage('Email should be less than or equal to 32 characters')
        .custom(async (email) => {
            console.log(email);
            const isEmailExist = await usersService.findOne({ email });
            if (isEmailExist) {
                throw new ConflictException('Email is already in use');
            }
        }),

    body('password')
        .notEmpty().withMessage('password is required')
        .isString().withMessage('password must be a string')
        .isLength({ min: 8, max: 32 }).withMessage('password must be at least 8 characters and max length 32 characters'),

    validationExceptionFilter,

    whitelist(allowedFields),
]

module.exports = RegisterDto;