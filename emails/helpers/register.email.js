const createEmailOptions = require('./create-email-options');
const sendEmail = require('./send-email');

const subject = 'Welcome to Our Booking System!';
const text =
  'Thank you for registering with us. You are now a valued member of our Booking System community. Get started by booking your first event today!';

const registerEmail = ({ email }) => {
  const mailOptions = createEmailOptions({ email, subject, text });
  sendEmail(mailOptions);
};

module.exports = registerEmail;
