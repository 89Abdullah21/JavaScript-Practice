// About Numbers and Math
// Math: It is a built in object that provides mathematical functions and constants

let age = 20;
const pi = Math.PI;
console.log("Value of pi:", pi);

// Methods of number
console.log("Age:", age);
console.log("Age in string:", age.toString());
console.log("Age in fixed decimal places:", age.toFixed(2));

// Math
// 1. Math.round(): Round to nearest integer
console.log("Rounded value of 4.7:", Math.round(4.7));
// 2. Math.floor(): Round down to nearest integer
console.log("Floor value of 4.7:", Math.floor(4.7));
// 3. Math.ceil(): Round up to nearest integer
console.log("Ceil value of 4.7:", Math.ceil(4.7));
// 4. Math.random(): Generates a random number between 0 (inclusive) and 1 (exclusive)
console.log("Random number between 0 and 1:", Math.random());
console.log("Random between 0 and 100:", Math.random() * 100);
// 5. Math.max(): Returns the largest of zero or more numbers
console.log("Max of 12,34,243 and 282.2:", Math.max(12, 34, 243, 282.2));
// 6. Math.min(): Returns the smallest of zero or more numbers
console.log("Min of 12,34,243 and 282.2:", Math.min(12, 34, 243, 282.2));
// 7. Math.pow(): Returns the base to the exponent power, that is, base^exponent
console.log("7 power 23: ", Math.pow(7,23));
// 8. Math.sqrt(): Returns the square root of a number
console.log("Square root of 63: ", Math.sqrt(63));
// 9. Math.abs(): Returns the absolute value of a number
console.log("Absolute value of -23: ", Math.abs(-23));
// 10. Math.trunc(): Returns the integer part of a number by removing any fractional digits
console.log("Truncated value of 23.45: ", Math.trunc(23.45));
// 11. Math.sign(): Returns the sign of a number, indicating whether the number is positive, negative, or zero
console.log("Sign of -23: ", Math.sign(-23));
console.log("Sign of 0: ", Math.sign(0));
console.log("Sign of 23: ", Math.sign(23));
// 12. Math.log(): Returns the natural logarithm (base e) of a number
console.log("Natural logarithm of 10: ", Math.log(10));
// 13. Math.log10(): Returns the base 10 logarithm of a number
console.log("Base 10 logarithm of 100: ", Math.log10(100));

console.log("10" + "4");
console.log("10" - "4");