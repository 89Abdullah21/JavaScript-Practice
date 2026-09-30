// Taking input from the user using prompt() method

// Try it in browser console because prompt() method is not supported in Node.js
let name = prompt("Enter your name: ");
console.log("Hello ", name);

// input is string by nature
let age = prompt("Enter your age: ");
console.log("The data type of age here is: ", typeof age);

// For that purpose always conver t the input to number using Number() method
let number= Number(prompt("Enter a number: "));
console.log("The data type of number here is: ", typeof number);