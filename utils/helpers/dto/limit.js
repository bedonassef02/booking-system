const limit = (req, res, next) => {
    const { limit } = req.query;
    req.query.limit = limit * 1 || 10;
    next();
}

module.exports = limit;