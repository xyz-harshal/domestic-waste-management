const express = require('express');

const router = express.Router();

//controller
const {login, register} = require('../controllers/userController')

//login User
router.post('/login', login)

//Register User
router.post('/register', register)

module.exports = router;