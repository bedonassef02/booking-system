const CreateReviewDto = require('./create-review.dto');
const { param } = require('express-validator');
const reviewsService = require('../reviews.service');
const NotFoundException = require('../../utils/exceptions/not-found.exception');

const UpdateReviewDto = [
  param('id')
    .isMongoId()
    .withMessage('review id must be a valid Mongo id')
    .custom(async (id) => {
      const review = await reviewsService.findOne({ id });
      if (review) {
        return true;
      }
      throw new NotFoundException('Review not found');
    }),

  ...CreateReviewDto,
];

module.exports = UpdateReviewDto;
