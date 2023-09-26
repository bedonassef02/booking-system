const STATUS_CODE = require('../utils/constants/status-code');
const notificationsService = require('./notifications.service');
const asyncHandler = require('express-async-handler');

exports.findAll = asyncHandler(async (req, res) => {
  const { user } = req;
  const notifications = await notificationsService.findAll({ user: user.id });
  res.status(STATUS_CODE.OK).json({ notifications });
});

exports.remove = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { user } = req;
  await notificationsService.remove({ id, user: user.id });
  res
    .status(STATUS_CODE.OK)
    .json({ message: 'notification removed successfully' });
});
