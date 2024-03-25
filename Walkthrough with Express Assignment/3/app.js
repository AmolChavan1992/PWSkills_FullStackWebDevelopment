const express = require("express");
const routers = require("./routers");
const app = express();

app.use(express.json());

app.use("/Q3", routers);

app.use('/', (req, res) => {
    res.status(200).json({data: "Server started"});
});

module.exports = app;