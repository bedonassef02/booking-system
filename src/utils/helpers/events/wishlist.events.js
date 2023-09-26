const { EventEmitter } = require('node:events');

const wishlistEvent = new EventEmitter();

module.exports = wishlistEvent;