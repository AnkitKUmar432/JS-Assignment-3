// Q3) let string = 'INDIA'
// output = 'INDONESIA'
// Use array.splice

let string = 'INDIA';
let arr1 =  "ONES";
let arr = string.split("");
arr.splice(3,0,...arr1)
let result = arr.join("")
console.log(result);

