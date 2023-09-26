const router = require('express').Router();

const RoleGuard = require('../auth/guards/roles.guard');
const AuthMiddleware = require('../auth/middlewares/auth.middleware');
const IsUserUpdatedMiddleware = require('../auth/middlewares/is-user-updated.middleware');
const ROLE = require('../utils/constants/role');
const ParseMongoIdPipe = require('../utils/pipes/parse-mongo-id.pipe');
const {
  findAll,
  create,
  findOne,
  remove,
  update,
} = require('./categories.controller');
const CreateCategoryDto = require('./dto/create-category.dto');
const UpdateCategoryDto = require('./dto/update-category.dto');

router
  .route('/')
  .get(findAll)
  .post(
    AuthMiddleware,
    IsUserUpdatedMiddleware,
    RoleGuard([ROLE.ADMIN]),
    CreateCategoryDto,
    create,
  );

router.get('/:slug', findOne);

router
  .route(':id')
  .patch(
    AuthMiddleware,
    IsUserUpdatedMiddleware,
    RoleGuard([ROLE.ADMIN]),
    UpdateCategoryDto,
    update,
  )
  .delete(
    AuthMiddleware,
    IsUserUpdatedMiddleware,
    RoleGuard([ROLE.ADMIN]),
    ParseMongoIdPipe,
    remove,
  );

module.exports = router;
