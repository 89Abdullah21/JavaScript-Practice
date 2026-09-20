JavaScript has an async nature.
It is not always gurrented that first statement will execute first and below that will execue later

If a piece of code isn't ready to be executed, the code below it wouldn't wait for it and will be executed before it.

Its example can be setTimeout().

The code inside setTimeout() will be executed after certain interval of time and the code below it will be executed first because that code is ready.

<!-- EXAMPLE -->
console.log("I will be executed first");
console.log("I will be executed second");

setTimeout(()=> {
    console.log("I will be executed after 5 seconds");
})

console.log("I will execute earlier than setTimeout body code even though I am written later");

<!-- ------------------------------- -->