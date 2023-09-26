const createEmailOptions = require('./create-email-options');
const sendEmail = require('./send-email');
const usersService = require('../../users/users.service');

const subject = 'New Offering!!!';
let text = '';

const offeringCreateEmail = async ({ name }) => {
  text = name;
  const users = await usersService.findAll();
  users.forEach((user) => {
    sendToUser({ email: user.email });
  });
};

const sendToUser = ({ email }) => {
  const mailOptions = createEmailOptions({ email, subject, text });
  sendEmail(mailOptions);
};

module.exports = offeringCreateEmail;
