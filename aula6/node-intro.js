function add(a, b){
    return a + b
}

function addCB(a, b, cb){
    cb(a+b)
}

function addAsync(a, b, cb){
    setTimeout(()=>cb(a+b), 2000)
}

function processResult(res){
    console.log(res)
}

console.log("Before Add")
const result = add(2,3)
console.log("After Add")
processResult(result)

console.log("Before AddCB")
addCB(2,3, processResult)
console.log("After AddCB")

console.log("Before AddAsync")
addAsync(2,3, processResult)
console.log("After AddAsync")

//for(;;);

console.log("DONE")
