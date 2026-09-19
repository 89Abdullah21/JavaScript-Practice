// console.log("This is Abdullah's log message");

// // alert("This is Abdullah's alert message");

// let info = prompt("What is your name?");
// document.write(info); // Document.write() is used to write content to the HTML document.

// let age = Number(prompt("Age?"));
// alert(`You have entered the name in a ${typeof age} data type and the value is ${age}`);


// prompt can have a default value as well that will be passed as a second argument

// let name = prompt("What is your name?", "Abdullah");
// document.write(name);

// confirm() is used to get a boolean value from the user. It returns true if the user clicks "OK" and false if the user clicks "Cancel".

let name = prompt("What is your name?", "Abdullah");
let write = confirm("Do you want it to write on the document?");
if(!write){
    console.log("You have cancelled the writing on the document");
}
else{
    document.write(name);
}
