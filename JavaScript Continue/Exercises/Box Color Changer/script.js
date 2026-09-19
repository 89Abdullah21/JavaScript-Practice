function changeColor() {
    let r = Math.floor(0 + Math.random() * 255);
    let g = Math.floor(0 + Math.random() * 255);
    let b = Math.floor(0 + Math.random() * 255);
    let color = `rgb(${r}, ${g}, ${b})`;
    return color;
}

let boxes= document.querySelector(".boxes").children;

Array.from(boxes).forEach(e =>{
    e.style.backgroundColor = changeColor();
    e.style.color = changeColor();
    e.style.borderColor = changeColor();
})