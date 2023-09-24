const Booking = require('./models/booking.model');
const offeringService = require('../offering/offering.service')

exports.create = async ({ user, offering, time, duration, details }) => {
  const offer = await offeringService.findOne({ id: offering });
  const price = offer.price * duration;
  return await Booking.create({ user, offering, time, duration, details, price });
};

exports.findAll = async ({ user, query }) => {
  const keyword = query.keyword;
  const search = keyword ? { $or: keyword } : {};
  console.log(keyword);
  console.log(search);

  return await Booking.find({ ...query.filter, user, ...search })
    .select(query.fields)
    .skip(query.skip)
    .limit(query.limit)
    .sort(query.sort);
};

const findOne = async ({ id }) => {
  return await Booking.findById(id);
};

const remove = async ({ id }) => {
  return await Booking.findByIdAndRemove(id);
};
