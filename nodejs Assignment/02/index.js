const { Console } = require("console");
const fs = require("fs");

const data = "Node.js uses the “Single Threaded Event Loop” architecture to handle multiple concurrent clients.";
fs.writeFile("nodejs_architecture.txt", data, "utf8", (err) => {
    if(err) {
        console.log("Failed to write data to file: ", err);
        return;
    }
    console.log("Write operation completed.")
});