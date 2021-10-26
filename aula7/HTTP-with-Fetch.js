const fetch = require('node-fetch')


//https://api.boardgameatlas.com/api/search?name=catan&limit=1&client_id=

function fetchGames(){
    return fetch("https://api.boardgameatlas.com/api/search?name=catan&limit=1&client_id=")
    .then(response => {
       console.log(`Status ${response.status}`)
       return response.json()
    })  
    .then(obj => console.log("Obj" , obj))
    //.catch(err => console.log("Error", err))
}


async function fetchGamesAsyncAwait(){
    //try{
        const response = await fetch("https://api.boardgameatlas.com/api/search?name=catan&limit=1&client_id=")
        console.log(`Status ${response.status}`)
        const obj = await response.json()
        console.log("Obj" , obj)
    //}catch(err){
    //    console.log("Error", err)
    //}
    
}
    
/*fetchGames()
    .then(()=>console.log("Done"))
    .catch(err => console.log("Error", err))
*/

fetchGamesAsyncAwait()
    .then(()=>console.log("Done"))
    .catch(err => console.log("Error", err))

console.log("Done Really?")


