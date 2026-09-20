// JS is async in nature. (Before this file, ready Asyns.md file first)


// Callback function is a fun that run/execute inside another function
// Callback fun is taken as an argument to another function
// It is executed after the execution of another function is completed

const greet = (name, callback) =>{
    console.log(`Hello ${name}`);
    callback(name);

}

const bye = (name) =>{
    console.log(`Bye ${name}`);
}

greet("Abdull8h", bye)

console.log("\n\n");

// ------------------------------------

// We can also write inline callback function instead of passing a function as an argument

const hi = (name, callback) =>{
    console.log(`Hi ${name}`);
    callback(name);
}

hi("Abdull8h", function(name){
    console.log(`Bye ${name}`);
})


// --------------------------------------------

// Demonstration of callback function with setTimeout function
const hello = () =>{
    console.log("Hi. Hope you are doing well");
}

setTimeout(hello, 3000); // setTimeout is a built-in function in JS. It takes two arguments, first is a function and second is time in milliseconds. After the time is completed, it will call the function. This is also a callback function.

// --------------------------------------------

// Demonstration of callback function with forEach function
let names = ["Abdull8h", "Ali", "Ahmed", "Ayesha", "Fatima"];

const callbackNames = (name) =>{
    console.log(name);
} 

names.forEach(callbackNames);
    // console.log(name);// forEach is a built-in function in JS. It takes a function as an argument and executes that function for each element in the array. This is also a callback function.