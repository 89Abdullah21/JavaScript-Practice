// Changing the document's title based on a condition

let ques=confirm("Do you want to change the title to Abdullah's title?");
if(ques){
    document.title="Abdullah's title";
    document.getElementsByClassName("heading")[0].style.color="White";
    document.getElementsByClassName("hero")[0].style.background="blue";
}
else{
    document.getElementsByClassName("hero")[0].style.background="red";
    document.getElementsByClassName("heading")[0].style.color="Black";
}

// Accessing the childNodes abd its childNode

let a = document.body.childNodes[6]; // Accessing the 6th childNode of the body
let b = document.body.childNodes[6].childNodes[7]; // Accessing childNodes of a childNode

// Now resolving the issue of having #text in the childNodes list using the word children instead of childNodes
let c = document.body.children[1]; // Accessing the 1st child of the body

// Accessing the parent of the child element
document.body.children[2].children[2].parentElement // Accessing the parent of the 2nd child of the 2nd child of the body

let container = document.body.children[2] // This will point to the container in the body

// Accessing the sibling 
container.children[0].nextElementSibling // Accessing the next sibling of the first child of the container
container.children[0].previousElementSibling // Accessing the previous sibling of the first child of the container