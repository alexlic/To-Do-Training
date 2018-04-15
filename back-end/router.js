const express = require('express')
const Router = express.Router()
//Import middleware
const createActivityController = require('./controllers/createActivity')
//register the middleware to be used when posting to /activities
Router.post('/activities', createActivityController);

module.exports = Router