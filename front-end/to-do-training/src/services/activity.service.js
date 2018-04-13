//const axios = require('axios')
const url = 'http://localhost:'
const port = 3001

const getActivities = () => {
    const data = fetch('localhost:3001/todolist/get-activities')
    .then( (result,err) => {
        if(result)
        console.log(result)
        else
            console.log("error getting data")
    })

    return data
}

module.exports = {
    getActivities
}