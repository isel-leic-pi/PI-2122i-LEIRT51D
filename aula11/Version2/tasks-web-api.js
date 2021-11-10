const tasks = [
    {id : 1, text : "task1"},
    {id : 2, text : "task2"}
]

let nextId = 3

module.exports = {
    getTasks : getTasks,
    getTaskByID : getTaskByID,
    updateTask : updateTask,
    createTask : createTask,
    deleteTask : deleteTask
}

function getTasks(req, resp){
    resp.json(tasks)
}

function getTaskByID(req, resp){
    const task = tasks.find(t => t.id == req.params.id)
    if(!task)
        return resp.status(404).json({message : "Not Found"})
    resp.json(task)
}

function createTask(req, resp){
    const newId = nextId++
    tasks.push({id : newId, text : req.body.text})
    resp.status(201).json({message : "Created"})
}

function updateTask(req, resp){
    resp.json({message : "updateTask id = " + req.params.id })
}

function deleteTask(req, resp){ 
    resp.json({message : "deleteTask " })
}
