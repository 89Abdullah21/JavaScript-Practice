const marks={
    math: 85,
    science: 90,
    english: 78
}

for(let a=0; a<Object.keys(marks).length; a++){
    console.log(Object.keys(marks)[a] + ":" + marks[Object.keys(marks)[a]]);
}

console.log("Abdullah");

for(key in marks){
    console.log(`${key} : ${marks[key]}`)
}