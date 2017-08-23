"use strict";
// string
var myName = 'Zwaks';
// number
var myAge = 28;
// boolean
var hasHobbies = true;
var myRealAge;
myRealAge = 28;
// myRealAge = 'hgfg';
// array
var hobbies = ["cooking", "sports"];
// hobbies = [15];
//tuples
var address = ["street", 23];
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
// console.log(myColor);
// functions
function returnMyName() {
    return myName;
}
function sayHello() {
    console.log("say Hello");
}
function multiply(val1, val2) {
    return val1 * val2;
}
console.log(multiply(2, 'jhhyhh'));
