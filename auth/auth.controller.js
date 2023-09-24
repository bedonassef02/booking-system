const asyncHandler = require('express-async-handler');
const authService = require('./auth.service');
const STATUS_CODE = require('../utils/constants/status-code');

exports.login = asyncHandler(async (request, response) => {
  const { email, password } = request.body;
  const user = await authService.login({ email, password });
  response.status(STATUS_CODE.OK).json(user);
});

exports.register = asyncHandler(async (request, response) => {
  const { name, email, password } = request.body;
  const user = await authService.register({ name, email, password });
  response.status(STATUS_CODE.CREATED).json(user);
});
