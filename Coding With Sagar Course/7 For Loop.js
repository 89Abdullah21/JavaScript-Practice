// For Loop: Used when the number of iterations is known

/*
for(expression; condition; increment/decrement){
    //Body to be executed repeatedly
}
*/

for(let a=5-1; a>0; a--){
    console.log(a);
    console.log("Hi JavaScript");
}

console.log("\n\n\n\n");

// Even numbers using for loop and if condition
for(let b=0; b<=10; b++){
    if(b%2 === 0){
        console.log(b);
    }
}

console.log("\n\n\n\n");

// Even numbers using for loop and using increment by 2
for(let c=0; c<=10; c+=2){
    console.log(c);

}