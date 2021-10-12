function f1(a){
    console.log("Start F1")

    let f2 = function (n){
        console.log("F2 n = " + n)
    }

    f2(1)
    f2(2)

    console.log("End F1")
    return f2
}

let f3 = f1(2)
f3(3)

