// Promise in JS: A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A promise is in one of three states: pending, fulfilled, or rejected. A promise is settled if it is either fulfilled or rejected, but not pending.

let promise = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        console.log("Promise 1 is pending");
        resolve("Promise 1 is fulfilled"); // resolve is a function that is called when the promise is fulfilled. It takes one argument, which is the value that the promise is fulfilled with.
    }, 3000)
})

promise.then((value) =>{
    console.log(value);
})


// --------------------------------------------------


let promise2 = new Promise((resolve, reject) =>{
    let randomNum = Math.floor(10 + Math.random() * 10);
    if(randomNum <= 15){
        reject("Promise 2 is rejected");
        console.log(randomNum);
    }

    else{
        resolve("Promise 2 is fulfilled");
        console.log(randomNum);
    }
})



promise2.then((value) => {
    console.log(value);
})

// ----------------------------------------------

// .catch() method is used to handle the rejected promise.
// Simply put, it is used to handle the error in the promise.

let promise3 = new Promise((resolve, reject) =>{

    let randomNum = Math.floor(10 + Math.random() * 10);
    if(randomNum <= 15){
        setTimeout(() =>{
        console.log("Promise 3 is pending");
        reject("Promise 3 is rejected and is not shown as error in console because it is handled by .catch() method");
    }, 2000)
    }

    else{
        setTimeout(() =>{
        console.log("Promise 3 is pending");
        resolve("Promise 3 is fulfilled");
    }, 2000)
    }
    
})

promise3.then((vale) => {
    console.log(vale);
}).catch((error) =>{
    console.log(error);
})

console.log("\n\n");

// ----------------------------------------------

// Promise.all() method is used to handle multiple promises at once. It takes an array of promises as an argument and returns a single promise that resolves when all of the promises in the array have resolved, or rejects with the reason of the first promise that rejects.

let p3 = Promise.all([promise, promise2, promise3])
p3.then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
})

// It will give an array of values of all the promises that are fulfilled. If any of the promises are rejected, it will give the reason of the first promise that is rejected.

// ----------------------------------------------

// Promise.allSettled() simply returns a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describe the outcome of each promise.
console.log("Promise.allSettled()");
let p4 = Promise.allSettled([promise, promise2, promise3])
p4.then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
})


// ----------------------------------------------
// Promise.race() method returns a promise that resolves or rejects as soon as one of the promises in an iterable resolves or rejects, with the value or reason from that promise.
console.log("Promise.race()");
let p5 = Promise.race([promise, promise2, promise3])
p5.then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
})