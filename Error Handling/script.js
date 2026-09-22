// JavaScript has a forgiving nature when it comes to errors. It will often continue executing code even after encountering an error, which can lead to unexpected behavior. To handle errors gracefully, JavaScript provides several mechanisms, such as try-catch blocks, error objects, and custom error handling functions.

// Difference between Number() and parseInt()
// Number() converts a value to a number, while parseInt() parses a string and returns an integer. Number() will return NaN for non-numeric values, while parseInt() will return the first integer it finds in the string.

// let num1 = prompt("Enter a number:");
// let num2 = prompt("Enter another number:");

// let sum = parseInt(num1) + parseInt(num2);
// console.log("The sum is: " + sum);

// if there was no parseInt() the result would be Nan if user entered non-numeric values
// and if entered numeric value, it would concatenate the value as treated like strings.


let num1 = prompt("Enter a number:");
let num2 = prompt("Enter another number:");

if(isNaN(num1) || isNaN(num2)){
    throw SyntaxError("Invalid input: Please enter valid numbers.");
}

let sum = parseInt(num1) + parseInt(num2);


console.log("The sum is: " + sum);
