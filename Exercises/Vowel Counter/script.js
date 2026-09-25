// Function that counts the number of vowels in a given string
let string = "Hello, how many vowels are in this sentence?";
let vowelCount = 0;

const countVowels = (str) => {
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        // if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        //     vowelCount++;
        // }
        if('aeiou'.includes(char)){
            vowelCount++;
        }
    }
    console.log(vowelCount);
}

countVowels(string);