const Booking = require('./models/booking.model');
const offeringService = require('../offering/offering.service');
const NotFoundException = require('../utils/exceptions/not-found.exception');
const paginationDetails = require('../utils/helpers/pagination/pagination-details');
const PAYMENT = require('./utils/constants/payment');

exports.create = async ({ user, offering, time, duration, details }) => {
  const offer = await offeringService.findOne({ id: offering });
  const price = offer.price * duration;
  return await Booking.create({
    user,
    offering,
    time,
    duration,
    details,
    price,
  });
};
const countDocuments = async ({ filter }) => {
  return await Booking.countDocuments(filter);
};

exports.findAll = async ({ user, query }) => {
  const keyword = query.keyword;
  const search = keyword ? { $or: keyword } : {};
  const filter = { ...query.filter, user, ...search };
  const count = countDocuments({ filter });
  const data = await Booking.find(filter)
    .select(query.fields)
    .skip(query.skip)
    .limit(query.limit)
    .sort(query.sort);
  return paginationDetails({
    page: query.page,
    limit: query.limit,
    count,
    data,
  });
};

exports.findOne = async ({ id, user }) => {
  const booking = await Booking.findOne({ _id: id, user });
  if (booking) {
    return booking;
  }
  throw new NotFoundException('Booking not found');
};

// TODO: implement this method
exports.update = async ({ id, user }) => {};

exports.updateStatus = async ({ id, status }) => {
  return Booking.findByIdAndUpdate(id, { status }, { new: true });
};

exports.updatePayment = async ({ id }) => {
  return Booking.findByIdAndUpdate(
    id,
    { payment: PAYMENT.COMPLETED },
    { new: true },
  );
};
