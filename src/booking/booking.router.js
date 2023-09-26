const router = require('express').Router();
const {
  create,
  findAll,
  findOne,
  updateStatus,
  updatePayment,
} = require('./booking.controller');
const AuthMiddleware = require('../auth/middlewares/auth.middleware');
const IsUserUpdatedMiddleware = require('../auth/middlewares/is-user-updated.middleware');
const RolesGuard = require('../auth/guards/roles.guard');
const ROLE = require('../utils/constants/role');
const CreateBookingDto = require('./dto/create-booking.dto');
const QueryDto = require('../utils/dto/query.dto');
const ParseMongoIdPipe = require('../utils/pipes/parse-mongo-id.pipe');
const UpdateBookingStatusDto = require('./dto/update-booking-status.dto');
const PaymentGuard = require('./guards/payment.guard');
const NotificationsMiddleware = require('../notifications/middlewares/notifications.middleware');

router.post(
  '/',
  AuthMiddleware,
  IsUserUpdatedMiddleware,
  RolesGuard(ROLE.USER),
  CreateBookingDto,
  create,
);

router.get('/', AuthMiddleware, IsUserUpdatedMiddleware, QueryDto, findAll);

router.get(
  '/:id',
  AuthMiddleware,
  IsUserUpdatedMiddleware,
  ParseMongoIdPipe,
  findOne,
);

router.patch(
  '/:id/status',
  AuthMiddleware,
  IsUserUpdatedMiddleware,
  RolesGuard(ROLE.ADMIN),
  UpdateBookingStatusDto,
  ParseMongoIdPipe,
  NotificationsMiddleware,
  updateStatus,
);

module.exports = router;
