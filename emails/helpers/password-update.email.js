const createEmailOptions = require('./create-email-options');
const sendEmail = require('./send-email');

const subject = 'Password Update Confirmation';
const text =
  'Hello, your password for our Booking System has been successfully updated. If you made this change, you can ignore this message. If you did not request this change, please contact our support team immediately for assistance.';

const passwordUpdateEmail = ({ email }) => {
  const mailOptions = createEmailOptions({ email, subject, text });
  sendEmail(mailOptions);
};

module.exports = passwordUpdateEmail;
