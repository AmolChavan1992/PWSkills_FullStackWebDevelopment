const express = require('express');
const app = express();
const authRouters = require('./router/authRouter');
const databaseConnect = require('./config/databaseConfig');
const cookieParser = require("cookie-parser")

databaseConnect();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRouters);

app.use('/', (req, res) => {
    res.status(200).json({data: "Server --Update"});
});

module.exports = app;