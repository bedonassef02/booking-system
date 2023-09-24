const Review = require('./models/review.model');

exports.create = async ({ user, offering, rate, description }) => {
  return await Review.create({ user, offering, rate, description });
};

exports.findAll = async ({ offering }) => {
  return await Review.find({ offering });
};

exports.findOne = async ({ id }) => {
  console.log(id);
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
