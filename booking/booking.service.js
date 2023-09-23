const Booking = require('./models/booking.model');

const create = async ({ user, offering }) => {
  return await Booking.create({ user, offering });
};

const findAll = async () => {
  return await Booking.find();
};

const findOne = async ({ id }) => {
  return await Booking.findById(id);
};

const remove = async ({ id }) => {
  return await Booking.findByIdAndRemove(id);
};
