// Smoothly animates the page back to the very top
let button = document.querySelector('.button')
button.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})





