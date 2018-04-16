const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

require('dotenv').config()
const port = process.env.DB_PORT 
mongoose.connect('mongodb://'+process.env.DB_HOST+'/'+process.env.DB_URL)

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
 console.log('connected successfuly')
})

app.use(bodyParser.urlencoded({ extended: false}))

const router = require('./router')

app.use('/', router)

app.listen(port, function () {
  console.log('app listen on port ' + port)
})