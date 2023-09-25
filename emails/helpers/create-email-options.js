const createEmailOptions = ({ email, subject, text }) => {
  return {
    from: process.env.EMAIL_USER,
    to: email,
    subject,
    text,
  };
};

module.exports = createEmailOptions;
