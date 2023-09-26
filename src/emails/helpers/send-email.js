const nodemailer = require('nodemailer');
const CustomLogger = require('../../utils/helpers/logger/custom.logger');
const logger = new CustomLogger('SEND_EMAIL');

const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: EMAIL_PASSWORD,
  },
});

const sendEmail = (mailOptions) => {
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      logger.error(error);
    } else {
      logger.info('Email sent: ' + info.response);
    }
  });
};

module.exports = sendEmail;
