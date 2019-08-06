
console.log("-index.js-")


//#1
// function foo() { }
// function bar() { foo() }
// function baz() { bar(); }
// baz();

//#2
// function foo() { throw new Error('oops') }
// function bar() { foo() }
// function baz() { bar(); }
// baz();

// #3
// function foo() { foo() }
// foo()

// #4
// function longRunning() {
//     var i = 0;
//     while (i < 10) {
//         console.log("im long...")
//         i++;
//     }
// }
// function shortRunning() {
//     console.log("im short..")
// }

// longRunning();
// shortRunning();

//---------------------------------------

// on event , how javascript is executing ?

/*
    <button class="veg">Veg-1</button>
    <button class="veg">Veg-2</button>
    <button class="non-veg">Non-Veg</button>
*/

// console.log("init....")

// $.on('.veg', 'click', function vegHandler(e) {
//     console.log("handle event on .veg elements")
// })
// $.on('.non-veg', 'click', function nonVegHandler(e) {
//     console.log("handle event on .non-veg elements")
// })

// console.log("cont.. with other work.. ")
// function longRunning() {
//     var i = 0;
//     while (i < 10) {
//         console.log("im long...")
//         i++;
//     }
// }
// longRunning();


// Non-Blocking / Asynchronous IO
// ---------------------------------------


// console.log('init...')

// // IO
// setTimeout(function () {
//     console.log('after IO / timeout')
// }, 0)

// console.log("cont.. with other work..")

// var i = 0;
// function longRunning() {
//     while (i < 100000) {
//         i++;
//     }
// }
// longRunning();







// let worker = new Worker("long-script.js");
// worker.addEventListener('message', e => {
//     console.log(e)
// })
// console.log("main thread can cont with other work..");
