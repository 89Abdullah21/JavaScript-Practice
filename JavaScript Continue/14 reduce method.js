// reduce method is JS is used to reduce the array to a single value at the end of the iteration.
// Suppose we have an array of numbers and we want to find the sum of all the numbers in the array. We can use the reduce() method to achieve this.
// It will add first two elements and then add the result to the next element and so on until the end of the array is reached.

// filter and map return array while reduce returns a single value. (IMPORTANT)

let numbers = [1, 2, 3, 4, 5];
let reduced = numbers.reduce((h1,h2) =>{
    return h1 + h2;
});

console.log(`Numbers is ${numbers}`);
console.log(`Reduced Numbers is ${reduced}`);

console.log("\n\n\n");


// The below code will only return the first element because only one parameter is passed.
let numbers2 = [234,34,123,4564564,1231,346];
let reduced2 = numbers2.reduce((h1) =>{
    return h1;
});

console.log(`Numbers is ${numbers2}`);
console.log(`Reduced Numbers is ${reduced2}`);

// reduce is also used to find the maximum and minimum value in an array.
// Math will be covered in upcomming leactures.
let numbers3 = [234,34,123,4564564,1231,346];
let reduced3 = numbers3.reduce((h1,h2) =>{
    return Math.max(h1,h2);
});

console.log(`Numbers is ${numbers3}`);
console.log(`Maximum value in the array is ${reduced3}`);

let numbers4 = [234,34,123,4564564,1231,346];
let reduced4 = numbers4.reduce((h1,h2) =>{
    return Math.min(h1,h2);
});

console.log(`Numbers is ${numbers4}`);
console.log(`Minimum value in the array is ${reduced4}`);

