// Loop controller includes break and continue
// Break is used in a loop to exit the loop when a certain conditino is met
// Even if the the looping condition is true.

let i = 0;
while(i <= 10){
    if(i === 4){
        break;
    }
    console.log(i);
    i++;

}

// Continue is used to skip the current iteration of the loop and continue with the next iteration

let j=10;
for(j; j>=0; j--){
    if(j ===5){
        continue; // Due to this, the number 5 will be skipped
    }
    console.log(j);
}