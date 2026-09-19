//Disscussed in this file: setInterval(), clearInterval(), setTimeout(), clearTimeout()


// Set Interval: Do something every x second
// 1000 is 1 second

// Run set of code every x amount of time, so we use setInterval() function

function getRandomColor() {
    let r = Math.floor(0+Math.random()*255);
    let g = Math.floor(0+Math.random()*255);
    let b = Math.floor(0+Math.random()*255);
    return `rgb(${r}, ${g}, ${b})`;
}

setInterval(()=> {
    let child = document.querySelector('.child');
    child.style.backgroundColor = getRandomColor();
}, 1000);

// .............................................

// Multiple actions can be performed in a single setInterval() function but each will have the same time interval (1000ms in this case).


function RandomBorderRadius(){
    // a+r(b-a)
    let radius = Math.floor(5+Math.random()*115);
    return radius + 'px';

}

let radius = setInterval(()=> {
    let parent = document.querySelector('.parent');
    parent.style.borderRadius = RandomBorderRadius();
}, 1000)

console.log(radius); // This will return the interval id which can be used to stop the setInterval() function from running.

// -------------------------------------------------------------------------

// clearInterval() method is used to stop the setInterval() function from running at the exact moment. It takes the interval id as an argument which is returned by setInterval() function.

// here radius id is 2 (check in console.log(radius);

//  clearInterval(2); //(Actual code to stop any interval

// ---------------------------------------------------------
// setTimeout() method run a specific code after specific time just once
// setInterval() : Repeat code many times after specific time
// setTimeout() : Run code only once after specific time

setTimeout(()=> {
    let container = document.querySelector('.container');
    container.style.border= '5px solid orange';
}, 4000);

// setTimeout() can also be cleared using clearTimeout() method.
