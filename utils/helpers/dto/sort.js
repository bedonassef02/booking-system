const sort = (req, res, next) => {
  const { sort } = req.query;
  req.query.sort = sort?.replace(',', ' ') || '-__v';
  next();
};

module.exports = sort;
