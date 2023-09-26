const mongoose = require('mongoose');
const ROLE = require('../../utils/constants/role');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      maxLength: 32,
      required: true,
    },
    email: {
      type: String,
      maxLength: 32,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      // required: true,
    },
    role: {
      type: String,
      default: ROLE.USER,
    },
    provider: {
      type: String,
    },
    providerId: {
      type: String,
    },
  },
  {
    timestamps: true, // This option should be inside the schema configuration object
  },
);

const User = mongoose.model('User', userSchema);

module.exports = User;
