// console.clear: Clears the console of all messages. It is used to remove clutter from the console and make it easier to read and debug code.
console.clear();

// -----------------------------------------------

// console.log: Logs a message to the console
console.log(console);
console.log("\n\n");

// -----------------------------------------------

// console.error: Logs an error message to the console. It is used to indicate that an error has occurred in the code. It is often used for debugging purposes and can help developers identify and fix issues in their code.
console.error("This is Abdullah's error message");

// -----------------------------------------------

// console.assert: Logs a message to the console if the specified condition is false. It is used to test assumptions in the code and can help developers identify potential issues or bugs.
console.assert(1===2-1); // This will not log anything because the condition is true

console.assert("1" === 1); // This will log a message because the condition is false

console.assert(1 === 2, "This is Abdullah's assertion message"); // This will log a message because the condition is false

// -----------------------------------------------

// console.table: Displays tabular data as a table in the console. It is used to visualize data in a more organized and readable format. We use it to display arrays or objects in a tabular format, making it easier to analyze and compare data.
const users = [
    { name: "Abdullah", age: 25, city: "Karachi" },
    { name: "Ali", age: 30, city: "Lahore" },
    { name: "Ahmed", age: 35, city: "Islamabad" }
];

console.table(users);

const info = {
    name: "Abdullah",
    age: 25,
    city: "Karachi"
};

console.table(info);

// displaying array using console.table
const fruits = ["Apple", "Banana", "Orange", "Grape"];
console.table(fruits);


// -----------------------------------------------

// console.warn: Logs a warning message to the console. It is used to indicate that something unexpected or potentially problematic has occurred in the code. It can help developers identify and fix issues before they become more serious problems.

console.warn("This is Abdullah's warning message");

// -----------------------------------------------

// console.info: Logs an informational message to the console. It is used to provide additional context or information about the code being executed. It can help developers understand how the code is functioning and identify potential issues or areas for improvement.

console.info("Console.info is very similar to console.log.");
console.log("All console.log messages appears in info section");

// -----------------------------------------------

// console.time and console.timeEnd is used to measure the time taken by a block of code to execute.

console.time("For Loop Time");
for(let i=0; i<5; i++){
    console.log("This is Abdullah's for loop");
}
console.timeEnd("For Loop Time");


console.time("While Loop Time");
let j=0;
while(j<5){
    console.log("This is Abdullah's while loop");
    j++;
}
console.timeEnd("While Loop Time");