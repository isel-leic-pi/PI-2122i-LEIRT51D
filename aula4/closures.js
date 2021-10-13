function f1(x){
    console.log("Start F1")

    function f2(y){
        console.log(`X = ${x} Y = ${y}`)
    }

    console.log("End F1")
    return f2
}

let f3 = f1(5)
let f4 = f1(10)
f3(1)
f4(2)
