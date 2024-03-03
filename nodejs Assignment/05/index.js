const fs = require("fs");

fs.writeFileSync("nodejs_architecture.txt", "Sample Data", "utf8", (err) => {
    if(err) {
        console.log("Failed to write file.");
        return;
    }
    console.log("File write successfully.");
});

fs.unlink("nodejs_architecture.txt", (err) => {
    if(err) {
        console.log("Failed to delete file.");
        return;
    }
    console.log("File deleted successfully.");
});