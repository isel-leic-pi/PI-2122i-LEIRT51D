const express = require('express')

const app = express()

app.use(express.json())

app.get('/tasks', getTasks)
app.get('/tasks/:id', getTaskByID)
app.put('/tasks/:id', updateTask)
app.post('/tasks', createTask)
app.delete('/tasks/:id', deleteTask)

app.listen(8080, ()=> console.log('Listening'))


function getTasks(req, resp){
    resp.json({message : "Get Tasks" })
}

function getTaskByID(req, resp){
    resp.json({message : "getTaskByID id = " + req.params.id })
}

function updateTask(req, resp){
    resp.json({message : "updateTask id = " + req.params.id })
}

function createTask(req, resp){
    resp.json({message : "createTask" })
}

function deleteTask(req, resp){ 
    resp.json({message : "deleteTask " })
}
