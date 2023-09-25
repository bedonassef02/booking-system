const Wishlist = require('./models/wishlist.model');

exports.create = async ({ user }) => {
  return await Wishlist.create({ user });
};

exports.insert = async ({ id, user }) => {
  const wishlist = await Wishlist.findById(id);
  const offerings = wishlist.offerings;
  if (isOfferingExists({ offerings, id })) {
    wishlist.offerings = offerings.push(id);
  }
  return wishlist;
};

exports.remove = async ({ id, user }) => {
  const wishlist = await Wishlist.findOne({ user });
  const offeringIndex = wishlist.offerings.indexOf(id);

  if (offeringIndex === -1) {
    return wishlist;
  }

  wishlist.offerings.splice(offeringIndex, 1);
  wishlist.save();
  return wishlist;
};

exports.findAll = async ({ user }) => {
  return await Wishlist.find({ user });
};

const isOfferingExists = ({ offerings, id }) => {
  return offerings.includes(id);
};
