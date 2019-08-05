

/**
 * 
 *  scope / execution-context
 *  --------------------------
 * 
 *  ==> memory/stack-frame with arg & local variable(s)
 * 
 * phase1 : creation / push
 * 
            ==> any variable which is declared with 'var' keyword,
 *              always get hoisted with default value  ( undefined )
 * 
 * phase2 : execution / pop
 * 
 * ---------------------------------------------------
 * 
 * imp-note : 
 * 
 * => .js-runtime always creates one global-scope 
 *    by default
 * 
 * => every function invocation also created new-scope,
 *    which is child of in which scope that function has declared
 * 
 * 
 * * ---------------------------------------------------
 */



console.log("start...")

// console.log(v)
// var v = 12;

//----------------------------------------------------------
// Q1
//----------------------------------------------------------
// var v = 12;
// function f1() {
//     console.log(v);
//     var v = 13;
// }
// f1();  // f1-scope  <-  global-scope

//----------------------------------------------------------
// Q2
//----------------------------------------------------------
// var v = 12;
// function f1() {
//     function f2() {
//         console.log(v)
//     }
//     f2() // f2-scope < - f1-scope
//     var v = 13
// }
// f1();  // f1-scope <- global-scope

//----------------------------------------------------------
// Q3
//----------------------------------------------------------
// var v = 12
// var v = 13;

// console.log(v)

//----------------------------------------------------------
// Q4
//----------------------------------------------------------

// var v = 12;
// if (true) {
//     var v = 13  // No block-scope
// }
// console.log(v)

//----------------------------------------------------------
// problems with 'var' keyword
//----------------------------------------------------------

/**
 * 
 * => always hoist
 * => re-declare same variable within scope
 * => No block-scope
 * 
 * soln : using 'let' & 'const' keywords with block-scope ( ES6 )
 * 
 */

//----------------------------------------------------------

// console.log(v)
// let v = 12;

//----------------------------------------------------------

// let v = 12
// let v = 13

//----------------------------------------------------------

// var v = 12;
// if (true) {
//     let v = 13  //  block-scope
// }
// console.log(v)


//----------------------------------------------------------

// const v = 12;
// v = 13;


//----------------------------------------------------------

// summary

/**
 * 
 *  => use 'let' keyword, for mutable reference
 *  => use 'const' keyword, for immutable reference
 *  => try to avoid 'var' keyword, for better code
 * 
 */