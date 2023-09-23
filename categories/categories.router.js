const router = require('express').Router();

const RoleGuard = require('../auth/guards/roles.guard');
const AuthMiddleware = require('../auth/middlewares/auth.middleware');
const IsUserUpdatedMiddleware = require('../auth/middlewares/is-user-updated.middleware');
const ROLE = require('../utils/constants/role');
const { findAll, create, findOne, remove, update } = require("./categories.controller");
const CreateCategoryDto = require('./dto/create-category.dto');
const UpdateCategoryDto = require('./dto/update-category.dto');

router.get('/', findAll);

router.post('/', AuthMiddleware, IsUserUpdatedMiddleware, RoleGuard([ROLE.ADMIN]), CreateCategoryDto, create);

router.get('/:slug', findOne);

router.patch('/:id', AuthMiddleware, IsUserUpdatedMiddleware, RoleGuard([ROLE.ADMIN]), UpdateCategoryDto, update);

router.delete('/:id', AuthMiddleware, IsUserUpdatedMiddleware, RoleGuard([ROLE.ADMIN]), remove);


module.exports = router;