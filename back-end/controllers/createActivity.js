const activityModel = require('../models/activity')
//Export a middleware
module.exports = async (req, res, next) => {
    //craete a new instance of the model
    //pass the request body to the constructor 
    const activity = new activityModel(req.body)
    //write to the database and wait
    await activity.save()
    //repond to the client
    res.send(activity);
}

