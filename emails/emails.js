const emailsEvent = require('../utils/helpers/events/emails.events');
const createEmailOptions = require('./helpers/create-email-options');
const sendEmail = require('./helpers/send-email');

emailsEvent.on('register', ({ email }) => {
  const subject = 'Welcome to Our Booking System!';
  const text =
    'Thank you for registering with us. You are now a valued member of our Booking System community. Get started by booking your first event today!';
  const mailOptions = createEmailOptions({ email, subject, text });
  sendEmail(mailOptions);
});

emailsEvent.on('login', ({ email }) => {
  const subject = 'Security Alert: Unusual Login Detected';
  const text =
    'Hello, it appears that there was a login to your account from an unusual location. If this was you, please disregard this message. If not, please change your password immediately for security purposes.';
  const mailOptions = createEmailOptions({ email, subject, text });
  sendEmail(mailOptions);
});

emailsEvent.on('password.update', ({ email }) => {
  const subject = 'Password Update Confirmation';
  const text =
    'Hello, your password for our Booking System has been successfully updated. If you made this change, you can ignore this message. If you did not request this change, please contact our support team immediately for assistance.';
  const mailOptions = createEmailOptions({ email, subject, text });
  sendEmail(mailOptions);
});
