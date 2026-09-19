// window: a global object in browser environment

console.log(window); // window object



// DOM: Document Object Model. The DOM is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.
// In simple words, the DOM is a tree-like structure that represents the elements of a web page, allowing developers to manipulate them using JavaScript.

console.log(document); // it is the JavaScript representation of the HTML document loaded in that window.

console.log(document.body); // it is the body of the document

document.body.style.background = "lightblue"; // changing the background color of the body


// BOM: Browser Object Model. The BOM is a collection of objects that represent the browser and its components, such as the window, navigator, screen, and location. It allows developers to interact with the browser and perform tasks such as opening new windows, navigating to different URLs, and accessing browser information.
// alert, confirm, prompt are part of the BOM. They are methods that allow developers to display messages and get input from users.

// location.href = "https://farzanamwelfare.org/" // changing the current URL of the browser window to a new URL. This will redirect the user to the specified URL.


