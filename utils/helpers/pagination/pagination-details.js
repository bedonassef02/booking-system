const paginationDetails = ({ page, limit, count, data }) => {
  const totalPages = Math.ceil(count / limit);
  const nextPage = page < totalPages ? page + 1 : null;
  const previousPage = page > 1 ? page - 1 : null;

  return {
    page,
    limit,
    totalPages,
    nextPage,
    previousPage,
    data,
  };
};

module.exports = paginationDetails;
