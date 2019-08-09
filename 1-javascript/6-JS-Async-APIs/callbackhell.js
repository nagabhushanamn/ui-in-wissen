

const fs = require('fs')

// Ref : https://www.joyent.com/node-js/production/design#codingstyle



// callback hell
// fs.readFile('1.txt', 'utf8', (err, firstFile) => {
//     console.log(firstFile)
//     fs.readFile('2.txt', 'utf8', (err, secondFile) => {
//         console.log(secondFile);
//         fs.readFile('3.txt', 'utf8', (err, thirdFile) => {
//             console.log(thirdFile);
//         });
//     });
// });


// Soln : Named Function
const callback1 = (err, firstFile) => {
    console.log(firstFile)
}
const callback2 = (err, secondFile) => {
    console.log(secondFile)
}
const callback3 = (err, secondFile) => {
    console.log(firstFile)
}

