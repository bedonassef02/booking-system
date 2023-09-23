const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    rate: {
      type: Number,
      required: true,
      min: 1,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    offering: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Offering',
    },
    description: {
      type: String,
      maxLength: 256,
    },
  },
  {
    timestamps: true,
  },
);

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
