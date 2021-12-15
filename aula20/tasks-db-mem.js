const users = [
    {id : 11, userName : "Filipe", token : "3fa85f64-5717-4562-b3fc-2c963f66afa6" },
    {id : 12, userName : "Joao", token : "3fa85f64-5717-4562-b3fc-2c963f66afa7" }
]

const tasks = [
    {id : 1, text : "task 1", userId : 11 },
    {id : 2, text : "task 2", userId : 12 }
]

let nextId=3  

const errors = require('./errors/tasks-errors')

module.exports = {
    getTasksByUserId: getTasksByUserId,
    addTask: addTask,
    getTaskById: getTaskById,
    updateTask: updateTask,
    deleteTask: deleteTask,
    getUserByToken: getUserByToken
}

function getUserByToken(token){
    const user = users.find(u=>u.token==token)
    if(!user) return Promise.reject(errors.NOT_FOUND()) 
    return Promise.resolve(user)
}

function addTask(text, userId){
    const id = nextId++
    const newTask = {id : id, text : text, userId : userId}
    tasks.push(newTask)
    return Promise.resolve(newTask)
}

function getTaskById(id){
    const task = tasks.find(t=>t.id==id)
    if(!task) return Promise.reject(errors.NOT_FOUND(id)) 
    return Promise.resolve(task)
}

function getTasksByUserId(userId){
    return Promise.resolve(tasks.filter(t=>t.userId==userId))
}

function updateTask(id, text){
    console.log("updateTask")
}

function deleteTask(id){
    resp.json("deleteTask")
}
