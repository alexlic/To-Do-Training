const ActivityModel = require('../models/activity')

//Update activity on list 
const update = async function (req, res) {
    try {
      let id = await ActivityModel.findOneAndUpdate({ _id: req.params.id }, req.body)
      if(id){
        res.status(200).send(req.body)
      }
    } catch (error) {
      res.status(500).send('error update activity')
    }
  }
module.exports = {
    update,
    post
}