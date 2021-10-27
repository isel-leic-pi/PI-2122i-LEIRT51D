'use strict'

const fetch = require('node-fetch')

function fetchLoripsum(){
    return fetch("https://loripsum.net/api/short/plaintext")
    .then(response => response.text())
}

function withoutAsyncAwait(){
    const request1 = fetchLoripsum()
    const request2 = fetchLoripsum()

    const array = [request1, request2]

    return Promise.all(array)
        /*.then(result =>{
            console.log(result[0])
            console.log(result[1])
        })*/
}

async function withAsyncAwait(){
    const request1 = fetchLoripsum()
    const request2 = fetchLoripsum()

    const array = [request1, request2]

    const results = await Promise.all(array)
    //console.log[0]
    //console.log[1]
    return results
        
}

withoutAsyncAwait()
    .then(result=>console.log("Done without AsyncAwait", result))
    .catch(()=>console.log("Error", err))

withAsyncAwait()
    .then( result => console.log("Done with AsyncAwait", result))
    .catch(()=>console.log("Error", err))

