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


// objects
// in an object the order is not important
// but the names of the properties
let userData : {name: string,age: number} = {
    name: "Zwaks",
    age: 22
};
// userData = {
//     a: "zwa",
//     b: 2
// };


let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [100, 3.99, 10],

    output: function(all: boolean): number[] {
        return this.data;
    }
};

// complex = {};

// type alias
type Complex = {data: number[], output: (all: boolean) => number[]};

let complex2: Complex = {
    data: [100, 3.99, 10],

    output: function(all: boolean): number[] {
        return this.data;
    }
};

// union types
let myRealRealAge: number | string;
myRealRealAge = 24;
myRealRealAge = 'things';


// check types
let finalValue = "A string";
if(typeof finalValue == "number") {
    console.log("finalValue is a string");
}


// never


// Nullable types
let canBeNull: number | null = 12;
canBeNull = null;
let alsoCanBeNull;
alsoCanBeNull = null;
