const page = (req, res, next) => {
    const { page } = req.query;
    req.query.page = page * 1 || 1;
    next();
}


module.exports = page;