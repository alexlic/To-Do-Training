const ActivityModel = require('../models/activity')

//------------Get activities---------
const getActivities = function ( req, res ) {
    ActivityModel.find({}).exec( (err, result) => {
        if(err){
            console.log(err)
            return res.status(500).json({message: 'error in data data base'})
        }
        res.json(result)
    })
}
//------------Add activity-----------

//------------Update activity---------

//------------Delete activity---------
const deleteOne = function (req, res) {
    ActivityModel.findOneAndRemove({_id: req.params.id}, function(err, acttivity){
        if(err){
            return res.status(500).json({message:"Something went wrong tryng to delete the activity"})
        }
        res.json({message: 'Activity deleted'})
    })
}


module.exports = {
    getActivities,
    deleteOne
}