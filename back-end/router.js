const express = require('express')
const Router = express.Router()

const activitiesController = require('./controllers/activities')

Router.get('/get-activities', activitiesController.getActivities)

module.exports = Router