const event = require("events");

const eventEmitter = new event.EventEmitter();

// eventEmitter.on('subscribe', data => {
//     console.log('You are subscribed to', data);
// });

// eventEmitter.emit("subscribe", "College Wallah");

console.log("The default maximum number of event listeners are: ", eventEmitter.getMaxListeners());

eventEmitter.setMaxListeners(5);
console.log("The updated maximum number of event listeners are: ", eventEmitter.getMaxListeners());