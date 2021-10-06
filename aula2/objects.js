let std1 = {name : "Filipe", number : 1604}

console.log(std1)

std1.email = "ffreitas@cc.isel.ipl.pt"
console.log(std1)

delete std1.name
console.log(std1)

console.log(std1.name)
console.log(std1.number)
console.log(std1["number"])

function showProp(obj){
    for(let p in obj){
        console.log(p + "-" + obj[p])
    }
}

showProp(std1)
