const taskData = require('./tasks-db_mem')
const errors = require('./errors/tasks-errors')

module.exports = {
    getTasks : getTasks,
    getTaskByID : getTaskByID,
    updateTask : updateTask,
    createTask : createTask,
    deleteTask : deleteTask
}

function getTasks(token){
    //TODO verify if userToken are undefined
    //verify if userToken is associated to user - DONE
    //get tasks of user - DONE
    return taskData.getUserByToken(token)
            .then(user => taskData.getTasksByUserId(user.id))
}

function getTaskByID(id, token){
    //TODO verify if id and userToken are undefined 
    //TODO verify if userToken is associated to user
    //TODO get user task
    //TODO verify if user is owner
    if(!id) return Promise.reject(errors.INVALID_TASK_ID(id))
    return taskData.getTaskByID(id)
}

function createTask(text, token){
    //TODO verify if text and token are not undefined
    //verify if token is associated with user
    //create Task
    return taskData.getUserByToken(token)
                    .then(user => taskData.createTask(text, user.id))
                    .catch(error => Promise.reject(errors.NOT_AUTHORIZE())) 
                        // TODO Verify if is user Not FOUND
}

function updateTask(id, text){
    console.log("updateTask")
}

function deleteTask(id){ 
    console.log("deleteTask")
}
