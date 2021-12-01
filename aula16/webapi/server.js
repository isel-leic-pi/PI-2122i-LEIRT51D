
const TASKS_DATA_HOST = 'localhost:9200'
const DEFAULT_PORT = '8080'

//const tasksData = require('./tasks-db-mem.js')(TASKS_DATA_HOST)
const tasksData = require('./tasks-db-mem.js')
const tasksServices = require('./tasks-services.js')(tasksData)
const tasksApi = require('./tasks-web-api.js')(tasksServices)
const express = require('express')
const app = express()

app.use(express.json())

app.get('/tasks', tasksApi.getTasks)
app.post('/tasks', tasksApi.addTask)
app.get('/tasks/:id', tasksApi.getTaskById)
app.put('/tasks/:id', tasksApi.updateTask)
app.delete('/tasks/:id', tasksApi.deleteTask)

app.listen(process.argv[2] || DEFAULT_PORT , () => console.log("Listening"))



