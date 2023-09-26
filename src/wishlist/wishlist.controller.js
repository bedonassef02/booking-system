const asyncHandler = require('express-async-handler');
const wishlistService = require('./wishlist.service');

exports.findOne = asyncHandler(async (req, res) => {
    const { user } = req;
    const wishlist = await wishlistService.findOne({ user: user.id });
    res.status(200).json({ wishlist });
});

exports.insert = asyncHandler(async (req, res) => {
    const { user } = req;
    const { offering: id } = req.body;
    const wishlist = await wishlistService.insert({ id, user: user.id });
    res.status(200).json({ wishlist });
});

exports.remove = asyncHandler(async (req, res) => {
    const { user } = req;
    const { offering: id } = req.body;
    const wishlist = await wishlistService.remove({ id, user: user.id });
    res.status(200).json({ wishlist });
});