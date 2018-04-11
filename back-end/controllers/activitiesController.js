const ActivityModel = require('../models/activity')

const get = function ( req, res ) {
    console.log(ActivityModel)
    ActivityModel.find({}).exec( (err, result) => {
        if(err){
          console.log(err)
          res.estatus(500).send({message: 'error in data data base'})
        }
        else{
            result.length > 0 ? res.send(result) : res.send({message: 'there is not activities saved'})
        }
    })
}

module.exports = {
    get
}