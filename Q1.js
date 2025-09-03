// Q1) Create an array of states in india.
// Remove all the names starting with vowels from the list. Use array.filter.

let statesNames = ["Delhi","Punjab","Haryana","Rajasthan","Goa","Bihar","Uttar Pradesh","Sikkim","Andhra Pradesh","Odisha"];
let RemovedVowels = statesNames.filter(state=>{return ! /^[AEIOUaeiou]/i.test(state); //regex check if first letter is vowel

});
console.log(RemovedVowels);
