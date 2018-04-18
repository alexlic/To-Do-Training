const express = require('express')
const app = express()
require('dotenv').config()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASEURL)
const cors = require('cors')

const port = process.env.DB_PORT 

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
 console.log('connected successfuly')
})

app.use(bodyParser.json(), cors() )

const router = require('./router')

app.use('/', router)

app.listen(port, function () {
  console.log('app listen on port ' + port)
})