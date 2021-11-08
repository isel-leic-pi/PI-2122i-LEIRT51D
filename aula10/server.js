const express = require('express')

const app = express()

app.use(express.json())

app.get('/', rootHandler)
app.get('/students', studentsHandler)
app.get('/students/:id', studentByIdHandler)
app.put('/students/:id', putStudentHandler)
app.post('/students', postStudentHandler)
app.delete('/students', deleteStudentHandler)

app.listen(8080, ()=> console.log('Listening'))

function rootHandler(req, resp){
    logRequest(req)
    resp.send({message : "rootHandler"})
}

function studentsHandler(req, resp){
    logRequest(req)
    resp.send({message : "studentsHandler" })
}

function studentByIdHandler(req, resp){
    logRequest(req)
    resp.send({message : "studentByIdHandler id = " + req.params.id })
}

function putStudentHandler(req, resp){
    logRequest(req)
    resp.send({message : "putStudentHandler id = " + req.params.id })
}

function postStudentHandler(req, resp){
    logRequest(req)
    resp.send({message : "postStudentHandler " })
}

function deleteStudentHandler(req, resp){
    logRequest(req)
    resp.send({message : "deleteStudentHandler " })
}

function logRequest(req){

    console.log(req.hostname)
    console.log(req.method)
    console.log(req.url)
    console.log(req.path)
    console.log(req.params)
    console.log(req.query)
    console.log(req.body)
    
}