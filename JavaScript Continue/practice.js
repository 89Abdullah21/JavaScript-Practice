// const marks={
//     math: 85,
//     science: 90,
//     english: 78
// }

// for(let a=0; a<Object.keys(marks).length; a++){
//     console.log(Object.keys(marks)[a] + ":" + marks[Object.keys(marks)[a]]);
// }

// console.log("Abdullah");

// for(key in marks){
//     console.log(`${key} : ${marks[key]}`)
// }

let info={
    name: "Abdullah",
    age: 22,
    city: "Karachi"
};

console.log(info);

// printing the keys of the object using for loop
for(let a=0; a<Object.keys(info).length; a++){
    console.log(Object.keys(info)[a] + ":" + info[Object.keys(info)[a]]);
}

// Ananymous function
const greeting = function(name){
    return `Hello ${name}, Good Morning!`;
}

// Arrow function
const greet = (name) => {
    return `Hello ${name}, Good Morning!`;
}

// Arrow function with rest parameter (multiple arguments)
const greet2 = (...names) => {
    return `Hello ${names.join(", ")}, Good Morning!`;
}

console.log(greet2("Abdullah", "Ali", "Ahmed", "Ayesha"));


let array = [1,2,"Abdullah", true, null, undefined, [1,2,3]];
console.log(array[6][2]);
// push, pop, shift, unshift, splice,


let string = "Hello, World!";
// .length, .toUpperCase(), .toLowerCase(), .includes(), .slice(), .trim(), .replace(), .concat(), .split(), .charAt()

let pi = Math.PI;
// .toFixed(), Math.round(), Math.floor(), Math.ceil(), .random(), .max(), .min(), .pow(), .sqrt(), .abs(), .trunc(), .sign(), .log(), .log10()


let value = true ? "This is true" : "This is false"; // Ternary Operator