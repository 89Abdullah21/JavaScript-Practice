let numbers = [1, 2, 3, 4, 15, -3, 6, 7, 8, 9, 10];
let sum = 0;

const sumPositiveNumbers = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
        else{
            return;
        }
    }
}

sumPositiveNumbers(numbers);
console.log(sum);