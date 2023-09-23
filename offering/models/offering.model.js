const mongoose = require('mongoose');

const offeringSchema = new mongoose.Schema(
  {
    // Name of the offering (required)
    name: {
      type: String,
      required: true,
      trim: true, // Trim leading/trailing spaces
    },
    // Description of the offering (required)
    description: {
      type: String,
      required: true,
    },
    // Price of the offering (required, minimum value of 0)
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    // Location where the offering is available (optional)
    location: String,
    // Maximum capacity of the offering (required, minimum value of 1)
    capacity: {
      type: Number,
      required: true,
      min: 1,
    },
    // Array of image URLs associated with the offering (required)
    images: {
      type: [String],
      required: true,
    },
    // Array of facilities available with the offering (optional)
    facilities: {
      type: [String],
    },
    // Array of days when the offering is available (optional)
    days: {
      type: Number,
      required: true,
      min: 1,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt timestamps
  },
);

const Offering = mongoose.model('Offering', offeringSchema);

module.exports = Offering;
