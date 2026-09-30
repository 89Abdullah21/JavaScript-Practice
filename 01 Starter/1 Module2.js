// The below code covers from variables till data types in JavaScript
// It has variables, constants, and primitive data types 

const school = ("IMS");
let total_students = 300;

console.log("School Name: ", school);
console.log("Total Students: ", total_students);

console.log("Welcome to ", school, "where we have a total of", total_students, "students.");

//Line Break inside the console.log() function
console.log("\n\n\n");


// Data Types in JavaScript
console.log("Data Types in JavaScript:");

let age=22;
const name="Abdullah";
let isStudent=true;

// Primitive Data Types: Data stored is small or basic
// String, Number, Boolean, Null, Undefined, Symbol, BigInt

// Null is having variable with null value intended to be empty
let emptyValue=null;
// Undefined is having variable with no value assigned to it
let variable;


// Symbol is a unique and immutable primitive value and may be used as the key of an Object property
// Symbols are used on advanced level of programming and are not used in basic programming.
let uniqueId=Symbol("id");
let uniqueId2=Symbol("id");

console.log("Is uniqueId equal to uniqueId2? ", uniqueId === uniqueId2); // false: Because each Symbol is unique

// BigInt is a numeric data type that represent very large integers.
// "n" at the end of the number indicates that it is a BigInt
let bigIntValue=2323423423413197349239839249837n;
