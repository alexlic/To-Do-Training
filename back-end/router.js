const express = require('express')
const Router = express.Router()

const activityController = require('./controllers/activityController')

activityController.update('/activity/:id', activityController.update)
