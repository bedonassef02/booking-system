const mongoose = require('mongoose');
const Review = require('./models/review.model');

exports.create = async ({ user, offering, rate, description }) => {
  return await Review.create({ user, offering, rate, description });
};

exports.findAll = async ({ offering }) => {
  return await Review.find({ offering });
};

exports.findOne = async ({ id }) => {
  return await Review.findById(id);
};

exports.update = async ({ id, rate, description }) => {
  return await Review.findByIdAndUpdate(
    id,
    { rate, description },
    { new: true },
  );
};

exports.remove = async ({ id }) => {
  await Review.findByIdAndRemove(id);
};

exports.getRating = async ({ offering }) => {
  const result = await Review.aggregate([
    {
      $match: { offering: new mongoose.Types.ObjectId(offering) }, // Match reviews for the specific offering
    },
    {
      $group: {
        _id: null,
        averageRating: { $avg: '$rate' }, // Calculate the average rating
      },
    },
  ]);
  return result[0].averageRating;
};
