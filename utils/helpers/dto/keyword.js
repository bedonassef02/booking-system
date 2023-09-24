const keyword = (req, res, next) => {
  let query = { ...req.query };
  const keyword = query.keyword || '';
  if (keyword) {
    $or = [
      { name: { $regex: keyword, $options: 'i' } },
      { description: { $regex: keyword, $options: 'i' } },
    ];
    req.query.keyword = $or;
  }
  next();
};

module.exports = keyword;
