// filter method in JS is used to create a new array from the original array based on some condiition applied.
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filtered = numbers.filter((value) =>{
    return value > 5 && value % 2 === 0;
})

console.log(`Numbers is ${numbers}`);
console.log(`Filtered Numbers is ${filtered}`);