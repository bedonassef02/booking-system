const router = require('express').Router();
const AuthMiddleware = require('../auth/middlewares/auth.middleware');
const IsUserUpdatedMiddleware = require('../auth/middlewares/is-user-updated.middleware');
const { create } = require('./payment.controller');

router.post('/', AuthMiddleware, IsUserUpdatedMiddleware, create);

module.exports = router;