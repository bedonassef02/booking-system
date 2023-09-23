const Review = require('./models/review.model');

exports.create = async ({ user, offering, rate, description }) => {
  return await Review.create({ user, offering, rate, description });
};

const findAll = async () => {
  return await Review.find();
};

const update = async () => { };
