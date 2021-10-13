function multiplier(factor){

    function m(number){
        return factor * number
    }
    return m
}

const m10 = multiplier(10)
const m2 = multiplier(2)

console.log(m10(5)) //50
console.log(m10(2)) //20

console.log(m2(4)) //8
console.log(m2(5)) //10
