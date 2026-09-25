// Hoisting: The behavior of moving variable and function declarations to the top of their constaining scope during the compilation phase, before the code is executed.

// This means that you can use variables and functions before they are declared in the code.

// It only works with var and not with let and const

// Example 1: Hoisting with var
console.log(x);
var x = 5; // Output: undefined

// Example 2: Hoisting with function declarations
greet();
function greet() {
    console.log("Hello, World!");
}

// Example 3
var greetingPerson = () => {
    console.log(greeting);
    console.log("This variable is hoisted but not initialized, so it will be undefined.");
    var greeting = "Hello, World!";
}

greetingPerson(); // Output: undefined
