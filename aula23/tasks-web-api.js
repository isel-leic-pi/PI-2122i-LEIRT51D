//const tasksServices = require('./tasks-services.js')
const httpErrors = require('./errors/http-errors')

module.exports = function(router, tasksServices){

    router.use(authorizationMw)

    router.get('/tasks', getTasks)
    router.post('/tasks', addTask)
    router.get('/tasks/:id', getTaskById)
    router.put('/tasks/:id', updateTask)
    router.delete('/tasks/:id', deleteTask)

    return router

    function authorizationMw(req, rsp, next) {
        if(req.get('Authorization')){
                req.user = {
                token: req.get('Authorization').split(' ')[1]
            }
        }
        next()
    }

    function getTasks(req, resp){
        tasksServices.getTasks(getToken(req))
            .then(tasks => resp.json(tasks))
            .catch( err  => {
                const httpError = httpErrors.convertToHttpError(err)
                resp.status(httpError.status).json(httpError.body)
            })   
    }

    function addTask(req, resp){
        console.log("addTask")
        tasksServices.addTask(req.body.text, getToken(req))
            .then(task => resp.status(201).json(task))
            .catch( err  => {
                console.log(err)
                const httpError = httpErrors.convertToHttpError(err)
                resp.status(httpError.status).json(httpError.body)
            })
    }
    
    function getTaskById(req, resp){
        tasksServices.getTaskById(req.params.id, getToken(req))
            .then(task => resp.json(task))
            .catch( err  => {
                const httpError = httpErrors.convertToHttpError(err)
                resp.status(httpError.status).json(httpError.body)
            })
    }
    
   
    
    function updateTask(req, resp){
        tasksServices.updateTask(req.params.id, req.params.text, getToken(req))
            .then(task => resp.json(task))
            .catch( err  => {
                const httpError = httpErrors.convertToHttpError(err)
                resp.status(httpError.status).json(httpError.body)
            })
    }
    function deleteTask(req, resp){
        console.log("deleteTask")
        resp.json({message : `deleteTask id = ${req.params.id}` })
    }

    function getToken(req) {
		return req.user && req.user.token;
	}


}


        


