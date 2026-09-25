// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

let names = ["Harry", "Hermione", "Ron", "Draco", "Luna", "Neville", "Ginny", "Cedric", "Cho", "Severus"];

let Gryffindor = [];
let Hufflepuff = [];
let Ravenclaw = [];
let Slytherin = [];

const assignHouses = (names) =>{
    names.forEach(name =>{
        if(name.length < 6){
            Gryffindor.push(name);
        }
        else if(name.length < 8){
            Hufflepuff.push(name);
        }
        else if(name.length < 12){
            Ravenclaw.push(name);
        }
        else{
            Slytherin.push(name);
        }
    })
}

assignHouses(names);

console.log("Gryffindor:", Gryffindor);
console.log("Hufflepuff:", Hufflepuff);
console.log("Ravenclaw:", Ravenclaw);
console.log("Slytherin:", Slytherin);