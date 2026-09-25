// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

let array = [1, 2, 2, 3, 4, 4, 5];

const doubleTrouble = (arr) => {
    for(let i =0; i < arr.length; i++){
        if(arr[i]===arr[i+1]){
            continue;
        }
        else{
            arr[i] *= 2;
        }
    }
}

doubleTrouble(array);
console.log(array);