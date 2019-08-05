"use strict"

// let pName = "Global";
let person = {
    pName: "Nag",
    sayName: function () {
        let pName = "Local"
        console.log("im " + pName);  // scope hirarchy..
        console.log("im " + person.pName) // referencing obj's
        console.log("im " + this.pName) // current scope owner's 
    }
}

// person.sayName();

let oldPerson = person;
person = { pName: 'Ria' }
oldPerson.sayName();