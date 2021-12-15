//npm install hbs

const httpErrors = require('./errors/http-errors')
const path = require('path')

module.exports = function(router, tasksServices){

    const fileOptions = {
		root: path.join(__dirname, 'views'),
		dotfiles: 'deny'
	};

    router.get('/', getHomePage)
    router.get('/tasks', getTasks)
    router.post('/tasks', addTask)
    router.get('/tasks/:id', getTaskById)

    return router

    function getHomePage(req, resp){
        resp.sendFile("home.html",fileOptions)
    }

    async function getTasks(req, resp){
        const tasks = await tasksServices.getTasks(getToken())
        resp.render("tasks-list", {tasks: tasks})
    }

    async function addTask(req, resp){
        const task = await tasksServices.addTask(req.body.text, getToken())
        //resp.status(303)
        //resp.set('location',`/tasks/${task.id}`)
        //resp.end()
        resp.redirect(303,`/tasks/${task.id}`)
    }
    
    async function getTaskById(req, resp){
        const task = await tasksServices.getTaskById(req.params.id, getToken())
        resp.render("task", {task: task})
    }

    function getToken(){
        return "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    }
    


}
