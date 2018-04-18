const ActivityModel = require('../models/activity')
//Get Activities
const getActivities = function ( req, res ) {
  ActivityModel.find({}).exec( (err, result) => {
      if(err){
          console.log(err)
          return res.estatus(500).send({message: 'error in data data base'})
      }
      res.send(result)
  })
}
//Update activity on list 
const updateActivities = async function (req, res) {
    try {
      const id = await ActivityModel.findOneAndUpdate({ _id: req.params.id }, req.body)
      if(id){
        res.json('\"'+id.description+'\"' +' updated succesfully!')
      }else{
        res.send('Error update activity')
      }
    } catch (error) {
      res.status(500).send('error update activity')
    }
  }
module.exports = {
    updateActivities,
    getActivities
}