"use strict"

function Student(name, number){
    console.log(this)
    this.name=name
    this.number=number
    console.log(this)
}

const std1 = new Student("Filipe", 1604)
const std2 = new Student("Joao", 1603)

console.log(std1)
console.log(std2)

//std1.m1 = function() {console.log(this.number)}
Student.prototype.m1 = function() {console.log(this.number)}

std1.m1()
std2.m1()

String.prototype.surround =  
                function(left, right) {return left + this + right}

const str = "STR"
console.log(str.surround(`"`,`"`))






