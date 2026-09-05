// toString() method is used to convert an array into a string.
let marks=[90, 80, 70, 60, 50];
let b=marks.toString();
console.log(`Marks is ${b}`);
console.log(`b is ${b}`);

console.log(`Data type of marks is ${typeof marks}`);
console.log(`Data type of b is ${typeof b}`);

// join() method joins all elements of an array into a string and returns this string.
let c=marks.join(" & ");
console.log(`Marks is ${marks}`);
console.log(`c is ${c}`);

// pop() removes last element from an array
// it actually changes the array
console.log(marks.pop());
console.log(`Marks is ${marks}`);


// delete() method removes an element from an array but it does not change the length of the array. It leaves undefined in place of the deleted element.
delete marks[1];
console.log(`Marks is ${marks}`);
console.log(`Length of marks is ${marks.length}`);

// concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
let marks1=[90, 80, 70];
let marks2=[60, 50, 40];
let marks3=marks1.concat(marks2);
console.log(`Marks1 is ${marks1}`);
console.log(`Marks2 is ${marks2}`);
console.log(`Marks3 is ${marks3}`);


// sort() method is used to sort the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
// sort() modify the original array
// it sort() based on the starting integer like 234 is smaller than 3 bcz 2 < 3 in this case. So, it is not a good idea to use sort() method for numbers.

let marks4=[190, 8, 270, 960, 50];
console.log(`Marks4 is ${marks4}`);
marks4.sort();
console.log(`Marks4 after sorting is ${marks4}`);


// Addition function for sorting numbers in ascending order
let compare=(a,b)=>{
    return a-b;
}

let newarray=[234,12,21,1123, 1,2,3,973, 4, 5, 6, 7, 8, 9];
console.log(`Newarray is ${newarray}`);
newarray.sort(compare);
console.log(`Newarray after sorting is ${newarray}`);

// For descending, just make a-b to b-a

let compareDesc=(a,b)=>{
    return b-a;
}

console.log(`Newarray is ${newarray}`);
newarray.sort(compareDesc);
console.log(`Newarray after sorting in descending order is ${newarray}`);

// Descending order can also be achieved by using reverse() method after sorting in ascending order.

newarray.sort(compare);
console.log(`Newarray after sorting in ascending order is ${newarray}`);
newarray.reverse();
console.log(`Newarray after sorting in descending order is ${newarray}`);

// splice() method is used to add/remove items to/from an array, and returns the removed item(s). This method chnages the original array.
//array.splice(start_position, number_of_items_to_remove, item1, item2, item3, ...)

console.log("\n\n\n")
let array1=[1, 2, 3, 4, 5];
console.log(`Array1 is ${array1}`);
array1.splice(3, 1, 99, 100, 101, 2);
console.log(`Array1 after splice is ${array1}`);


// Slice() takes part of an array and returns a new array

let array2=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let slicedArray=array2.slice(3,6);
console.log(`Sliced array is ${slicedArray}`);