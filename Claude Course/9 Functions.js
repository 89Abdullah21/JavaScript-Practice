// function details(){
//     let name=prompt("What is your Name: ");
//     let age= Number(prompt("Whats your age: "));
//     if(age>18){
//         return `Hi ${name}. Your are 18+ as your age is ${age}`
//     }
//     else{
//         return `Hi ${name}. Your are not 18+ as your age is ${age}`
//     }
// }

// console.log(details());

// Anonymous function

const age=function(age){
    return age>18? "You are 18+" : "You are not 18+";
}

console.log(age(34));

// Arrow function

const info=(name, age) => {
    return `My name is ${name} and I am ${age} years old`;
}

console.log(info("Abdullah", 23));

// Rest parameters: Bundle multiple parameters into array of arguments. It is used when we don't know the number of arguments that will be passed to the function.
// It is designed to accept any number of argumets

const names=(...args)=>{
    return `The names are: ${args}`;
}

console.log(names("Abdullah", "Ali", "Ahmed", "Ayesha", "Zainab"));