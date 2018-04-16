const express = require('express')
const Router = express.Router()
const listController = require('./controllers/list.js')

//--------------------CRUD ROUTES------------------------

//CREATE
//READ
//UPDATE

//DELETE
Router.delete('/todolist/delete/:id', listController.deleteOne)

module.exports = Router