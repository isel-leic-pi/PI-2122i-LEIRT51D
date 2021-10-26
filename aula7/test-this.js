'use strict'

const std = {name : "Filipe", number : 1200, }
std.m1 = function() {console.log(this)} 

std.m1()

const f1 = function() { console.log(this)}
const f2 = () => console.log(this)

f1()
f2()


String.prototype.surround =  
                function(left, right) {return left + this + right}


/*String.prototype.surround = (left, right) => {
            console.log(this)
            return left + this + right
}*/

const str = "STR"
console.log(str.surround(`"`,`"`)) //"STR"