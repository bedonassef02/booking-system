const { validationResult } = require("express-validator");
const STATUS_CODE = require("../constants/status-code");

const validationExceptionFilter = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        // If there are validation errors, return them as part of the response
        return res.status(STATUS_CODE.BAD_REQUEST).json({ errors: errors.array() });
    }

    // No validation errors, proceed to the next middleware
    next();
};

module.exports = validationExceptionFilter;
