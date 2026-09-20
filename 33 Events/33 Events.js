// To view all the events browse "Browser Events MDN" or something similar to it

// Instead of "click" event, we can also use "mouseover" event, "mouseout" event, "dblclick" event, "keydown" event, "keyup" event, "keypress" event, "focus" event, "blur" event, "change" event, "input" event, "submit" event, "reset" event, "scroll" event, "resize" event, "load" event, "unload" event, etc.

// click: when the user clicks on an element
// dblclick: when the user double-clicks on an element
// mouseover: when the user moves the mouse over an element
// mouseout: when the user moves the mouse out of an element
// keydown: when the user presses a key
// keyup: when the user releases a key
// keypress: when the user presses a key (deprecated)

// difference between keydown and keypress: keydown is fired when the key is pressed down, keypress is fired when the key is pressed down and the character is generated (deprecated)



function changeBgColor(){
    let r = Math.floor(0+Math.random()*255);
    let g = Math.floor(0+Math.random()*255);
    let b = Math.floor(0+Math.random()*255);
    let result = `rgb(${r}, ${g}, ${b})`;
    return result;
}


let button = document.getElementById("btn");
button.addEventListener("mouseover", (e)=>{
    let container = document.querySelector(".container");
    container.style.backgroundColor = changeBgColor();
    let text = document.querySelector("h1");
    text.style.color = changeBgColor();
    text.innerText = "Color Changed";
    let button = document.getElementById("btn");
    button.style.backgroundColor = changeBgColor();
})

button.addEventListener("mouseout", ()=>{
    let container = document.querySelector(".container");
    container.style.backgroundColor = changeBgColor();
    let text = document.querySelector("h1");
    text.style.color = changeBgColor();
    text.innerText = "Color Changed";
    let button = document.getElementById("btn");
    button.style.backgroundColor = changeBgColor();
})

let button2 = document.getElementById("btn2");
button2.addEventListener("click", ()=>{
    alert("Learning Events in JavaScript is fun!");
})


let buton3 = document.getElementById("btn3");
buton3.addEventListener("click", ()=>{
    console.log("This is printed after you click the button 3");
})


// ---------------------------------------------------------------

// Event argument: in the below code, we are passing the event argument to the event listener function. The event argument contains information about the event that occurred, such as the type of event, the target element, and other properties.

// let button = document.getElementById("btn");
// button.addEventListener("mouseover", (e)=>{
//     console.log(e);
// })

// ---------------------------------------------------------------



let button4 = document.getElementById("btn4");
button4.addEventListener("keydown", (e)=>{
    // console.log(e.key, e.keyCode, e.code, e.type, e.target);
    console.log(`${e.key} : ${e.keyCode}`);
    // document.body.innerHTML = `<h1>Key Pressed: ${e.key} | Key Code: ${e.keyCode} | Code: ${e.code} | Type: ${e.type} | Target: ${e.target}</h1>`;
})