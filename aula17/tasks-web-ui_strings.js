
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
        resp.send(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>Tasks</title>
                <meta charset="utf-8">
            </head>
            <body>
                <!-- Header -->
                <a href="/"> Home </a>
                <a href="tasks"> Tasks </a>
        
                <table border="true">
                    <tr>
                        <th>Identifier</th>
                        <th>Text</th>
                    </tr>
                    ${buildTableLines(tasks)}
                </table>
        
                <!-- Footer -->
                <p>Chelas 2021</p>
        
            </body>
        </html>
        
        `)
    }

    function buildTableLines(tasks){
        return tasks.map(buildLine).join('')
    }

    function buildLine(task){
        return `<tr>
                    <td><a href="tasks/${task.id}">${task.id}</a></td>
                    <td>${task.text}</td>
                </tr>`
    }

    function addTask(req, resp){
        
    }
    
    async function getTaskById(req, resp){
        const task = await tasksServices.getTaskById(req.params.id, getToken())
        resp.send(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>Tasks</title>
                <meta charset="utf-8">
            </head>
            <body>
                <!-- Header -->
                <a href="/"> Home </a>
                <a href="/tasks"> Tasks </a>
                <h1> Tasks Details </h1>
                <ul>
                    <li>Identifier : ${task.id}</li>
                    <li>Text : ${task.text}</li>
                </ul>
        
                <!-- Footer -->
                <p>Chelas 2021</p>
        
            </body>
        </html>
        
        `)
    }

    function getToken(){
        return "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    }
    
   
    
    



}
