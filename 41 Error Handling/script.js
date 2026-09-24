// JavaScript has a forgiving nature when it comes to errors. It will often continue executing code even after encountering an error, which can lead to unexpected behavior. To handle errors gracefully, JavaScript provides several mechanisms, such as try-catch blocks, error objects, and custom error handling functions.

// Difference between Number() and parseInt()
// Number() converts a value to a number, while parseInt() parses a string and returns an integer. Number() will return NaN for non-numeric values, while parseInt() will return the first integer it finds in the string.

// let num1 = prompt("Enter a number:");
// let num2 = prompt("Enter another number:");

// let sum = parseInt(num1) + parseInt(num2);
// console.log("The sum is: " + sum);

// if there was no parseInt() the result would be Nan if user entered non-numeric values
// and if entered numeric value, it would concatenate the value as treated like strings.

// for errors, search "error in js mdn"

let num1 = prompt("Enter a number:");
let num2 = prompt("Enter another number:");

if(isNaN(num1) || isNaN(num2)){
    throw SyntaxError("Invalid input: Please enter valid numbers.");
}

let sum = parseInt(num1) + parseInt(num2);


console.log("The sum is: " + sum);


// ------------------------------------------------

// We will either throw an error or handle it gracefully using try-catch block

// try-catch block allows a piece of code to be executed first, if an error occurs, the catch block will handle the error instead of stopping the execution of the program.

// if no error in try block, catch block will be skipped and code after catch block will be executed.

// good and complex example of try-catch block


let num11 = prompt("Enter a number:");
let num22 = prompt("Enter another number:");
let divisionResult;

try {
    divisionResult = parseInt(num11) / parseInt(num22);
    console.log("The division result is: " + divisionResult);
}catch{
    console.error("An error occurred: ");
}




let first = prompt("Enter first number for multiplication:");
let second = prompt("Enter second number:");

if(isNaN(first) || isNaN(second)){
    throw SyntaxError("Invalid input: Please enter valid numbers.");
}

let product = parseInt(first) * parseInt(second);

try{
    console.log("The product is: " + product*z); // z in not defined, so it will throw an error
}catch(error){
    // console.error("An error occurred: " + error.message); OR simply
    console.log("YE TO ERROR DE RAHA HIA BHAIIIIIIIIIIIII. Z KAHA SAY AGAYA BHAI.");


}


// ------------------------------------------------
// try-catch-finally block allows a piece of code to be executed first, if an error occurs, the catch block will handle the error instead of stopping the execution of the program. Finally block will always be executed regardless of whether an error occurred or not.

// finally block is useful for cleaning up resources, closing connections, or performing any necessary cleanup tasks.

// finally block is mainly for using it in functions, where we want to ensure that certain code is executed regardless of whether an error occurred or not. For example, if we are working with a database connection, we may want to close the connection in the finally block to ensure that it is always closed, even if an error occurred during the execution of the code.

let num111 = prompt("Enter a number:");
let num222 = prompt("Enter another number:");
let divisionResult2;

const divingFunction = () => {
    try {
        divisionResult2 = parseInt(num111) / parseInt(num222);
    } catch (error) {
        console.error("An error occurred: " + error.message);
    } finally {
        console.log("This will always be executed, regardless of whether an error occurred or not.");
    }
};
divingFunction();