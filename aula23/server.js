
const TASKS_DATA_HOST = 'localhost:9200'
const DEFAULT_PORT = '8080'


const path = require('path')
const express = require('express')
const app = express()

//const tasksData = require('./tasks-db-mem.js')(TASKS_DATA_HOST)
const tasksData = require('./tasks-db-mem.js')
//const tasksData = require('./tasks-db.js')
const tasksServices = require('./tasks-services.js')(tasksData)
const tasksApiRouter = require('./tasks-web-api.js')(express.Router(),tasksServices)
const tasksUiRouter = require('./tasks-web-ui.js')(express.Router(), tasksServices)
const authUiRouter = require('./auth-web-ui.js')(app ,express.Router(), tasksServices)

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use('/api',tasksApiRouter)

app.use('/',authUiRouter)
app.use('/',tasksUiRouter)


app.listen(process.argv[2] || DEFAULT_PORT , () => console.log("Listening"))



