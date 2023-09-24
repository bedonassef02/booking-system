const router = require('express').Router();
const { create, findAll } = require('./booking.controller');
const AuthMiddleware = require('../auth/middlewares/auth.middleware');
const IsUserUpdatedMiddleware = require('../auth/middlewares/is-user-updated.middleware');
const RolesGuard = require('../auth/guards/roles.guard');
const ROLE = require('../utils/constants/role');
const CreateBookingDto = require('./dto/create-booking.dto');
const QueryDto = require('../utils/dto/query.dto');

router.post('/', AuthMiddleware, IsUserUpdatedMiddleware, RolesGuard(ROLE.USER), CreateBookingDto, create);

router.get('/', AuthMiddleware, IsUserUpdatedMiddleware, QueryDto, findAll);

module.exports = router;