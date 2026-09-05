// Function is a resuable block of code that performs a specific task
// It can take inputs, process them, and return an output
// Input -> Parameters
// Process -> Function Body
// Output -> Return Value

/*
function funtionName(parameter1, parameter2, parameter3){
   // Body of the function
    return statement;
}

// Calling the function
functionName(argument1, argument2, argument3);
*/

function info(name, age){
    console.log(`My name is ${name} and I am ${age} years old.`);
}

info("Abdullah", 23);

function sum(){
    let num1 = Number(prompt("Enter first number: "));
    let num2 = Number(prompt("Enter second number: "));
    return num1 + num2;
}

// console.log(sum());
// The sum function will not work here because Node.js does not support prompt() function. It is a browser-specific function.

// When return is used, then while calling the function, console.log() must be used to display the output
// If no return is used, then call directly: functionName(arguments);


function FullName(firstN, SecondN){
    return firstN + " " + SecondN + " hope you are doing good";
}

let first = "Abdullah";
let last = "Khan";

console.log(FullName(first, last));


console.log("\n\n\n\n");

const add = function(a,b){
    return a+b;
}

console.log(add(5,23));


// This is an example of anonymous function. It is a function without a name. It is stored in a variable and can be called using that variable.
// 
const greet = function(){
    return "Hello, Good Morning!";
}

console.log(greet());


// Arrow function is a shorter syntax for writing functions. It is introduced in ES6 (ECMAScript 2015) and is widely used in modern JavaScript development.

const division = (a,b) =>{
    if(b === 0){
        return "Division by zero isn't allowed.";
    }

    return a/b;
}


console.log("Division of 10 & 0 is: " + division(10, 0));

const newHello = () =>{
    return "Hi, Hope you are donig well";
}

console.log(newHello());

const addition = (a,b) =>{
    return a+b;
}


console.log("Addition of 5 & 23 is: " + addition(5, 23));


// Function with default parameters

function greetUser(name = "Guest"){
    return "Hi " + name + ", Hope you are doing well";
}

console.log(greetUser());
console.log(greetUser("Alice"));

// Function with rest parameters
// When we want to accept many arguments in a function from the user

function nameGreet(...names){
    return "hi "+ names;

}

console.log(nameGreet("Abdullah", "Ali", "Ahmed", "Ayesha"));

function nameGreet2(...names){
    for(name of names){
        console.log("Hi " + name + "\n");
    }

}

console.log(nameGreet("Abdullah", "Ali", "Ahmed", "Ayesha"));
console.log("\n\n\n\n");

console.log(nameGreet2("Abdullah", "Ali", "Ahmed", "Ayesha"));