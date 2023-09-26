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

exports.updatePassword = asyncHandler(async (request, response) => {
  const { id } = request.user;
  const { newPassword, currentPassword } = request.body;
  const user = await authService.updatePassword({
    id,
    newPassword,
    currentPassword,
  });
  response.status(STATUS_CODE.CREATED).json(user);
});

// TODO: implement this method
exports.resetPassword = asyncHandler(async (request, response) => {
  const { email } = request.body;
});
