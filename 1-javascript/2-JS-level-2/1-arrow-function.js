"use strict"


// ES6

// let getPrice = function () {
//     return 100 + 200
// }

// or

// let getPrice = () => {
//     return 100 + 200
// }

// let getPrice = (qty) => {
//     return qty * (100 + 200)
// }

// - or-

// let getPrice = qty => {
//     return qty * (100 + 200)
// }


// let getPrice = (qty, tax) => {
//     return qty * (100 + 200) + tax
// }

// -or-

// let getPrice = (qty, tax) => qty * (100 + 200) + tax

// let getPrice = (qty, tax) => {
//     let cost = qty * (100 + 200);
//     let total = cost + tax
//     return total;
// }


/**
 *
 *  why / where we need arrow function ?
 *
 *  #1
 *  => for compact/concise function-argument sysntax
 *
 */

let numbers = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]
// numbers.sort();
// let asc = function (x, y) { return x - y }
// numbers.sort(asc);

// or

// numbers.sort(function (x, y) { return x - y });

// or

// numbers.sort((x, y) => { return x - y });

// or

numbers.sort((x, y) => x - y);

// console.log(numbers)


/**
 * 
 * 
 *  #2 , 
 * 
 *   to capture 'this'
 * 
 */


let tnr = {
    name: 'Nag',
    doTeach: function () {
        console.log(this.name + " teaching javascript");
        // let askQues = function (q) {
        //     console.log(this.name + " answering " + q)
        // }
        // or
        let askQues = (q) => {
            console.log(this.name + " answering " + q)
        }
        console.log("teaching ends")
        return askQues;
    }
}
// let askQues = tnr.doTeach();
// askQues("Q1")

// let newTnr = { name: 'XXX' }
// askQues("Q2")



/**
 *
 * Ex.
 *
 */


// console.log(this)


// let regFunc = function () {
//     console.log(this)
// }
// regFunc();

// let arrFunc = () => {
//     console.log(this)
// }
// arrFunc();


// let o1 = {
//     name: 'One',
//     regFunc: regFunc,
//     arrFunc: arrFunc
// }
// let o2 = {
//     name: 'Two'
// }

// o1.regFunc();
// o1.arrFunc();  // arrFunc()

// regFunc.call(o1)
// arrFunc.call(o2) // arrFunc()


//---------------------------------------------



// let inv = {
//     num: 1234,
//     process: function () {
//         console.log(`INV-${this.num} processed`)
//     }
// }

// let inv = {
//     num: 1234,
//     process: () => {
//         console.log(`INV-${this.num} processed`)
//     }
// }


// let inv = {
//     num: 1234,
//     process: function () {
//         console.log(`INV-${this.num} processed partially`)
//         return function () {
//             console.log(`INV-${this.num} processed completly`)
//         }
//     }
// }

let inv = {
    num: 1234,
    process: function () {
        console.log(`INV-${this.num} processed partially`)
        return () => {
            console.log(`INV-${this.num} processed completly`)
        }
    }
}



// let complete = inv.process();
// // complete(); // Error
// // complete.call(inv)

// let newInv = { num: 9999 }
// complete.call(newInv)




let person={
    name:'Nag',
    saName:()=>{
        console.log("im "+this.name)
    }
}
person.saName();