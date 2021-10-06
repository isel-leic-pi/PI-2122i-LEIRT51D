let array = [1,   ,"STR"]

console.log(array)
console.log(array.length)

array[100] = true
console.log(array)
console.log(array["0"])

array[101] = function (){return "Hello"}

console.log(array[101]())

console.log(array["0"])