// Q4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string.
let str = "This is a simple string";

let vowels = "aeiouAEIOU";
let vowelCount =0;
let consonantCount = 0;

for(let i=0; i< str.length; i++){
    let ch = str[i];//extract each character
    if(/[a-zA-Z]/.test(ch)){
        if(vowels.includes(ch)){
            vowelCount++;
        }else{
            consonantCount++;
        }
    }
}

console.log("Vowels: "+vowelCount);
console.log("Consonants: "+consonantCount);
