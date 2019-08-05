

// #1
function display(a, b, c, d, ...rest) {
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
}

// display(10, 20, 30)

let numbers = [10, 20, 30, 40, 50, 60, 70]
// display(numbers[0], numbers[1], numbers[2])
// or
display(...numbers) // spread operator

numbers = [10, 20, 30, 40, 5, 500, 70]
// let max = Math.max(1, 3, 2)
let max = Math.max(...numbers)


// #2

let arr1 = [1, 2, 3]
let arr2 = [7, 8, 9]
let newArr = [...arr1, 4, 5, 6, ...arr2]


// #3

let o1 = { x: 10, y: 20 }
let o2 = { z: 30, x: 100 }

let newO = { ...o2, a: 1, ...o1 }