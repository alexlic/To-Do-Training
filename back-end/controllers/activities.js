const ActivityModel = require('../models/activity')

const getActivities = function ( req, res ) {
    ActivityModel.find({}).exec( (err, result) => {
        if(err){
            console.log(err)
            return res.estatus(500).send({message: 'error in data data base'})
        }
        res.send(result)
    })
}

module.exports = {
    getActivities
}