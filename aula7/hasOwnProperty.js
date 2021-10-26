const std1 = {name : "Filipe", number : 1200}

console.log(std1["name"])
console.log(std1["email"])

const std2 = {name : "Filipe", number : 1200, email : undefined}

console.log(std2["name"])
console.log(std2["email"])

console.log(std2.hasOwnProperty("email"))
