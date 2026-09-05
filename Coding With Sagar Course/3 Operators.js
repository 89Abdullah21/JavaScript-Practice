// Below code covers operators in JavaScript
// It has arithmetic, comparison, logical, assignment, and increment/decrement operators

// Operators in JavaScript
// Arithmetic Operators: +, -, *, /, %, **,  ++, --

let a = 10;
let b = 5;

console.log("Arithmetic Operators in JavaScript:");
console.log("Addition: ", 5 + 3);
console.log("Subtraction: ", 5 - 3);
console.log("Multiplication: ", 5 * 3);
console.log("Division: ", 5 / 3);
console.log("Modulus: ", 5 % 3);
console.log("Increment a: ", ++a);
console.log("Decrement b: ", --b);
console.log("Exponentiation: ", 2 ** 3); // 2 raised to the power of 3

let x = "21";
console.log(1-Number(x));

// Comperason Operators: ==, ===, !=, !==, >, <, >=, <=
// ==: Checks for equaltiy but not the data type
// ===: Checks for equality along with data type

console.log("Lose equilty: ", "23" == 23); // true: because it only checks for equality
console.log("Strict equlity: ", "23" === 23); // false: because it checks for equality along with data type

// Avoid using == because it can produce unpredictable results. Always use === for comparison.

// != : Checks for inequality but not the data type
// !== : Checks for inequality along with data type

console.log("lose inequality: ", "23" != 23); // false: because it only checks for inequality
console.log("strict inequality: ", "23" !== 23); // true: because it checks for inequality along with data type

// Same, avoid using != because it can produce unpredictable results. Always use !== for comparison.

// >, <, >=, <=
console.log("Greater than: ", 5 > 3); // true
console.log("Less than: ", 5 < 3);
console.log("Greater than or equal to: ", 5 >= 3);
console.log("Less than or equal to: ", 5 <= 3);


// Logical Operators: &&, ||, !

console.log(3<3 && 5>3); // false: because both conditions are not true
console.log(3<3 || 5>3); // true: because one condition is true
console.log(!(3<3)); // true: because the condition is false and ! operator negates it to true


// Assignment Operators: =, +=, -=, *=, /=, %=, **=
let c =34;
c+= 5; // c = c + 5
console.log("c+=5: ", c);
c-= 5;
console.log("c-=5: ", c);
c*= 5;
console.log("c*=5: ", c);
c/= 5;
console.log("c/=5: ", c);
c%= 5;
console.log("c%=5: ", c);
c**= 5;
console.log("c**=5: ", c);

// Postfix and Prefix Increment and Decrement Operators
let d = 5;
console.log("Postfix increment: ", d++); // 5
console.log("Value of d after postfix increment: ", d); // 6

let e = 5;
console.log("Prefix increment: ", ++e); // 6
console.log("Value of e after prefix increment: ", e); // 6

let f = 5;
console.log("Postfix decrement: ", f--); // 5
console.log("Value of f after postfix decrement: ", f); // 4

let g = 5;
console.log("Prefix decrement: ", --g); // 4
console.log("Value of g after prefix decrement: ", g); // 4