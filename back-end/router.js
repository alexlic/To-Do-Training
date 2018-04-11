const express = require('express')
const Router = express.Router()
const listController = require('./controllers/listController.js')

//--------------------CRUD ROUTES------------------------

//CREATE
//READ
//UPDATE
//DELETE
Router.post('/todolist', listController.post)
Router.delete('/todolist/:id', listController.deleteOne)

module.exports = Router