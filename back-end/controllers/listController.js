const activities = require('../models/activites')

//--------------------------CRUD METHODS-------------------------
//create
//read
//update
//delete
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
  deleteOne
}