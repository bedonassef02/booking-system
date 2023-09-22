const mongoose = require('mongoose');

const DATABASE_USERNAME = process.env.DATABASE_USERNAME;
const DATABASE_NAME = process.env.DATABASE_NAME
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD
const DATABASE_URI = process.env.DATABASE_URI.replace('${DATABASE_USERNAME}', DATABASE_USERNAME).replace('${DATABASE_NAME}', DATABASE_NAME).replace('${DATABASE_PASSWORD}', DATABASE_PASSWORD);

const dbConnection = mongoose.connect(DATABASE_URI)

module.exports = dbConnection;