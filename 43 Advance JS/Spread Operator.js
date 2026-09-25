// Spread Operator is a feature in JavaScript that allows you to expand an iterable (like an array or string) into individual elements

// It is represented by three dots (...)

// The spread operator can be used in various contexts, such as function calls, array literals, and object literals

// Example 1
let numbers = [1, 2, 3, 4, 5];
// Using spread operator to pass array elements as individual arguments to a function
function sum(a, b, c, d, e) {
    return a + b + c + d + e;
}
console.log(sum(...numbers)); // Output: 15

function sum2(a,b,c,d){
    return a+b+c+d;
}
console.log(sum2(...numbers)); // Output: 10

// Example 2
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
// Using spread operator to merge two arrays
let mergedArray = [...arr1, ...arr2];
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

// Example 3
let array = [1, 2, 3, 4, 5];
const obj = {...array}; // Using spread operator to create an object from an array
console.log(obj); // Output: { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }

// Example 4
let str = "Hello";
// Using spread operator to convert a string into an array of characters
let charArray = [...str];
console.log(charArray); // Output: ['H', 'e', 'l', 'l', 'o']

// Example 5
let obj1 = {a: 1, b: 2};
let obj2 = {c: 3, d: 4};
// Using spread operator to merge two objects
let mergedObject = {...obj1, ...obj2};
console.log(mergedObject); // Output: {a: 1, b: 2, c: 3, d: 4}

// Example 6
let arr3 = [1, 2, 3];
let arr4 = [4, 5, 6];
// Using spread operator to create a new array with additional elements
let newArray = [...arr3, 7, 8, ...arr4];
console.log(newArray); // Output: [1, 2, 3, 7, 8, 4, 5, 6]

// Example 7
let obj3 = {x: 1, y: 2};
let obj4 = {y: 3, z: 4};
// Using spread operator to create a new object with updated properties
let newObject = {...obj3, ...obj4};
console.log(newObject); // Output: {x: 1, y: 3, z: 4}
