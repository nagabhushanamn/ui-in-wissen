


// var obj = {
//     doWork() {
//         console.log("im mod3")
//     }
// }


var infinite = infinite || {};

(function () {
    var obj = {
        doWork() {
            console.log("im mod3")
        }
    }
    infinite.mod3 = obj;
})();