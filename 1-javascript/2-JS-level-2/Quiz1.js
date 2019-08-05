"use strict"


function getF() {
    let arrFunc = () => {
        console.log(this)
    }
    return arrFunc
}

let arrFuncRef = getF();
arrFuncRef();

let o1 = { name: 'One' }
arrFuncRef = getF.call(o1);
arrFuncRef();