
const fields = (req, res, next) => {
    const { fields } = req.query;
    req.query.fields = fields?.replace(',', ' ');
    next();
}

module.exports = fields;