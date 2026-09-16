// innerHTML is used to get the inner html of an element
// We can also use getElementById or getElementsByClassName to get the inner html of an element for below two statements
document.querySelector(".container").innerHTML

// innerText is used to get the inner text of an element
document.querySelector(".container").innerText

document.getElementsByClassName("game_title").innerText

// To get the inner text and html of an element with the class box using queryselector
let a = document.querySelector(".box").innerHTML
let b = document.querySelector(".box").innerText

console.log(a)
console.log(b)


// Changing the the text inside a box using innerText
document.querySelector(".box1").innerText = "This is box 1 and text is changed "

//OuterHTML will return the entire html of the element including the element itself

document.querySelector(".container").outerHTML

// tagName will return the name of the tag of the element
document.getElementById("first_section").tagName

// nodeName will return the name of the node of the element even it is not an element.
document.getElementById("first_section").nodeName

// textContent will return the text content of the element and all its children
document.getElementById("first_section").textContent



// hidden will return true if the element is hidden, false otherwise. (Currently the box is still visible (due to some issue maybe))
document.querySelector(".big_box").hidden
document.querySelector(".big_box").hidden = false // This will make the element visible

// hasAttribute will return true if the element has the specified attribute, false otherwise.
let c = document.querySelector(".big_box").hasAttribute("style") // This will return true as the element has the hidden attribute
console.log(c)
// getAttribute will return the value of the specified attribute of the element.
let d = document.querySelector(".big_box").getAttribute("style") // This will return the value of the hidden attribute which is an empty string
console.log(d)
//setAttribute will set the value of the specified attribute of the element.
let e = document.querySelector(".big_box").setAttribute("style", "display: inline-block;")

// to get all attributes
document.querySelector(".big_box").attributes

// removeAttribute will remove the specified attribute of the element.
document.querySelector(".big_box").removeAttribute("style")


// Design Mode (fun)
document.designMode = "on" // This will make the entire document editable

// Dataset will return a DOMStringMap object which contains all the data attributes of the element. (do write the word data- before the attribute name in the html file to make it a data attribute)
let dataset = document.querySelector(".container").dataset
console.log(dataset)