const { default: mongoose } = require('mongoose');

const whishlistSchema = new mongoose.Schema(
  {
    offerings: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Offering',
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      unqiue: true,
    },
  },
  {
    timestamps: true,
  },
);

const Wishlist = mongoose.model('Wishlist', whishlistSchema);

module.exports = Wishlist;
