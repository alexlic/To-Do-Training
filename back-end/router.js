const express = require('express')
const Router = express.Router()
const activitiesController = require('./controllers/activity.js')

//--------------------CRUD ROUTES------------------------

//CREATE
Router.get('/todolist/get-activities', activitiesController.getActivities)
//READ
//UPDATE
//DELETE
Router.delete('/todolist/delete-activities/:id', activitiesController.deleteOne)

module.exports = Router