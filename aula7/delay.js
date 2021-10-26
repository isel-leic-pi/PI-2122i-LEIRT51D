'use strict'

function delay(timeout, success, cb){
    setTimeout(()=>{
        if(!success) return cb('5xx or 4xx')
        cb(null,'2xx')
    },timeout)
}

function delayPromise(timeout, success){
    return new Promise((resolve, reject) =>{
        delay(timeout,success, (err, result) => 
                                err ? reject(err):resolve(result))
    })
}

delayPromise(1000, true)
    .then(result => console.log("Success " + result))
    .catch(err => console.log("Error " + err))


delayPromise(2000, false)
    .then(result => console.log("Success " + result))
    .catch(err => console.log("Error " + err))


/*
    delay(1000, true, (err,result)=>{
    if(err) return console.log("Error " + err)
    console.log("Success " + result)
})

delay(2000, false, (err,result)=>{
    if(err) return console.log("Error " + err)
    console.log("Success " + result)
})
*/
console.log('Done Really?')