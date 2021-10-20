const fs  = require('fs')

const data = "HELLO WORLD"

fs.writeFile("file2.txt", data,  processResult)

function processResult(err){
    if(err) console.log("Error ", err)
    else console.log("Sucess")
}