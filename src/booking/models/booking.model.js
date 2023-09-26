const mongoose = require('mongoose');
const STATUS = require('../utils/constants/status');
const PAYMENT = require('../utils/constants/payment');

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
    time: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: STATUS,
      default: STATUS.PENDING,
    },
    payment: {
      type: String,
      enum: PAYMENT,
      default: PAYMENT.PENDING,
    },
    price: {
      type: Number,
      required: true,
    },
    details: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
