

// Ex.

let numbers = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]


//------------------------------------------
// style-1: imperative style ( what ( intention ) + How ( implementation ) )
//------------------------------------------

function getEvens(numbers) {
    let evens = []
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) evens.push(numbers[i])
    }
    return evens;
}

function getOdds(numbers) {
    let odds = []
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) odds.push(numbers[i])
    }
    return odds;
}


//------------------------------------------
// style-2: declarative style  ( What ) ==> FP enables declarative coding
//------------------------------------------

// benifits

/**
 * 
 *  ==> clean  & concise
 *  ==> we can separate intensions from implementations
 * 
 */

// let lib = {
//     filter: function (numbers, conditionFunc) {
//         let out = []
//         for (let i = 0; i < numbers.length; i++) {
//             if (conditionFunc(numbers[i])) out.push(numbers[i])
//         }
//         return out;
//     }
// }


function getEvensNew(numbers) {
    // return lib.filter(numbers, function (n) { return n % 2 === 0 })
    return numbers.filter(function (n) { return n % 2 === 0 })
}

function getOddsNew(numbers) {
    // return lib.filter(numbers, function (n) { return n % 2 !== 0 })
    return numbers.filter(function (n) { return n % 2 !== 0 })
}
