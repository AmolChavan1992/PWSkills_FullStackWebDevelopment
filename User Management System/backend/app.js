const express = require("express");
const authRouters = require("./routers/authRouters")
const databaseConnect = require("./config/databaseConfig");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

databaseConnect();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials:true
}));

app.use('/api/auth', authRouters);

app.use('/', (req, res) => {
    res.status(200).json({data: "Server is running"});
});

module.exports = app;