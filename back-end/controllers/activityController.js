const ActivityModel = require('../models/activity') 

//Update activity on list 
const update = async function(req, res){
    let id = await ActivityModel.findOneAndUpdate({_id: req.params.id}, req.body)
    
    try {
        if(id){
            res.status(200).send('Changed success!')
        }
    } catch (error) {
        res.status(500).send('Error not activity found')
        
    }
}

module.exports = {
    update
}