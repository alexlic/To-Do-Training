const express = require('express')
const Router = express.Router()

const activityController = require('./controllers/activity.js')

Router.get('/todolist/get-activities', activityController.getActivities)
Router.put('/todolist/update-activities/:id', activityController.updateActivities)


module.exports = Router
