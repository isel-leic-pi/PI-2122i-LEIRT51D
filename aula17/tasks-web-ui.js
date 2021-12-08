
const httpErrors = require('./errors/http-errors')
const path = require('path')

module.exports = function(tasksServices){

    const fileOptions = {
		root: path.join(__dirname, 'views'),
		dotfiles: 'deny'
	};

    return {
        getHomePage: getHomePage,
        getTasks: getTasks,
        addTask: addTask,
        getTaskById: getTaskById,
    }

    function getHomePage(req, resp){
        resp.sendFile("home.html",fileOptions)
    }

    async function getTasks(req, resp){
        const tasks = await tasksServices.getTasks(getToken())
        resp.render("tasks-list", {tasks: tasks})
    }

    function addTask(req, resp){
        
    }
    
    async function getTaskById(req, resp){
        const task = await tasksServices.getTaskById(req.params.id, getToken())
        resp.render("task", {task: task})
    }

    function getToken(){
        return "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    }
    
   
    
    



}
