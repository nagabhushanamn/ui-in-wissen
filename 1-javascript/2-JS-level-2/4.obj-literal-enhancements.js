

let name = "Nag"
let age = 36

// ES5
let person1 = {
    name: name,
    age: age,
    address: 'chennai',
    3: 'three',
    sayName: function () { },
}
// ES6
let dynamicAddressType = 'office' // home | office | vacation
let person2 = {
    name,
    age,
    [dynamicAddressType + "-address"]: 'chennai',
    [1 + 2]: 'three',
    sayName() { },
    'say Age'(){

    }
}

// console.log(person2["office-address"])
person2['say Age']()