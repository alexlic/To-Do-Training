const ActivityModel = require('../models/activity')

//Update activity on list 
const update = async function (req, res) {
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
    update,
    post
}