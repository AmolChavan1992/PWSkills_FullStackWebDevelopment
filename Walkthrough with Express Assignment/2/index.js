const express = require("express");
const PORT = 5000;

const app = express();

app.listen(PORT, () => {
    console.log(`Server is running on http//localhost:${PORT}`);
});

const counter = 1;

app.use("/increment", (req, res) => {
    res.status(200).json({
        counter: counter+1
    })
});

app.use("/decrement", (req, res) => {
    res.status(200).json({
        counter: counter-1
    })
});

app.use("/", (req, res) => {
    res.status(200).json({
        counter: counter
    })
});