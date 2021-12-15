
const TASKS_DATA_HOST = 'localhost:9200'
const DEFAULT_PORT = '8080'

const path = require('path')
//const tasksData = require('./tasks-db-mem.js')(TASKS_DATA_HOST)
const tasksData = require('./tasks-db-mem.js')
const tasksServices = require('./tasks-services.js')(tasksData)
const tasksApi = require('./tasks-web-api.js')(tasksServices)
const tasksUI = require('./tasks-web-ui.js')(tasksServices)
const getImage = require('./images.js')


const express = require('express')
const app = express()
app.use(express.json())

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');



app.get('/api/tasks', tasksApi.getTasks)
app.post('/api/tasks', tasksApi.addTask)
app.get('/api/tasks/:id', tasksApi.getTaskById)
app.put('/api/tasks/:id', tasksApi.updateTask)
app.delete('/api/tasks/:id', tasksApi.deleteTask)

app.get('/', tasksUI.getHomePage)
app.get('/tasks', tasksUI.getTasks)
app.post('/tasks', tasksUI.addTask)
app.get('/tasks/:id', tasksUI.getTaskById)

app.get('/imgs/:imageId', getImage)

app.listen(process.argv[2] || DEFAULT_PORT , () => console.log("Listening"))



