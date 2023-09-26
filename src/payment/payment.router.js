const router = require('express').Router();
const RoleGuard = require('../auth/guards/roles.guard');
const AuthMiddleware = require('../auth/middlewares/auth.middleware');
const IsUserUpdatedMiddleware = require('../auth/middlewares/is-user-updated.middleware');
const PaymentGuard = require('../booking/guards/payment.guard');
const ROLE = require('../utils/constants/role');
const ParseMongoIdPipe = require('../utils/pipes/parse-mongo-id.pipe');
const { create, success, cancel } = require('./payment.controller');

router.post(
  '/:booking',
  AuthMiddleware,
  IsUserUpdatedMiddleware,
  RoleGuard(ROLE.USER),
  PaymentGuard,
  ParseMongoIdPipe,
  create,
);

router.get(
  '/success',
  AuthMiddleware,
  IsUserUpdatedMiddleware,
  RoleGuard(ROLE.USER),
  success,
);

router.get(
  '/cancel',
  AuthMiddleware,
  IsUserUpdatedMiddleware,
  RoleGuard(ROLE.USER),
  cancel,
);
module.exports = router;
