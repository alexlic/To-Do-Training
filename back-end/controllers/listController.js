const activities = require('../models/activity')

//--------------------------CRUD METHODS-------------------------
//create
//read
//update
//delete
const post = async (req, res) => {
    const newSchema = new activities(req.body)
    await newSchema.save()
    res.json({newSchema})
  }
  

const deleteOne = async function (req, res) {
  await activities.findOneAndRemove({_id: req.params.id}, function(err, acttivity){
      if(err){
          res.status(500).send("Something went wrong tryng to delete the activity")
      }
      else{
          res.send("Activity deleted")
      }
  })
}

module.exports = {
  post,
  deleteOne
}