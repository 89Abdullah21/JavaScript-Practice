// The below JavaScript code covers non-primitive data types, dynamic typing, and type conversion

// Non premitive data types in JavaScript
// Objects

// Objects are collection of data or multiple variables

let info = {
    name: "Abdullah",
    age: 22,
    isStudent: true,
    city: "Peshawar"
};

console.log(info);

let edu = {
    SchoolName : "IMS",
    TotalStudents : 3000,
    Location : "Peshawar",
    Established : 2000,
};

console.log(edu);

// Dynamic typing in JavaScript
let data = "Hi JavaScript";
console.log(data);
data = 100;
console.log(data);
data = true;
console.log(data);

let one = 1;
let two = "Abdullah";
let three = true;
let four = null;
let five;
let six = Symbol("id");
let seven = 232342342341319734923983924983n;
let eight = {
    name: "Abdullah",
    age: 22,
    isStudent: true,
    city: "Peshawar"
}

console.log("Data type of one: ", typeof one);
console.log("Data type of two: ", typeof two);
console.log("Data type of three: ", typeof three);
console.log("Data type of four: ", typeof four);
console.log("Data type of five: ", typeof five);
console.log("Data type of six: ", typeof six);
console.log("Data type of seven: ", typeof seven);
console.log("Data type of eight: ", typeof (eight));

// Type conversino in JavaScript: Auto and manual conversion
// Auto conversion: JavaScript automatically converts the data type of a variable to another data type based on the operation performed on it.
let num1 = 12;
let num2 = "32";
let result = num1 - num2;
console.log("Result of num1 - num2: ", result);
console.log("num1 + num2: ", num1 + num2);
console.log("num1 * num2: ", num1 * num2);

// Manual conversion: Developer convert the data type of a variable
let num3 = 23;
let num3String = String(num3); // Here the number is converted to string
console.log("Data type of num3 is: ", typeof num3);
console.log("Data type of num3String is: ", typeof num3String);

//Converting to boolean
let num4 = 0;
let num4Boolean = Boolean(num4);
console.log("Data type of num4 is: ", typeof num4);
console.log("Data type of num4Boolean is: ", typeof num4Boolean);