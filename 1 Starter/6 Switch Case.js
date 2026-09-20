// Switch Case 

/*
switch (expression){
    case value1:
        // code block
        break;
    case value2:
        // code block
        break;
    default:
        // code block
}
*/

// let question = prompt("What day of the week is it? (1-7)");
// Replace day with question in the switch statement to take input from the user
let day = 3;

switch(day){
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    case 7:
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid day");
};