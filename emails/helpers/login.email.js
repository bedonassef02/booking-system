const createEmailOptions = require('./create-email-options');
const sendEmail = require('./send-email');

const subject = 'Security Alert: Unusual Login Detected';
const text =
  'Hello, it appears that there was a login to your account from an unusual location. If this was you, please disregard this message. If not, please change your password immediately for security purposes.';

const loginEmail = ({ email }) => {
  const mailOptions = createEmailOptions({ email, subject, text });
  sendEmail(mailOptions);
};

module.exports = loginEmail;
