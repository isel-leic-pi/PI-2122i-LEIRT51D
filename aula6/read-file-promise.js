const fs  = require('fs/promises')

const filePromise = fs.readFile("file1.txt")

filePromise
    .then(data => console.log(data.toString()))
    .catch(error => console.log(error))

console.log("DONE")
