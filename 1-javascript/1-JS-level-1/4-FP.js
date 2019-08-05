


/**
 *
 *  Functional Programming ( FP )
 *
 *  what?
 *
 *  ==> function as first-class-citizen/value
 *
 *
 */

//--------------------------------------------------
// How to create function in javascript ?
/**
 *
 *  way-1 : function declaration
 *  way-2 : function expression
 */
//--------------------------------------------------
/**
 *  way-1 : function declaration
 *  
 * => always get hoist with function-object
 * => function-obj got created at scope creation-phase
 *  
 */

// console.log(add1(12, 13))
function add1(n1, n2) {
    return n1 + n2
}
// console.log(add1(12, 13))

//--------------------------------------------------
/**
 * 
 *  way-2 : function expression
 * 
 * => function-obj created at scope execution-phase
 * 
 */

// console.log(add2(12, 13)) // Error
let add2 = function (n1, n2) {
    return n1 + n2;
}
// console.log(add2(12, 13))




//--------------------------------------------------
// Function parameters
//--------------------------------------------------
// function func(a, b, c, d) {
//     console.log(arguments[0]);
//     console.log(arguments[1]);
//     console.log(arguments[2]);
//     console.log(arguments[3]);
// }
// func(12, 13, 14, 15);

//--------------------------------------------------
// Can we overload function by params ? No
//--------------------------------------------------

// Quiz

// function getFood() {
//     return "no food"
// }
function getFood(pay) {
    if (arguments.length === 0) return "No  Food"
    return "biryani"
}

// console.log(getFood(120));

//--------------------------------------------------
// Ex.
//--------------------------------------------------

function sum() {
    let len = arguments.length,
        i = 0,
        result = 0;
    while (i < len) {
        result += arguments[i]
        i++;
    }
    return result;
}


//--------------------------------------------------
// Functions with default params ( ES6 )
//--------------------------------------------------
function func1(a = 1, b = 10) {
    // if (!a) a = 1;
    // if (!b) b = 10;
    // a = a || 1;
    // b = b || 10
    console.log(a)
    console.log(b)
}
// func1(undefined, 20);


//--------------------------------------------------
// Functions with rest param ( ES6 )
//--------------------------------------------------

function func2(a, b, ...rest) {
    console.log(a)
    console.log(b)
    console.log(rest)
    console.dir(arguments)
}

// func2(1, 20, 30, 40);


//--------------------------------------------------
// FP concepts/principles
//--------------------------------------------------

/**
 *  #1 : function is a value/object i.e first-class citizen
 *       i.e we can assign function to any variable directly
 */

// function greet() {
//     console.log("Hello...")
// }
// let sayHello = greet

// sayHello();

//-----------------------------------------------------

/**
 *
 * #2 : paratemer of function can be other function
 *
 */

function greet(f) {
    console.log("========================")
    if (f)
        f()
    console.log("========================")
}
// greet();

let ka = function () { console.log("Namaskara") }
let es = function () { console.log("ola...") }

// greet(ka)
// greet(es)


// Ex.
let nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]
nums.sort();
// console.log(nums)
let asc = function (x, y) { return x - y }
nums.sort(asc);
// console.log(nums)

//--------------------------------------------------

/**
 *
 * #3 : return value of functtion can be other function
 *
 */

function teach(sub) {
    console.log("teaching " + sub);
    let learn = function () { console.log("learning " + sub) }
    //learn();
    console.log("teaching ends..")
    return learn;
}

// let lernFunc = teach("javascript");
// lernFunc()
// lernFunc()
// lernFunc();


//----------------------------------------------------

// Function closure
// -----------------

/**
 * 
 * A closure is a function having access 
 * to the parent scope, 
 * even after the parent function has closed.
 * 
 */

function teach(sub) {
    console.log(`teaching ${sub}`)
    let notes = `${sub}-notes` // stack  ==> heap
    let fun = "bla bla bla" // stack
    function learn() {
        console.log(`learning with ${notes}`)
    }
    // learn()
    console.log("teaching ends..")
    return learn;
}

// let learnFunc = teach('javascript') // teach-scope 
// learnFunc();


// Ex1  : counter-module

// to abstract public behav of any modules

// module-design-pattern ==> self executable function / IIFE
(function () {
    console.log("init...")
    let count = 0;  // private 
    // public
    function pri() { }
    function inc() {
        count += 1
    }
    function get() {
        return count;
    }
    window.$ = {
        inc: inc,
        get: get
    }
})()

