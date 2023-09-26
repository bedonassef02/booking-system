const asyncHandler = require('express-async-handler');
const reviewsService = require('./reviews.service');
const STATUS_CODE = require('../utils/constants/status-code');

exports.create = asyncHandler(async (req, res) => {
  const user = req.user.id;
  const offering = req.params.offerId;
  const { rate, description } = req.body;
  const review = await reviewsService.create({
    user,
    offering,
    rate,
    description,
  });
  res.status(STATUS_CODE.CREATED).json({ review });
});

exports.findAll = asyncHandler(async (req, res) => {
  const offering = req.params.offerId;
  const reviews = await reviewsService.findAll({ offering });
  res.status(STATUS_CODE.OK).json({ reviews });
});

exports.update = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { rate, description } = req.body;
  const review = await reviewsService.update({ id, rate, description });
  res.status(STATUS_CODE.OK).json({ review });
});

exports.remove = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await reviewsService.remove({ id });
  res.status(STATUS_CODE.OK).json({ message: 'review deleted successfully' });
});

exports.getRating = asyncHandler(async (req, res) => {
  const { offerId } = req.params;
  const rating = await reviewsService.getRating({ offering: offerId });
  res.status(STATUS_CODE.OK).json({ rating });
});
