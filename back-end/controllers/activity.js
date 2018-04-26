const ActivityModel = require('../models/activity')

//------------Get activities---------
const getActivities = function ( req, res ) {
    ActivityModel.find({}).exec( (err, result) => {
        if(err){
            console.log(err)
            return res.estatus(500).send({message: 'error in data data base'})
        }
        res.send(result)
    })
}
//------------Add activities-----------

//------------Update activities---------

//------------Delete activities---------
const deleteOne = function (req, res) {
    ActivityModel.findOneAndRemove({_id: req.params.id}, function(err, acttivity){
        if(err){
            return res.status(500).send("Something went wrong tryng to delete the activity")
        }
        res.send({message: 'Activity deleted'})
    })
}


module.exports = {
    getActivities,
    deleteOne
}