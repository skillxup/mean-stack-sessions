// import events module
var events = require("events");

// create an eventEmitter Object
var eventEmitter = new events.EventEmitter();

// create an eventHandler
var connectHandler = function connected() {
    console.log('connection successfull');

    // fire the dataReceived event
    eventEmitter.emit('dataReceived');
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('dataReceived', function() {
    console.log('data received successfully!');
});

eventEmitter.emit('connection');
console.log('eventEmitter program ends');
