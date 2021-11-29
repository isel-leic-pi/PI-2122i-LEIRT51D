
const tasksServices = require('./tasks-services')
const errors = require('./errors/http-errors')

module.exports = {
    getTasks : getTasks,
    getTaskByID : getTaskByID,
    updateTask : updateTask,
    createTask : createTask,
    deleteTask : deleteTask
}

function getTasks(req, resp){
    tasksServices.getTasks(req.header('Authorization'))
        .then(tasks => resp.json(tasks))
        .catch(error =>{
            const httpError = errors.convertToHttpError(error)
            resp.status(httpError.status).json(httpError.body)
        })
}

function getTaskByID(req, resp){
    tasksServices.getTaskByID(req.params.id, req.header('Authorization'))
        .then(task => resp.json(task))
        .catch(error =>{
            const httpError = errors.convertToHttpError(error)
            resp.status(httpError.status).json(httpError.body)
        })            
}

function createTask(req, resp){
    tasksServices.createTask(req.body.text, req.header('Authorization'))
        .then(task=>resp.status(201).json(task))
        .catch(error =>{
            const httpError = errors.convertToHttpError(error)
            resp.status(httpError.status).json(httpError.body)
        })
}

function updateTask(req, resp){
    resp.json({message : "updateTask id = " + req.params.id })
}

function deleteTask(req, resp){ 
    resp.json({message : "deleteTask " })
}
