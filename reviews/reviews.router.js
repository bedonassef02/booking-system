const router = require('express').Router();

const { create } = require('./reviews.controller')
const AuthMiddleware = require('../auth/middlewares/auth.middleware');
const IsUserUpdatedMiddleware = require('../auth/middlewares/is-user-updated.middleware');
const CreateReviewDto = require('./dto/create-review.dto');

router.post('/:offerId/reviews', AuthMiddleware, IsUserUpdatedMiddleware, CreateReviewDto, create);

module.exports = router;