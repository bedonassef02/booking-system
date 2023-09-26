const router = require('express').Router();
const AuthMiddleware = require('../auth/middlewares/auth.middleware');
const IsUserUpdatedMiddleware = require('../auth/middlewares/is-user-updated.middleware');
const ParseMongoIdPipe = require('../utils/pipes/parse-mongo-id.pipe');
const { findAll, remove } = require('./notifications.controller');

router.get('/', AuthMiddleware, IsUserUpdatedMiddleware, findAll);

router.delete(
  '/:id',
  AuthMiddleware,
  IsUserUpdatedMiddleware,
  ParseMongoIdPipe,
  remove,
);

module.exports = router;
