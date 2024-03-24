const express = require('express');
const { signUp, signIn, getUser, logout } = require('../controllers/authController');
const { jwtAuth } = require('../middleware/jwtAuth');
const authRouters = express.Router();

authRouters.post('/signUp', signUp);
authRouters.post('/signIn', signIn);
authRouters.get('/user', jwtAuth, getUser);
authRouters.get('/logout', jwtAuth, logout);

module.exports = authRouters;