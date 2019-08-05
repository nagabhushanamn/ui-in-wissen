

let menu = [
    "item1",
    "item2",
    "item3"
]

for (let item of menu) {
    console.log(item)
}

//

let myList = {
    [Symbol.iterator]() {
        let n = 0;
        return {
            next() {
                n++;
                let value = n <= 10 ? n : undefined
                let done = n > 10 ? true : false
                return { value, done }
            }
        }
    }
}

// for (let n of myList) {
//     console.log(n)
// }

// let [n1, n2, n3, n4] = myList

let numbers = [...myList]