const express = require('express')
const Router = express.Router()

const activitiesController = require('./controllers/activitiesController')

Router.get('/activities', activitiesController.get)

module.exports = Router