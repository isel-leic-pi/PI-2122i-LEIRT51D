const numbers = [1,2,3,4]

console.log(numbers.filter(e => e % 2))

console.log(numbers.map(e => e * 2))

console.log(numbers.reduce((prev,curr)=> prev + curr, 5))

const triple = numbers.filter(e => e % 2)
                        .map(e => e * 3)

console.log(triple)

function filter(array, predicate){
    const newArray = []
    for(let e of array){
        if(predicate(e)) newArray.push(e)
    }
    return newArray

}

console.log(filter(numbers, e => e % 2))

function map(array, transform){
    const newArray = []
    for(let e of array){
        newArray.push(transform(e))
    }
    return newArray

}

console.log(map(numbers, e => e * 2))

function reduce(array, func, start){
    let current = start
    for(let e of array){
        current = func(current,e)
    }
    return current   
}

console.log(reduce(numbers, (prev,curr)=> prev + curr, 5))

const triple2 = map(filter(numbers, e => e % 2), e => e * 3)