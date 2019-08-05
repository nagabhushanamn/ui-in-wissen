

/**
 * 
 *  literal style object i.e syntax wuthout 'new' keyword
 */

//---------------------------------------------
// 1. Object
//---------------------------------------------
var config = new Object()
config.url = "http://"
config.httpMethod = "GET"
config.onSuccess = function () {
    console.log("im runnnin on success");
}

// - or -

var newConfig = {
    "url": "http://",
    "httpMethod": "GET",
    "onSuccess": function () {
        //..
    }
}


//---------------------------------------------
// 2. Array/List
//---------------------------------------------

var arr = new Array()
arr[0] = "item1"
arr[1] = "item2"
arr.push("item-3")

// - or -

var newArr = ["item-1", "item-2", "item-3"]

//---------------------------------------------
// 3. RegExp
//---------------------------------------------

var adharPattern = new RegExp("\\d{4}-\\d{4}-\\d{4}");

// - or -

var newAdharPattern = /\d{4}-\d{4}-\d{4}/


//---------------------------------------------
// 4. Function
//---------------------------------------------

var add = new Function("arg1", "arg2", "var result=arg1+arg2;return result;")

// - or -

function add(arg1, arg2) {
    var result = arg1 + arg2;
    return result;
}