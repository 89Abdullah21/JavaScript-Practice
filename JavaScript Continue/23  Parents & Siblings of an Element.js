// DOM is read only, so we cannot change it. We can only read it and use it to manipulate the page.

// Accessing Parents & Siblings of an Element
// We can access the parent of an element using the parentNode property.

console.log(document.body.parentElement); // This will return the parent of body element which is html element.

console.log(document.body.parentNode); // This will return the parent of body element which is html element.

// Difference between parentNode and parentElement is that parentNode will return the parent of the element even if it is not an element, but parentElement will return null if the parent is not an element.

// Accessing Siblings of an Element
// We can access the siblings of an element using nextSibling and previousSibling properties.

console.log(document.head.nextSibling); // This will return the next sibling of head element which is body element.

console.log(document.body.previousSibling); // It will return #text if there is a text node between head and body elements. If there is no text node, it will return head element.

console.log(document.body.previousElementSibling); // This will return the previous sibling of body element which is head element.

// Difference between nextSibling and nextElementSibling is that nextSibling will return the next sibling of the element even if it is not an element, but nextElementSibling will return null if the next sibling is not an element. Same goes for previousSibling and previousElementSibling.

