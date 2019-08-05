


// var obj = {
//     doWork() {
//         console.log("im mod2")
//     }
// }


var infinite = infinite || {};

(function () {
    infinite.mod3.doWork();
    var obj = {
        doWork() {
            console.log("im mod2")
        }
    }
    infinite.mod2 = obj
})();