const fs = require("fs");

//#region Write data to file

const data = "Node.js uses the “Single Threaded Event Loop” architecture to handle multiple concurrent clients.";
fs.writeFile("nodejs_architecture.txt", data, "utf8", (err) => {
    if(err) {
        console.log("Failed to write data to file: ", err);
        return;
    }
    console.log("Write operation completed.")
});

//#endregion

// Append data to file
const append_data = "\nAdvantages: \n1. Scalable web app development.\n2. High Performace.\n3. Cost effective.\n4. Powerful data processing.";
fs.appendFile("nodejs_architecture.txt", append_data, "utf8", (err) => {
    if(err) {
        console.log("Failed to append data to file.");
        return;
    }
    console.log("Data appended successfully.");
});

// Read file content and display on console
fs.readFile("nodejs_architecture.txt", "utf8", (err, data) => {
    if(err) {
        console.log("Failed to read file content");
        return;
    }
    console.log("File Content: ", data);
});
console.log("File read completed.");