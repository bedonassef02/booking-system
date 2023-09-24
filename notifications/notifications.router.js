const router = require('express').Router();
const AuthMiddleware = require('../auth/middlewares/auth.middleware');
const IsUserUpdatedMiddleware = require('../auth/middlewares/is-user-updated.middleware');
const { findAll } = require('./notifications.controller');

router.get('/', AuthMiddleware, IsUserUpdatedMiddleware, findAll);

module.exports = router;
