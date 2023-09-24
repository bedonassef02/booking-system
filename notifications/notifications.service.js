const Notification = require('./models/notification.model');
const notificationsEvent = require('../utils/helpers/events/notifications.events');

notificationsEvent.on(
  'notifications.create',
  async ({ title, message, user }) => {
    await create({ title, message, user });
  },
);

const create = async ({ title, message, user }) => {
  await Notification.create({ title, message, user });
};

exports.findAll = async ({ user }) => {
  return await Notification.find({ user });
};
