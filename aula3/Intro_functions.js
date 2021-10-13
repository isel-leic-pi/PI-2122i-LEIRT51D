function f1(){
    return "Function 1"
}
 console.log(f1())

 function f2(){
     console.log("XXXXXX")
 }

let a = f2()
console.log(a)

let f3 = function(){return "Function 3"}

console.log(f3())
console.log(f3 instanceof Function)
console.log(typeof(f3))

f3.email = "ffreitas@cc.isel.ip.l.pt"

console.log(f3.email)
console.log(f3)

let std1 = {name : "Filipe", number : 1604}
let std2 = {name : "Filipe", number : 1604}

std1.m1 = function() {console.log("m1 called")}

std1.m1()


function showProp(obj){

    console.log("Properties")
    for(let p in obj){
        let prop = obj[p]
        if(prop instanceof Function){
            prop()
        }else{
            console.log(p + "-" + prop)
        } 
    }
}
showProp(std1)

function f4(a,b,c){
    console.log("F4 called")
    console.log(a)
    console.log(b)
    console.log(c)
}

f4(1,2,3)
f4(1,2)
f4(1)
f4()

function f5(a, ... rest){
    console.log("F5 called")
    console.log(a)
    console.log(rest)
    console.log(rest[0])
}

f5(1,2,3)
f5(1,2)
f5(1)

f5(undefined,1,3)

function executeAndPrint(a,b, transform){
    const res = transform(a,b)
    console.log("Transformacao = " + res)
}

executeAndPrint(3,4, function(a,b){return a + b})
executeAndPrint(3,4, function(a,b){return a - b})

executeAndPrint(3,4, (a,b) =>  a + b)
executeAndPrint(3,4, (a,b) =>  a - b)
