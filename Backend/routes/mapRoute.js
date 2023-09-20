const express = require('express');

const Router = express.Router();
const {postDetails, getDetails} = require('../controllers/mapController');

Router.get('/', getDetails);

Router.post('/', postDetails);

module.exports = Router;