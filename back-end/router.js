const express = require('express')
const Router = express.Router()

const activityController = require('./controllers/activityController')


Router.post('/todo-list', activityController.post)
Router.put('/todo-list/:id', activityController.update)


module.exports = Router
