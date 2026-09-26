// Smoothly animates the page back to the very top
let button = document.querySelector('.button')
button.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})

// Smoothly animates the page back to the very bottom
// let button2 = document.querySelector('.button2')
// button2.addEventListener('click', () => {
//     window.scrollTo({
//         bottom: 0,
//         behavior: 'smooth'
//     });
// })

// Why does the button2 don't work? Because the window.scrollTo() method does not have a 'bottom' property. Instead, you can use the document.body.scrollHeight to scroll to the bottom of the page. Here's the corrected code for button2:
let button2 = document.querySelector('.button2')
button2.addEventListener('click', () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
})



