'use strict'

let pResolved = new Promise((resolve, reject)=>{ resolve(40)})
let pRejected = new Promise((resolve, reject)=>{ reject('Error')})

pResolved
    .then(v => console.log('pResolved ' + v))
    .then(() => console.log('50'))
    //.catch(e => console.log('pResolved ' + e))

console.log(pResolved)

pRejected
    .then(v => console.log('pRejected ' + v))
    .catch(e => console.log('pRejected ' + e))

console.log(pRejected)

let p = new Promise(()=>console.log("Promise executor"))

console.log(p)

console.log('Done Really?')

