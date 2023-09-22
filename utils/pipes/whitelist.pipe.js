const whitelist = (allowedFields) => (req, res, next) => {
    const filteredBody = Object.keys(req.body)
        .filter((key) => allowedFields.includes(key))
        .reduce((obj, key) => {
            obj[key] = req.body[key];
            return obj;
        }, {});

    req.body = filteredBody;
    next();
};

module.exports = whitelist
