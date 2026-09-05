// This is cover the string methods in JavaScript
// Important: String is immutable
// original string remain same but new string is created after applying the string methods 

let greet = "Hi. Hope you are doing well";

// 1. Length
let length = greet.length;
console.log("Length of the string:", length);

// 2. toUpperCase
console.log(greet.toUpperCase());

// 3. toLowerCase
console.log(greet.toLowerCase());

// 4. Includes : It tells whether a string contains some specific text or not. Gives true or false
console.log(greet.includes("Are"));
console.log(greet.includes("are"));

// 5. Slice: It gives you a string based on index values given
console.log(greet.slice(3, 9));

// 6. Trim: It removes the white spaces from the start and end of the string
let greet2 = "     Abdullah is from Karachi and lives in Hyberabad     ";
console.log(greet2.trim());
console.log(greet2);

// 7. Using index, finding a particular character in a string
console.log(greet[5]);

// 8. replace: It replaces a specific text in a string with another text
let name = "Abdullah";
console.log(name.replace("Abdullah", "Ali"));
console.log(name);

// 9. concat: It joins two strings together
let fname ="Abdullah";
let sname= "Khan";
let fullname = fname.concat(" ", sname);
console.log(fullname);

// 10. split: It splits a string into an array of substrings based on a specified separator
let str = "I am learning JavaScript";
let arr = str.split(" ");
console.log(arr);

// 11. charAt: It returns the character at a specified index
console.log(str.charAt(5));

let str2 = "Hello, World!";
for(let i =0; i<str2.length; i++){
    console.log(str2.charAt(i));
}

