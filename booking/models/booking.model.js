const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    offering: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Offering',
    },
  },
  {
    timestamps: true,
  },
);

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
