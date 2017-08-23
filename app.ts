// string
let myName = 'Zwaks';

// number
let myAge = 28;


// boolean
let hasHobbies = true;


let myRealAge : number;
myRealAge = 28;
// myRealAge = 'hgfg';

// array
let hobbies = ["cooking", "sports"];
// hobbies = [15];

//tuples
let address : [string, number] = ["street", 23];

//enum
enum Color {
    Red,
    Green,
    Blue
}
let myColor : Color = Color.Green;
// console.log(myColor);


// functions
function returnMyName() : string {
    return myName;
}

function sayHello() : void {
    console.log("say Hello");
}

function multiply(val1: number, val2:number) : number {
    return val1*val2;
}
console.log(multiply(2,8));

// function types
let myMultiply;


