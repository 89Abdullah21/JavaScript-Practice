const info = {
    name: "Abdullah",
    age: 23,
    city: "New York",
    country: "USA"
};

// for in loop is used to iterate over property of objects
for(key in info){
    console.log(key + " is " + info[key]);
}

for(key in info){
    console.log(key + ":" + info[key]);
}


// -------------------------

// For each loop is used to iterate over elements of an array
let array = [1, 2, 3, 4, 5];

array.forEach(element => {
    console.log(element * element);
});

array.forEach(element => {
    console.log(element * element * element);
});


// -------------------------

// Array.from() method is used to create a new array from an array like object

let name = "Abdullah";

let array2= Array.from(name);
console.log(array2);

// for of loop is used to iterate over elements of an array

for(alpha of array2){
    console.log(alpha);
}

for(let alpha in name){
    console.log(alpha + " is " + name[alpha]);
}

