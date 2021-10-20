const fetch = require('node-fetch')

function fetchLoripsum(){
    return fetch("https://loripsum.net/api/short/plaintext")
    .then(response => { 
        console.log(response.status)
        return response.text()
    })
    .then(body => console.log("BODY" , body))
    //.catch(err => console.log("Error", err))

}

//https://api.boardgameatlas.com/api/search?name=catan&limit=1&client_id=

function fetchGames(){
    return fetch("https://api.boardgameatlas.com/api/search?name=catan&limit=1&client_id=")
    .then(response => response.json())  
    .then(obj => console.log("Obj" , obj))
    //.catch(err => console.log("Error", err))

}

/*fetchLoripsum()
    .then(()=>console.log("Done"))
    .catch(err => console.log("Error", err))
*/

fetchGames()
    .then(()=>console.log("Done"))
    .catch(err => console.log("Error", err))


console.log("Done Really?")


