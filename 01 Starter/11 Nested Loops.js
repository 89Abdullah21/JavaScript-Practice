// Nested loop is simply loop inside another loop.
// Outer loop controls rows and inner loop controls columns.

let rows = 5;
for(let i=1; i<=rows; i++){
    let output="";
    for(let j=1; j<=rows; j++){
        output +="%"
    }
    console.log(output);
}