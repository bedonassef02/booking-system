const router = require('express').Router();

const AuthMiddleware = require('../auth/middlewares/auth.middleware');
const IsUserUpdatedMiddleware = require('../auth/middlewares/is-user-updated.middleware');
const { findOne, insert, remove } = require('./wishlist.controller');
const insertWishlistDto = require('./dto/insert-wishlist.dto');

router.get('/', AuthMiddleware, IsUserUpdatedMiddleware, findOne);

router.post('/', AuthMiddleware, IsUserUpdatedMiddleware, insertWishlistDto, insert);

router.delete('/', AuthMiddleware, IsUserUpdatedMiddleware, insertWishlistDto, remove);

module.exports = router;