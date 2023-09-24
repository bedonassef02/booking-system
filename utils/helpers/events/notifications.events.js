const { EventEmitter } = require('node:events');

const notificationsEvent = new EventEmitter();

module.exports = notificationsEvent;
