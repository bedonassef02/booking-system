const router = require('express').Router();

const { create, findAll, update, remove } = require('./reviews.controller');
const AuthMiddleware = require('../auth/middlewares/auth.middleware');
const IsUserUpdatedMiddleware = require('../auth/middlewares/is-user-updated.middleware');
const RolesGuard = require('../auth/guards/roles.guard');
const CreateReviewDto = require('./dto/create-review.dto');
const ROLE = require('../utils/constants/role');
const UpdateReviewDto = require('./dto/update-review.dto');
const IsSameUserGuard = require('./guards/is-same-user.guard');

router.post(
    '/:offerId/reviews',
    AuthMiddleware,
    IsUserUpdatedMiddleware,
    RolesGuard([ROLE.USER]),
    CreateReviewDto,
    create,
);
router.get('/:offerId/reviews', findAll);
router.patch(
    '/:offerId/reviews/:id',
    AuthMiddleware,
    IsUserUpdatedMiddleware,
    RolesGuard([ROLE.USER]),
    UpdateReviewDto,
    IsSameUserGuard,
    update,
);
router.delete(
    '/:offerId/reviews/:id',
    AuthMiddleware,
    IsUserUpdatedMiddleware,
    RolesGuard([ROLE.USER]),
    IsSameUserGuard,
    remove,
);

module.exports = router;
