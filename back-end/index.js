const express = require('express')
const app = express()
require('dotenv').config()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASEURL)

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
 console.log('connected successfuly')
})

app.use(bodyParser.json())

const router = require('./router')

app.use('/', router)

//HTTP HEADERS
app.use( ( req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Acces-Controll-Allow-Headers', 'Authorization, X-API-KEY','Origin, X-Requested-With, Content-Type, Accept, Acces-ControlAllow-Request-Method' )
  res.header('Acces-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')

  next()
})

app.listen(process.env.PORT, function () {
  console.log('app listen on port ' + process.env.PORT)
})

