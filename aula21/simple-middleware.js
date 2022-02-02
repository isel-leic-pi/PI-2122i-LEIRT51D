const express = require('express')
const app = express()

app.use(firstMiddleware)
app.use(secondMiddleware)
app.get('/', rootHandler)

app.listen(8080, () => console.log('Listening'))


function firstMiddleware(req, res, next){
    console.log("FirstMiddleware")
    req.date = new Date()
    next()
}

function secondMiddleware(req, res, next){
    console.log("SecondMiddleware")
    console.log(req.date)
    if(!req.headers.authorization) return sendUnauthorize(res) 
    next()
}

function sendUnauthorize(res){
    console.log('Unauthorize')
    res.status(401)
    res.end()
}

function rootHandler(req, res){
    console.log("RootHandler")
    console.log(req.date)
    res.send('Hello World')

}

