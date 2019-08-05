


// var obj = {
//     doWork() {
//         console.log("im mod1")
//     }
// }

//


var infinite = infinite || {};

(function () {

    infinite.mod2.doWork();

    var pri = 100;
    var obj = {
        doWork() {
            console.log("im mod1")
        }
    }
    infinite.mod1 = obj;
})();