// Array in JavaScript
// Array is used to store multiple values under a single variable name
// We access values in array using index starting from 0

let names = ["Abdullah", "Ali", "Ahmed", "Abdur Rahman", "Sadam"];
console.log(names);
console.log(names[3]);

for(let i=0; i < names.length; i++){
    if(i%2 === 0){
        console.log(names[i]);
    }
}

let RandomNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let targetNum = 2;
for(let i=0; i<RandomNums.length; i++){
    if(RandomNums[i] === targetNum){
        console.log(targetNum + " is found at index " + i);
    }
    // else{
    //     console.log(targetNum + " is not found at index " + i);
    // }
}

// Array of mixed data types
let mixedArray = ["Abdullah", 25, true, null, undefined, [1, 2, 3]];
console.log(mixedArray);
console.log(mixedArray[5][1]); // Accessing the second element of the nested array

// Array methods
// push() - adds an element to the end of the array
names.push("Zain");
console.log(names);
names.pop(); // removes the last element from the array
console.log(names);
names.shift(); // removes the first element from the array
console.log(names);
names.unshift("Zain"); // adds an element to the beginning of the array
console.log(names);


// CRUD Operations on Array
// Create
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);
// Read
console.log(fruits[1]); // Banana
// Update
fruits[2] = "Melon";
fruits.push("Grapes");
console.log(fruits); // ["Apple", "Banana", "Melon", "Grapes"]
fruits.unshift("Strawberry"); // Add element at the beginning of the array
//Delete
fruits.pop();
fruits.shift(); // shifts will remove the first element from the array
fruits.splice(0,1); // splice will remove the element from the specified index
console.log(fruits); // []

// Array Iteration
let numbers = [1, 2, 3, 4, 5];
for(let i=0; i<numbers.length; i++){
    console.log(numbers[i]);
}

console.log("Length of numbers array: " + numbers.length);