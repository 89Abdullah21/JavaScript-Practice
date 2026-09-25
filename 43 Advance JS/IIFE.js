// IIFE stands for Immediately Invoked Function Expression
// IIFE is a function that runs as soon as it is defined.
// It is used to create a private scope for variables and functions, preventing them from polluting the global namespace.
// It is used instead of creating a global variable or function, which can lead to naming conflicts and other issues.

// The syntax for an IIFE is as follows:
// (function() {
//     // Code here
// })();

(function() {
    // This is an IIFE
    var privateVariable = "I am private";
    console.log(privateVariable);
})(); // IIFE with no parameters

try{
    console.log(privateVariable); // This will throw an error because privateVariable is not defined in the global scope.

}catch(e){
    console.log("code in try block will not run because privateVariable is not defined in the global scope.");
}

// ------------------------------------------------------------------------

((name, age)=> {
    console.log(`My name is ${name} and I am ${age} years old.`);
})("Abdullah", 40); // IFEE with parameters

// ------------------------------------------------------------------------

(function(){
    //code
})(); // IIFE with no parameters


// IIFE using arrow function
(() => {
    //code
})(); // IIFE with no parameters

// ----------------------------------------------------------------

