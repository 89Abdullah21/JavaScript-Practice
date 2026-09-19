// InsertAdjacentElement() method is used to insert an element in the DOM at a specific position relative to another element. It allows you to specify where you want to insert the new element in relation to an existing element.

//we can use afterbegin, beforebegin, afterend, beforeend to insert the element at a specific position

let hero = document.querySelector(".hero");

let newElement = document.createElement("div");
newElement.innerHTML = "This is a new element inserted using insertAdjacentElement() method";
newElement.setAttribute("class", "box11");

hero.insertAdjacentElement("afterbegin", newElement);

let newElement2 = document.createElement("div");
newElement2.innerHTML = "This is a new element inserted using insertAdjacentElement() method";
newElement2.setAttribute("class", "box12");

hero.insertAdjacentElement("beforebegin", newElement2);

// insertAdjacentText() method is used to insert text in the DOM at a specific position relative to another element. It allows you to specify where you want to insert the new text in relation to an existing element.

let newText = "This is a new text inserted using insertAdjacentText() method";
hero.insertAdjacentText("afterend", newText);

hero.insertAdjacentText("beforeend", "is is a new text inserted using insertAdjacentText() method");

// .remove() to remove an element from the DOM
docuemnt.querySelector(".box").remove();

// .classlist to get the list of classes of an element
document.querySelector(".box1").classList;

// .className to get the class name of an element
document.querySelector(".box1").className;

// .classList.add() to add a class to an element
document.querySelector(".box1").classList.add("new-class");

// .classList.remove() to remove a class from an element
document.querySelector(".box1").classList.remove("new-class");

// .classList.toggle() to toggle a class on an element
// if class is present it will be removed and if class in not present it will be added
document.querySelector(".box1").classList.toggle("new-class");