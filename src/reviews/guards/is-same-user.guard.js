const reviewsService = require('../reviews.service');
const asyncHandler = require('express-async-handler');
const NotFoundException = require('../../utils/exceptions/not-found.exception');

const IsSameUserGuard = asyncHandler(async (req, res, next) => {
  const { user } = req;
  const { id } = req.params;
  const review = await reviewsService.findOne({ id });

  if (review && review.user.toString() === user.id) {
    return next();
  }
  throw new NotFoundException('review not found');
});

module.exports = IsSameUserGuard;
