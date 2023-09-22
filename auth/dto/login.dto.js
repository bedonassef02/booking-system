const { body } = require("express-validator");
const validationExceptionFilter = require("../../utils/filters/validation-exception.filter");
const whitelist = require("../../utils/pipes/whitelist.pipe");
const usersService = require("../../users/users.service");
const UnauthorizedException = require("../../utils/exceptions/unauthorized-exception");

const allowedFields = ["email", "password"];

const LoginDto = [
    body('email')
        .notEmpty().withMessage('email is required')
        .isEmail().withMessage('email must be valid')
        .isLength({ max: 32 }).withMessage('email max length 32 characters')
        .custom(async (email) => {
            const isEmailExist = await usersService.findOne({ email });
            if (!isEmailExist) {
                throw new UnauthorizedException('email or password is incorrect')
            }
        })
    ,
    body('password')
        .notEmpty().withMessage('password is required')
        .isString().withMessage('password must be a string')
        .isLength({ min: 8, max: 32 }).withMessage('password must be at least 8 characters and max length 32 characters'),

    validationExceptionFilter,

    whitelist(allowedFields),
]

module.exports = LoginDto;