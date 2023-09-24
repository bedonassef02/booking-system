const router = require('express').Router();

const RoleGuard = require('../auth/guards/roles.guard');
const AuthMiddleware = require('../auth/middlewares/auth.middleware');
const IsUserUpdatedMiddleware = require('../auth/middlewares/is-user-updated.middleware');
const ROLE = require('../utils/constants/role');
const ParseMongoIdPipe = require('../utils/pipes/parse-mongo-id.pipe');
const CreateOfferingDto = require('./dto/create-offering.dto');
const UpdateOfferingDto = require('./dto/update-offering.dto');
const {
  create,
  findAll,
  findOne,
  update,
  remove,
} = require('./offering.controller');
const QueryDto = require('../utils/dto/query.dto');
const upload = require('../utils/helpers/multer/multer');
router.use('/', require('../reviews/reviews.router'));

router
  .route('/')
  .get(QueryDto, findAll)
  .post(
    AuthMiddleware,
    IsUserUpdatedMiddleware,
    // RoleGuard([ROLE.ADMIN]),
    upload.array('images', 32),
    CreateOfferingDto,
    create,
  );

router
  .route('/:id')
  .get(ParseMongoIdPipe, findOne)
  .patch(
    AuthMiddleware,
    IsUserUpdatedMiddleware,
    RoleGuard([ROLE.ADMIN]),
    UpdateOfferingDto,
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
