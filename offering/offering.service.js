const NotFoundException = require('../utils/exceptions/not-found.exception');
const Offering = require('./models/offering.model');

exports.create = async ({
  name,
  description,
  price,
  location,
  capacity,
  images,
  facilities,
  days,
}) => {
  const offering = await Offering.create({
    name,
    description,
    price,
    location,
    capacity,
    images,
    facilities,
    days,
  });
  return offering;
};

exports.findAll = async () => {
  return await Offering.find();
};

exports.findOne = async ({ id }) => {
  const offer = await Offering.findById(id);
  if (offer) {
    return offer;
  }
  throw new NotFoundException(`Offering ${id} not found`);
};

exports.remove = async ({ id }) => {
  await Offering.findByIdAndRemove(id);
};

exports.update = async ({ id, data }) => {
  return await Offering.findByIdAndUpdate(id, { ...data }, { new: true });
};
