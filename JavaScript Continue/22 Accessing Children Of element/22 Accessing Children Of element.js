// Direct or deeply nested element of an element are called children of that element.

console.log(document.body.children) // This will return all the children of body element in HTMLCollection.

// Accessing children of an elements using firstChild and lastChild properties.

console.log(document.body.firstChild); // Accessing first child of body

console.log(document.head.lastChild); // Accessing last child of head

console.log(document.head.childNodes); // This will return all the children of body element in NodeList.


// Accessing children of an elements using index
console.log("\n\n\n");
console.log(document.body.children[2]);

console.log(document.head.children[3]);


console.log("\n\n");
// Checking if an element has children or not using hasChildNodes() method.
console.log(document.body.hasChildNodes());

// Converting childnodes list into an array

let arr= Array.from(document.head.childNodes);
console.log(arr);