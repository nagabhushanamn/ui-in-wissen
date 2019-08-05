"use strict"

/**
 * 
 *  Function binding
 * 
 *  i.e function with object
 * 
 *  types:
 *  -------
 * 
 *  a. static 
 *  b. dynamic
 * 
 */

//--------------------------------------------
// a. static function binding
//--------------------------------------------

/**
 * 
 * imp-note : 
 * 
 *  in strict-mode, 
 *  by default function(s) not binded with any object
 * 
 */

function sayNameForAll() {
    console.log(`im ${this.pName}`)
}
let person1 = {
    pName: 'Nag',
    sayName: sayNameForAll
}
let person2 = {
    pName: 'Ria',
    sayName: sayNameForAll
}
// sayNameForAll();  // im ?? // Error 
// person1.sayName(); // im Nag
// person2.sayName(); // im Ria

//--------------------------------------------
// a. dynamic function binding
//--------------------------------------------

function doTeach(sub, duration, location) {
    console.log(`the trainer ${this.name}, teaching ${sub}:(${duration}) in ${location}`)
}

// doTeach('javascript', 8, 'bengalore') // Error


// let trainer = { name: 'Nag' }
// trainer.doTeach = doTeach;
// trainer.doTeach('javascript', 8, 'bengalore')


let trainer = { name: 'Nag' }
Object.preventExtensions(trainer)

// way-1 : call()
// doTeach.call(trainer, 'javascript', 8, 'bengalore')

// way-2: apply()
// doTeach.apply(trainer, ['javascript', 8, 'bengalore'])

//way-3: bind()
// let newF = doTeach.bind(trainer)
// newF("javascript", 8, "BLR")
// newF("Microservices", 2, "TVR")



// summary

function func() {
    console.log(this)
}
func();

let o1 = { name: 'One', func: func } // static function binding
o1.func();

let o2 = { name: 'Two' }
func.call(o2)  // dynamic function binding
