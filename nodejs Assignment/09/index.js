const event = require("events");

const eventEmitter = new event.EventEmitter();
const listener = "subscribe";

const result_data  = (receive_data) => {
    console.log('You are subscribed to', receive_data);
};

console.log("Add listerner...");
eventEmitter.addListener(listener, result_data);

console.log("Emit...");
eventEmitter.emit(listener, "College Wallah");

console.log("Remove listener...");
eventEmitter.removeListener(listener, result_data);

console.log("Emit (after remove listener)...");
eventEmitter.emit(listener, "College Wallah");