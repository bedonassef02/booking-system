const notificationsEvent = require('../../utils/helpers/events/notifications.events');

const createBookingNotification = async (bookingId, newStatus, user) => {
  const title = 'Booking Status Update';
  const name = user.email.split('@')[0];
  const message = `Hello ${name}, your booking with ID ${bookingId} has been updated to status "${newStatus}". Please log in to check the details.`;
  notificationsEvent.emit('notifications.create', {
    title,
    message,
    user: user.id,
  });
};

const NotificationsMiddleware = async (req, res, next) => {
  const { user } = req;
  const { id: bookingId } = req.params;
  const { status: newStatus } = req.body;
  await createBookingNotification(bookingId, newStatus, user);

  next();
};

module.exports = NotificationsMiddleware;
