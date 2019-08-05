
/**
 * 
 *  - list / array
 *  - set
 *  - map
 * 
 */


let list = [
    "item-1",
    "item-1"
]

console.log(list)



let set = new Set();
set.add("item-1")
set.add("item-1")
set.add("item-2")

console.log(set)


let mapLiteral = {
    "key-1": "value-1",
    "key-2": "value-2"
}


let map = new Map();

class Car {
    constructor(model) {
        this.model = model
    }
}
class Owner {
    constructor(name) {
        this.name = name
    }
}

let ow1 = new Owner("Nag")
let ow2 = new Owner("Ria")

let car1 = new Car("fortuner")
let car2 = new Car("toy-car")

map.set(ow1, car1)
map.set(ow2, car2)



let car = map.get(ow1);
console.log(car)