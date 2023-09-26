const wishlistEvent = require('../utils/helpers/events/wishlist.events');
const Wishlist = require('./models/wishlist.model');

wishlistEvent.on('wishlist.create', async ({ user }) => {
  await this.create({ user });
});

exports.create = async ({ user }) => {
  return await Wishlist.create({ user });
};

exports.insert = async ({ id, user }) => {
  const wishlist = await Wishlist.findOne({ user });
  const offerings = wishlist.offerings;
  if (!isOfferingExists({ offerings, id })) {
    wishlist.offerings.push(id);
  }
  await wishlist.save();
  return wishlist;
};

exports.remove = async ({ id, user }) => {
  const wishlist = await Wishlist.findOne({ user });
  const offeringIndex = wishlist.offerings.indexOf(id);

  if (offeringIndex === -1) {
    return wishlist;
  }

  wishlist.offerings.splice(offeringIndex, 1);
  await wishlist.save();
  return wishlist;
};

exports.findOne = async ({ user }) => {
  return await Wishlist.find({ user });
};

const isOfferingExists = ({ offerings, id }) => {
  return offerings.includes(id);
};
