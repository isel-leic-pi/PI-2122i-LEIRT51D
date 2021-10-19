function changeConsole(){
    const oldConsole = console.log
    console.log = function(value){
        oldConsole(new Date() + value)
    }
}


changeConsole()

console.log("OLA1") // <Data> OLA1
console.log("OLA2") // <Data> OLA2
console.log("OLA3") // <Data> OLA3