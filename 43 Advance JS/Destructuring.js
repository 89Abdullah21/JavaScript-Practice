// Destructuring: The process of extracting values from arrays or properties from objects and assigning them to variables

// Array Destructuring
let numbers = [1,2,3,4,5];
let [first, second, third] = numbers; // Destructuring assignment
console.log(`first: ${first}`); // Output: 1
console.log(`second: ${second}`); // Output: 2
console.log(`third: ${third}`); // Output: 3

// Using ...rest operator to collect the remaining elements
let [a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(`a: ${a}`); // Output: 10
console.log(`b: ${b}`); // Output: 20
console.log(`rest: ${rest}`); // Output: [30, 40, 50]

// Object Destructuring

let person = {
    name: "Abdullah",
    age: 40,
    city: "Karachi"
}

let {name, age} = person; // Destructuring assignment
console.log(`name: ${name}`); // Output: Abdullah
console.log(`age: ${age}`); // Output: 40
// We do it because sometime we only want to extract some properties from an object and not all of them.