const { validationResult } = require("express-validator");

const validationExceptionFilter = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        // If there are validation errors, return them as part of the response
        return res.status(400).json({ errors: errors.array() });
    }

    // No validation errors, proceed to the next middleware
    next();
};

module.exports = validationExceptionFilter;
