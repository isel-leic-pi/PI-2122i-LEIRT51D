//const tasksServices = require('./tasks-services.js')
const httpErrors = require('./errors/http-errors')

module.exports = function(tasksServices){

    return {
        getTasks: getTasks,
        addTask: addTask,
        getTaskById: getTaskById,
        updateTask: updateTask,
        deleteTask: deleteTask
    }

    function getTasks(req, resp){
        tasksServices.getTasks(req.header('Authorization').toString())
            .then(tasks => resp.json(tasks))
            .catch( err  => {
                const httpError = httpErrors.convertToHttpError(err)
                resp.status(httpError.status).json(httpError.body)
            })   
    }

    function addTask(req, resp){
        tasksServices.addTask(req.body.text, req.header('Authorization'))
            .then(task => resp.status(201).json(task))
            .catch( err  => {
                console.log(err)
                const httpError = httpErrors.convertToHttpError(err)
                resp.status(httpError.status).json(httpError.body)
            })
    }
    
    function getTaskById(req, resp){
        tasksServices.getTaskById(req.params.id,req.header('Authorization'))
            .then(task => resp.json(task))
            .catch( err  => {
                const httpError = httpErrors.convertToHttpError(err)
                resp.status(httpError.status).json(httpError.body)
            })
    }
    
   
    
    function updateTask(req, resp){
        resp.json({message : `updateTask id = $req.params.id` })
    }
    
    function deleteTask(req, resp){
        resp.json({message : `deleteTask id = $req.params.id` })
    }



}


        


