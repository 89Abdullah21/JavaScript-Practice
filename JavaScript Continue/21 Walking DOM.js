console.log("Hi JavaScript");

// it changes the color of the element with the class "game-title" index 0 to green using JS
document.getElementsByClassName("game-title")[0].style.color="green";
document.getElementsByClassName("game-title")[0].style.background="orange";

// DOM tree: HTML is converted to JS objects, which can be manipulated using JS
// Text, element and comment nodes are the three types of nodes in the DOM tree

console.log(document.head); // Returns the <head> element of the document in console
console.log(document.documentElement); // Returns the <html> element of the document in console
document.title="Rock Paper Scissors"; // Changes the title of the document to "Rock Paper Scissors"
