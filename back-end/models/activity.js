const mongoose = require('mongoose')
const Schema = mongoose.Schema

const activityModel = new Schema({
  description: String
})

module.exports = mongoose.model('activity', activityModel)