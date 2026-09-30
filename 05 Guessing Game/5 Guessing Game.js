let secretnumber = 8;
let attemptsLeft =5;
let guess =0;

while(guess !== secretnumber && attemptsLeft > 0){
    console.log(`You have ${attemptsLeft} attempts left.`);
    guess = Number(prompt("Guess the number between 1 and 100:"));
    console.log(guess);
    attemptsLeft--;
    
    if(guess < secretnumber){
        console.log("Your guess is low. Try again.");
    } else if(guess > secretnumber){
        console.log("Your guess is high. Try again.");
    } else if(guess === secretnumber){
        console.log("Congratulations! You guessed the number.");
        break;
    }
};