const asyncHandler = require('express-async-handler');
const reviewsService = require('./reviews.service');

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
  res.status(201).json({ review });
});

exports.findAll = asyncHandler(async (req, res) => {
  const offering = req.params.offerId;
  const reviews = await reviewsService.findAll({ offering });
  res.status(200).json({ reviews });
});

exports.update = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { rate, description } = req.body;
  const review = await reviewsService.update({ id, rate, description });
  res.status(200).json({ review });
});

exports.remove = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await reviewsService.remove({ id });
  res.status(200).json({ message: 'review deleted successfully' });
});

exports.getRating = asyncHandler(async (req, res) => {
  const { offerId } = req.params;
  const rating = await reviewsService.getRating({ offering: offerId });
  res.status(200).json({ rating });
});
