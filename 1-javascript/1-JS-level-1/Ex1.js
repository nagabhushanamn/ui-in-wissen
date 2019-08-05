

// Ex1.
// function f1() {
//     console.log("before :: LOG")
//     console.log("f1()")
//     console.log("after :: LOG")
// }
// function f2() {
//     console.log("before :: LOG")
//     console.log("f2()")
//     console.log("after :: LOG")
// }
/**
 *
 * design issues
 *
 *  => code tangling / tight-coupling
 *  => code scattering / duplication
 *
 * soln ?
 *
 *
 */



function f1() {
    console.log("f1()")
}
function f2() {
    console.log("f2()")
}
/**
 * 
 * // Higher-Order-Function ( HOF )  
 *    ==> Higher-Order-Programming  ==> thru function composition, 
 *    i.e from small functions we make complex functions
 * 
 */
function logWrapper(f) {
    return function () {
        console.log("log :: before")
        f();
        console.log("log :: after")
    }
}

let f1WithLog = logWrapper(f1);
f1WithLog();
let f2WithLog = logWrapper(f2);
f2WithLog();

// Another Ex.

let isMin = function (n) { return n < 1000 }
let isMax = function (n) { return n > 100 }

// HOF
let logicalAndFunction = function (f1, f2) {
    return function (n) {
        return f1(n) && f2(n)
    }
}

let and = logicalAndFunction(isMin, isMax)
console.log(and(5000));




