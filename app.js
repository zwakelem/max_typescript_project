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
console.log(multiply(2, 8));
// function types
var myMultiply;
// objects
// in an object the order is not important
// but the names of the properties
var userData = {
    name: "Zwaks",
    age: 22
};
// userData = {
//     a: "zwa",
//     b: 2
// };
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealRealAge;
myRealRealAge = 24;
myRealRealAge = 'things';
// check types
var finalValue = "A string";
if (typeof finalValue == "number") {
    console.log("finalValue is a string");
}
// never
// Nullable types
var canBeNull = 12;
canBeNull = null;
var alsoCanBeNull;
alsoCanBeNull = null;
