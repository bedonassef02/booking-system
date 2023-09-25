const emailsEvent = require('../utils/helpers/events/emails.events');
const offeringCreateEmail = require('./helpers/offering-create.email');
const loginEmail = require('./helpers/login.email');
const passwordUpdateEmail = require('./helpers/password-update.email');
const registerEmail = require('./helpers/register.email');

emailsEvent.on('register', registerEmail);

emailsEvent.on('login', loginEmail);

emailsEvent.on('password.update', passwordUpdateEmail);

emailsEvent.on('offering.create', offeringCreateEmail);
