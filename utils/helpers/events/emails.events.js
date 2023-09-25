const { EventEmitter } = require('node:events');

const emailsEvent = new EventEmitter();

module.exports = emailsEvent;
