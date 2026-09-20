console.log("Hi JS");

// Creating an element using createElement and then appending it to the container using appendChild
// Dynamically creating an element and appending it to the DOM using JavaScript
let container = document.createElement("div");
container.innerHTML = "This is a container created using JS";
container.setAttribute("class", "box9");
document.querySelector(".container").appendChild(container);

let text = document.createElement("p");
text.innerText = "This is a paragraph created using JS";
document.querySelector(".hero").appendChild(text);

let heading = document.createElement("h1");
heading.innerText = "JS Heading";
document.querySelector(".hero").appendChild(heading);
heading.setAttribute("style", "color: red; font-size: 3rem; text-align: center;");

// append, prepend, before, after, replaceWith, remove
// Replace .appendChild with .append, .prepend, .before, .after, .replaceWith, .remove to see the difference in the output
// Before and after will insert the element before or after the specified element
// Prepend will insert the element at the beginning of the specified element
// Append will insert the element at the end of the specified element
// ReplaceWith will replace the specified element with the new element
// Remove will remove the specified element from the DOM

// ReplaceWith example
let newBox = document.createElement("div");
newBox.innerHTML = "This is a new box replaceWith the Box 1";
newBox.setAttribute("class", "box10");
document.querySelector(".box1").replaceWith(newBox);

// Remove example
let box2 = document.querySelector(".box");
box2.remove();
