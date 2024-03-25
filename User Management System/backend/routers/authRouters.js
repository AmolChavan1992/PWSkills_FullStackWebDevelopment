const express = require("express");
const { signUp, login, getUser } = require("../controllers/authControllers");
const { signupDataValidate, loginDataValidate, authenticateUser } = require("../middleware/validator");
const authRouters = express.Router();

authRouters.post('/signup', signupDataValidate, signUp);
authRouters.post('/login', loginDataValidate, login);
authRouters.get('/', authenticateUser, getUser);

module.exports = authRouters;