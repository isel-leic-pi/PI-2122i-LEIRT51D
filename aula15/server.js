const tasksApi = require('./tasks-web-api.js')
const express = require('express')
const app = express()

app.use(express.json())

app.get('/tasks', tasksApi.getTasks)
app.post('/tasks', tasksApi.addTask)
app.get('/tasks/:id', tasksApi.getTaskById)
app.put('/tasks/:id', tasksApi.updateTask)
app.delete('/tasks/:id', tasksApi.deleteTask)

app.listen(8080 , () => console.log("Listening"))

