"use strict"

let person = {
    sayName: function () { },
    sayAge: () => { }
}


function func() {

    let person = {
        sayName: function () { },
        sayAge: () => { }
    }

    let sayName = () => {
        console.log("im " + this)
    }
    sayName();
}
// func();
let infinite = { name: 'INFINITE' }
func.call(infinite)
