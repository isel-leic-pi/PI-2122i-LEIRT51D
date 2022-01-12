//npm install hbs

const httpErrors = require('./errors/http-errors')
//TODO ERRORS AND REMOVE duplicated code 

module.exports = function(router, tasksServices){

    router.get('/', getHomePage)
    router.get('/tasks', getTasks)
    router.post('/tasks', addTask)
    router.get('/tasks/:id', getTaskById)
    router.get('/tasks/update/:id', getUpdatePage)

    return router

    function getHomePage(req, resp){
        resp.render("home", {username : getUserName(req)})
    }

    async function getUpdatePage(req, resp){
        const task = await tasksServices.getTaskById(req.params.id, getToken(req))
        resp.render("update-task", {task: task, scriptName : "update-task", username : getUserName(req)})
    }

    async function getTasks(req, resp){
        try{
            const tasks = await tasksServices.getTasks(getToken(req))
            resp.render("tasks-list", {tasks: tasks, scriptName : "tasks-list", username : getUserName(req)})
        }catch(err){
            const httpError = httpErrors.convertToHttpError(err)
            resp.status(httpError.status).json(httpError.body) //TODO
        } 
    }

    async function addTask(req, resp){
        const task = await tasksServices.addTask(req.body.text, getToken(req))
        //resp.status(303)
        //resp.set('location',`/tasks/${task.id}`)
        //resp.end()
        resp.redirect(303,`/tasks/${task.id}`)
    }
       
    async function getTaskById(req, resp){
        const task = await tasksServices.getTaskById(req.params.id, getToken(req))
        resp.render("task", {task: task, username : getUserName(req)})
        
    }
}


function getToken(req) {
    return req.user && req.user.token;
}

function getUserName(req) {
    return req.user && req.user.userName;
}