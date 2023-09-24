const asyncHandler = require('express-async-handler');
const bookingService = require('./booking.service');

exports.create = asyncHandler(async (req, res) => {
  const { user } = req;
  const { offering, time, duration, details } = req.body;
  const booking = await bookingService.create({
    user: user.id,
    offering,
    time,
    duration,
    details,
  });
  res.status(201).send({ booking });
});

exports.findAll = asyncHandler(async (req, res) => {
  const { query } = req;
  const { user } = req;
  const bookings = await bookingService.findAll({ user: user.id, query });
  res.status(200).send({ bookings });
});

exports.findOne = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { user } = req;
  const booking = await bookingService.findOne({ id, user: user.id });
  res.status(200).send({ booking });
});
