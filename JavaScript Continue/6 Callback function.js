// Call back is a function that is passed as an arugument to another function
// Used to handel asynchronous operations in JavaScript
// Asynchronous in a way that it allows the program to continue executing other code while waiting for a time-consuming operation to complete, such as fetching data from an API or reading a file from disk.
// When you are done, call this next function to continue the execution of the program. This is called a callback function.

// Callback is like you tell somebody to clean your shoes. The person tells you that after i clean it, on what number should i call you back. You give number and he clean shoes. After cleaning he calls you back.

// So function does it work and when it is done, it calls the callback function


function hi(name, kollback){
    console.log(`Hi ${name}`);
    kollback();
}

function bye(){
    console.log("Bye!");
}

hi("Abdull8h", bye);