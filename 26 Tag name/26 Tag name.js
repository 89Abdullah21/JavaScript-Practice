// getElementsByTagName() method returns a collection of elements with the specified tag name.

let a = document.getElementsByTagName("h2");
console.log(a);

let b = document.getElementsByTagName("div");
console.log(b);

// matches is used to check if the element matches the specified CSS selector.

b[4].matches("#box4"); // false as it dosn't have box4 id
b[5].matches("#box4"); // true as it has box4 id