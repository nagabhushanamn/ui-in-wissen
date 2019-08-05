"use strict"

/**
 * 
 * data types
 * -------------
 * 
 * 1. simple / primitives  ==> values
 * 
 *      a. undefined
 *      b. string
 *      c. number
 *      d. boolean
 * 
 * 2. complex / reference  ==> objects
 * 
 */
//-----------------------------------------------------
// 1. simple / primitives  ==> values
//-----------------------------------------------------

//-----------------------------------------------------
// a. undefined
//-----------------------------------------------------

var v;

//-----------------------------------------------------
// b. string
//-----------------------------------------------------

var myName = "Nag"
var myCompanay = 'ThinkWright a.k.a Proximo'
var trainer = "Nag";
var dynamicString = "The trainer is " + trainer
// or
// - string interpolation -  ( ES6 )
var dynamicStringNew = `The trainer is ${trainer}`
var arithString = `the sum of 1 & 2 is ${1 + 2}`
var multiLineString = `

    <div>
        <ul>
            <li>biryani</li>
        </ul>
    </div>


`

//-----------------------------------------------------
// c. number
//-----------------------------------------------------

var count = 12;
var cost = 12.12


//-----------------------------------------------------
// c. boolean
//-----------------------------------------------------


var isFound = true;

/**
 *  imp note:
 *
 *  falsy values
 *
 *  => false,0,"",undefined,null,NAN
 *
 * Ref : https://dorey.github.io/JavaScript-Equality-Table/
 *
 */


/**
 * 
 *  javascript Naming conventions
 *  ------------------------------
 *  keyword                     ==> lower-case   
 *  variables / function/method ==> camel-case  i.e _____A_____B______
 *  constant variables          ==> upper-case
 *  Type ( class )              ==> pascal-case i.e A____B_____
 *     
 * 
 */


//-----------------------------------------------------
// 1. complex / reference  ==> object
//-----------------------------------------------------
//-------------------------------------------
// class / constructor  : till ES5
//-------------------------------------------

/* 
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayName = function () {
    console.log("im " + this.name);
}
Person.prototype.sayAge = function () {
    console.log("im " + this.age + " old")
} 
*/

//-------------------------------------------
// class / constructor  : From ES6
//-------------------------------------------

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayName() {
        console.log("im " + this.name);
    }
    sayAge() {
        console.log("im " + this.age + " old");
    }
}

// var p1 = new Person("Nag", 36)
// var p2 = new Person("Ria", 4)

//-------------------------------------------

/**
 * im-note:
 * 
 * by default , all javascript objects are extensible & configurable & modifiable
 *              i.e we add/delete/change properties on demand 
 * 
 */


var p1 = new Person("Nag", 36)
var p2 = new Person("Ria", 4)

console.log(Object.isExtensible(p1)) // true
console.log(Object.isSealed(p1)) // false
console.log(Object.isFrozen()) // false

// Object.preventExtensions(p1);
// Object.seal(p1);  + // Object.preventExtensions(p1);
// Object.freeze(p1); +  // Object.seal(p1); 

// p1.teachSkill = "JS"  // Add New property
// delete p1.name;       // delete e xistin property
// p1.name="Nil"         // change/modify  

