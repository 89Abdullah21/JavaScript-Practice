console.log("Hi JavaScript");

// Targeting the element by ClassName
let box = document.getElementsByClassName("box");
console.log(box);

let con = confirm("Do you want to change the color of the box to red?");
if(con){
    
    box[2].style.backgroundColor = "red";
}

// Targeting the element by Id

let box4 = document.getElementById("box4");
box4.style.fontSize = "30px";


// Query Selector: It is used to select the first element that matches a specified CSS selector(s) in the document.

let box1 = document.querySelector(".box");
box1.style.backgroundColor = "green";

// Query Selector All: It is used to select all the elements that matches a specified CSS selector in the document.
// For this we can use for loop to change the style of all the elements.

let boxes = document.querySelectorAll(".box");
boxes.forEach(b =>{
    b.style.border = "5px solid green";
})