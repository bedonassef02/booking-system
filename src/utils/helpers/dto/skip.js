const skip = (req, res, next) => {
  const { page, limit } = req.query;
  req.query.skip = (page - 1) * limit;
  next();
};

module.exports = skip;
