const filter = (req, res, next) => {
    // Use destructuring to remove excluded fields from req.query
    const { page, sort, limit, skip, fields, ...filteredQuery } = req.query;

    // Convert query values to MongoDB query operators
    const filter = JSON.parse(JSON.stringify(filteredQuery).replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`));

    // Set the filtered query in req.query.filter
    req.query.filter = filter;

    // Merge the original req.query with filter
    req.query = { ...req.query, filter };

    next();
};

module.exports = filter;
