

 
let gm = require('infinite-greet')
// let lodash = require('lodash')  // // commonJS
// -or-
import lodash from 'lodash' // ES

// let menu = require('./hotel/menu')
// -or-
import biryani, { softDrink as bmilk, softDrink2 as pani } from './hotel/menu'
import * as items from './hotel/menu'


// debugger;
gm.greet('KA')
gm.greet('EN')

let arr1 = [1, 2, 3, 4]
let arr2 = [3, 4, 7]
console.log(lodash.difference(arr1, arr2))

console.log(biryani)
console.log(bmilk)
console.log(pani)


console.dir(items)
