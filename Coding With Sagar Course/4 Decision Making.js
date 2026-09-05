// Dealing with the Decisino Making based on conditions that will either be True or False
// We will do this using if, else if and else statements

/* if(condition){
    // code to be executed if the condition is true
}
else if(conditino){
    // code to be executed if first condition is false and this condition is true
}
else{
    // code to be executed if both above conditions are false
} */

let isStudent = true;
let value = 8

if(!isStudent && value <7){
    console.log("The user is not a student");
}
else if(isStudent && value >8){
    console.log("The user is a student but value is not greater than 8");
}
else if(isStudent && value ===8){
    console.log("The user is a student and value is 8");
}

else{
    console.log("All conditions are false");
}

// Nested if else statements

isStudent = true;
let feePaid = false;

if(isStudent){
    if(feePaid){
        console.log("This student is allowed to take the exam");
    }
    else{
        console.log("This student is not allowed to take the exam because fee is not paid");
    }
}
else{
    console.log("This user is not a student");
}