// map in JavaScript: The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// Difference between forEach() and map() is that forEach() method does not return anything, while map() method returns a new array.

// map() is mainly used to make a new array by performing some operation on each element of the original array.

let numbers = [1,2,3,4,5];

let newNumbers = numbers.map(function(num){
    return num * 2;
})

console.log(`Numbers is ${numbers}`);
console.log(`New Numbers is ${newNumbers}`);

let names = ["Abdullah", "Ali", "Ahmed", "Ayesha"];

let addition = names.map((value) => {
    return value + " Khan";
});

console.log(`Customized Name is ${addition}`);

console.log("\n\n\n");

// Below code is the same above but also return the index and the original array as well. Same parameters can be used in forEach() method as well.

let names1 = ["Abdullah", "Ali", "Ahmed", "Ayesha"];

let addition1 = names1.map((value, index, array) => {
    return `[${value} Khan ${index} ${array}]\n`;
});

console.log(`Customized Name is ${addition1}`);


