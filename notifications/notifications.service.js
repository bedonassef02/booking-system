const Notification = require('./models/notification.model');
const notificationsEvent = require('../utils/helpers/events/notifications.events');

notificationsEvent.on(
  'notifications.create',
  async ({ title, message, user }) => {
    await create({ title, message, user });
  },
);

const markAsSeen = async ({ user }) => {
  await Notification.updateMany({ user }, { seen: true });
};

const create = async ({ title, message, user }) => {
  await Notification.create({ title, message, user });
};

exports.findAll = async ({ user }) => {
  const notifications = await Notification.find({ user });
  await markAsSeen({ user });
  return notifications;
};

exports.remove = async ({ id, user }) => {
  await Notification.findOneAndRemove({ id, user });
};
