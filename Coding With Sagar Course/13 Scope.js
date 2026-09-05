// Three types of scopes in JavaScript: Global Scope, Function Scope, and Block Scope

// Global Scope: Variables declared outside of any function or block have global scope. They can be accessed from anywhere in the code.

var globalVar = "I am a global variable";
console.log(globalVar);

// Function Scope: Variables declared inside a function have function scope. They can only be accessed from within that function.

function myFunction() {
    var functionVar = "I am a function variable";
    console.log(functionVar);
}

myFunction();
// console.log(functionVar); // This will result in an error because functionVar is not accessible outside the function.

// Block Scope: Variables declared with let or const inside a block (e.g., inside an if statement or a for loop) have block scope. They can only be accessed from within that block.

if (true) {
    let blockVar = "I am a block variable";
    console.log(blockVar);
}
// console.log(blockVar); // This will result in an error because blockVar is not accessible outside the if block.
