const data = require('./tasks-db.js')
const errors = require('./errors/tasks-errors')

module.exports = {
    getTasks: getTasks,
    addTask: addTask,
    getTaskById: getTaskById,
    updateTask: updateTask,
    deleteTask: deleteTask
}

function addTask(text, userToken){
    //TODO verify if text and userToken are undefined 
    //verify if userToken is associated to user - DONE
    //Create task - DONE
    return data.getUserByToken(userToken)
            .then(user => data.addTask(text, user.id)) 
            .catch(error => Promise.reject(errors.NOT_AUTHORIZE())) //TODO check if it is NOTFOUND USER
}

function getTaskById(id, userToken){
    //TODO verify if id and userToken are undefined 
    //TODO verify if userToken is associated to user
    //TODO get user task
    //TODO verify if user is owner
    return data.getTaskById(id)
}

function getTasks(userToken){
    //TODO verify if userToken are undefined
    //verify if userToken is associated to user - DONE
    //get tasks of user - DONE
    return data.getUserByToken(userToken)
            .then(user => data.getTasksByUserId(user.id))
            
     
}

function updateTask(id, text){
    console.log("updateTask")
}

function deleteTask(id){
    resp.json("deleteTask")
}
