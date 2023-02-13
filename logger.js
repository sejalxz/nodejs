const EventEmitter = require('events');
const uuid = require('uuid');
 
// uuid.v4() : version 4, returns universally unique identifier
console.log(uuid.v4());

class Loggers extends EventEmitter{
    log(msg) {
        // Call event
        this.emit('message', { id: uuid.v4(), msg }); // msg:msg
    }
}

// module.exports = Loggers;

// index.js
const Loggers = require('./logger');

const logger = new Loggers();

logger.on('message', (data) => console.log('Called Listener: ', data));
 
logger.log('Hello, from logger');