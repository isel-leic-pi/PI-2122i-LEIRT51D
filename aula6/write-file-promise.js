const fs  = require('fs/promises')

const data = "HELLO WORLD"

const filePromise = fs.writeFile("file2.txt", data)

filePromise
    .then(console.log("Success"))
    .catch(err => console.log("Error " + err))

