/* From https://www.elastic.co/guide/en/elastic-stack-glossary/current/terms.html#d-glos
index - Collection of JSON documents. 
document - JSON object containing data stored in Elasticsearch
*/

//curl -X DELETE http://localhost:9200/users
//curl -X PUT http://localhost:9200/users
//curl -X PUT --data '{"userName" : "Filipe", "token" : "3fa85f64-5717-4562-b3fc-2c963f66afa6" }' -H "Content-Type: application/json" http://localhost:9200/users/_doc/11
//curl -X PUT --data '{"userName" : "Joao", "token" : "3fa85f64-5717-4562-b3fc-2c963f66afa7"  }' -H "Content-Type: application/json" http://localhost:9200/users/_doc/12


//curl -X DELETE http://localhost:9200/tasks
//curl -X PUT http://localhost:9200/tasks
//curl -X POST --data '{"text" : "task 1", "userId" : 11 }' -H "Content-Type: application/json" http://localhost:9200/tasks/_doc
//curl -X POST --data '{"text" : "task 2", "userId" : 12 }' -H "Content-Type: application/json" http://localhost:9200/tasks/_doc



//TODO Errors control and refactor code

const errors = require('./errors/tasks-errors')
const fetch = require('node-fetch')

const baseURL = "http://localhost:9200/"



module.exports = {
    getTasksByUserId: getTasksByUserId,
    addTask: addTask,
    getTaskById: getTaskById,
    updateTask: updateTask,
    deleteTask: deleteTask,
    getUserByToken: getUserByToken
}

function getUserByToken(token){
   
    return fetch(baseURL + `users/_search?q=token:"${token}"`, {
            headers : {"Accept" : "application/json"}
         })
        .then(response => response.json())
        .then(body => body.hits.hits.map(t => { return {id : t._id , userName : t._source.userName}})[0])
}

function addTask(text, userId){
    const body = {
        text : text,
        userId : userId
    }
    return fetch(baseURL + `tasks/_doc`, {
        method : "POST",
        body : JSON.stringify(body),
        headers : {
            "Content-Type" : "application/json", 
            "Accept" : "application/json"}
     })
    .then(response => response.json())
    .then(result => {return {id : result._id, text : text, userId : userId}})    
}

function getTaskById(id){
    return fetch(baseURL + `tasks/_doc/${id}`, {
                headers : {"Accept" : "application/json"}
        })
        .then(response => response.json())
        .then(body => { body._source })
}

function getTasksByUserId(userId){
    return fetch(baseURL + `tasks/_search?q=userId:"${userId}"`, {
        headers : {"Accept" : "application/json"}
    })
    .then(response => response.json())
    .then(body => body.hits.hits.map(t => t._source))
}

function updateTask(id, text){
    console.log("updateTask")
}

function deleteTask(id){
    resp.json("deleteTask")
}
