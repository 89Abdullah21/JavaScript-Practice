const randomNumber = () => {
    return Math.floor(1000 + Math.random() * 6000);
}

async function func() {

    let line1 = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`<h1>Initializing Hacking...</h1>`);
        }, randomNumber());
    });

    document.body.innerHTML += line1;


    let line2 = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`<h1>Reading your Files...</h1>`);
        }, randomNumber());
    });

    document.body.innerHTML += line2;


    let line3 = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`<h1>Password files Detected...</h1>`);
        }, randomNumber());
    });

    document.body.innerHTML += line3;


    let line4 = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`<h1>Sending all passwords and personal files to server...</h1>`);
        }, randomNumber());
    });

    document.body.innerHTML += line4;


    let line5 = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`<h1>Cleaning up...</h1>`);
        }, randomNumber());
    });

    document.body.innerHTML += line5;
}

func();