const fs  = require('fs')

fs.readFile("file1.txt", processData)

function processData(error, data){
    if(error) return console.log(error)
    console.log(data.toString())
}