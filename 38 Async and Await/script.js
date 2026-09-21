// Syncronous: Things happening step by step
// Asyncronous: Things happening independently with some delay or time gap

// Async & Await is a way to handle asynchronous operations in JavaScript. It allows you to write asynchronous code that looks and behaves like synchronous code, making it easier to read and maintain.

// await can only be used inside an async function.

// Syntax:
// async function functionName() {
//     // code
//     await someAsyncOperation();
//     // code
//}

// The below code will run in synchronous manner, but the function func() will take 3 seconds to resolve. The rest of the code will wait for it to complete before moving on.

async function func() {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve("Three");
        }, 3000);
    });
}


async function asyncCall() {
    console.log("One");
    console.log("Two");
    let third = await func();
    console.log(third);
    console.log("Four");
    console.log("Five");

}

asyncCall();

// Output:
// One
// Two
// Three
// Four
// Five

// Another example with code

async function fetchData() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();
