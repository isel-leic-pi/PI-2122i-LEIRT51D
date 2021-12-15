//const tasksServices = require('./tasks-services.js')
const httpErrors = require('./errors/http-errors')

module.exports = function(router, tasksServices){

    
    router.get('/tasks', getTasks)
    router.post('/tasks', addTask)
    router.get('/tasks/:id', getTaskById)
    router.put('/tasks/:id', updateTask)
    router.delete('/tasks/:id', deleteTask)

    return router

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


        


