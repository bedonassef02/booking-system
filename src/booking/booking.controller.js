const asyncHandler = require('express-async-handler');
const bookingService = require('./booking.service');
const STATUS_CODE = require('../utils/constants/status-code');

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
  res.status(STATUS_CODE.CREATED).send({ booking });
});

exports.findAll = asyncHandler(async (req, res) => {
  const { query } = req;
  const { user } = req;
  const bookings = await bookingService.findAll({ user: user.id, query });
  res.status(STATUS_CODE.OK).send({ bookings });
});

exports.findOne = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { user } = req;
  const booking = await bookingService.findOne({ id, user: user.id });
  res.status(STATUS_CODE.OK).send({ booking });
});

exports.updateStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const booking = await bookingService.updateStatus({ id, status });
  res.status(STATUS_CODE.OK).send({ booking });
});

exports.updatePayment = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const booking = await bookingService.updatePayment({ id });
  res.status(STATUS_CODE.OK).send({ booking });
});
