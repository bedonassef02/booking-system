const asyncHandler = require('express-async-handler');
const reviewsService = require('./reviews.service');

exports.create = asyncHandler(async (req, res) => {
    const user = req.user.id;
    const offering = req.params.offerId;
    const { rate, description } = req.body;
    const review = await reviewsService.create({ user, offering, rate, description })
    res.status(201).json({ review });
});