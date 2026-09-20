// Event Bubbling: When an event occur on a child element, it will also trigger event on parent element if those have event listener too

// If a person lives in Peshawar, he also lives in Khyber Pakhtunkhwa and also lives in Pakistan. 

let container = document.querySelector('.container');
container.addEventListener('click', () => {
    alert('Container was clicked!');
})

let parent = document.querySelector('.parent');
parent.addEventListener('click', () => {
    alert('Parent was clicked!');
})

let child = document.querySelector('.child');
child.addEventListener('click', () => {
    alert('Child wasclicked!');
})

// -------------------------------
// We can handle this bubbling by using event.stopPropagation() method in function body. This will stop the event from bubbling up to parent elements.

// Whereever the e.stopPropagation() is used, the bubbling will stop there and will not go to parent elements.

let container2 = document.querySelector('.container2');
container2.addEventListener('click', () => {
    console.log('Container2 was clicked!');
    // console.clear();
})

let parent2 = document.querySelector('.parent2');
parent2.addEventListener('click', (e) => {
    console.log('Parent2 was clicked!');
    e.stopPropagation();
})

let child2 = document.querySelector('.child2');
child2.addEventListener('click', (e) => {
    console.log('Child2 was clicked!');
    // e.stopPropagation();
})