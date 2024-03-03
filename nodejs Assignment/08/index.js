const event = require("events");

const eventEmitter = new event.EventEmitter();

eventEmitter.on('subscribe', data => {
    console.log('You are subscribed to', data);
});

eventEmitter.emit("subscribe", "College Wallah");