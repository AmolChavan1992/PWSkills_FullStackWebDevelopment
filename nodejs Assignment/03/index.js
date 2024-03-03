const fs = require("fs");

//#region Write data to file

// const data = "Node.js uses the “Single Threaded Event Loop” architecture to handle multiple concurrent clients.";
// fs.writeFile("nodejs_architecture.txt", data, "utf8", (err) => {
//     if(err) {
//         console.log("Failed to write data to file: ", err);
//         return;
//     }
//     console.log("Write operation completed.")
// });

//#endregion

// Read file content and display on console
fs.readFile("nodejs_architecture.txt", "utf8", (err, data) => {
    if(err) {
        console.log("Failed to read file content");
        return;
    }
    console.log("File Content: ", data);
});
console.log("File read completed.");