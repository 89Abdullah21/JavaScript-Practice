let exit = false;
let randomChoice = Math.random();

if(randomChoice < 0.34){
    randomChoice = "rock";
} else if(randomChoice < 0.67){
    randomChoice = "paper";
} else {
    randomChoice = "scissors";
}

let userWin=0;
let computerWin=0;
let choice;

while(!exit){
    choice = prompt("Rock, Paper or Scissors? (Type 'exit' to quit)").toLowerCase();
    

    if(choice === "rock" && randomChoice === "scissors"){
        alert(`Computer chose ${randomChoice}`);
        alert("You win! Rock beats Scissors");
        userWin++;
    }

    if(choice === "rock" && randomChoice === "paper"){
        alert(`Computer chose ${randomChoice}`);
        alert("You lose! Paper beats Rock");
        computerWin++;
    }

    if(choice === "rock" && randomChoice === "rock"){
        alert(`Computer chose ${randomChoice}`);
        alert("It's a tie! Rock ties with Rock");
    }

    if(choice === "paper" && randomChoice === "scissors"){
        alert(`Computer chose ${randomChoice}`);
        alert("You lose! Scissors beats Paper");
        computerWin++;
    }

    if(choice === "paper" && randomChoice === "rock"){
        alert(`Computer chose ${randomChoice}`);
        alert("You win! Paper beats Rock");
        userWin++;
    }

    if(choice === "paper" && randomChoice === "paper"){
        alert(`Computer chose ${randomChoice}`);
        alert("It's a tie! Paper ties with Paper");
    }

    if(choice === "scissors" && randomChoice === "rock"){
        alert(`Computer chose ${randomChoice}`);
        alert("You lose! Rock beats Scissors");
        computerWin++;
    }

    if(choice === "scissors" && randomChoice === "paper"){
        alert(`Computer chose ${randomChoice}`);
        alert("You win! Scissors beats Paper");
        userWin++;
    }

    if(choice === "scissors" && randomChoice === "scissors"){
        alert(`Computer chose ${randomChoice}`);
        alert("It's a tie! Scissors ties with Scissors");

    }

    if(choice !== "rock" && choice !== "paper" && choice !== "scissors"){
        alert("Invalid choice! Please choose Rock, Paper or Scissors.");
    }

    if(userWin === 3){
        alert("You won the game!");
        exit = true;
    }
    if(computerWin === 3){
        alert("Computer won the game!");
        exit = true;
    }
    if(choice === "exit"){
        exit = true;
    }

}