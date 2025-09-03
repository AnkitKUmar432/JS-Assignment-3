// Q5) Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.

function correctfn(sentance, wrong, correct){
    return sentance.replace(wrong, correct)
}
let sentance = "i am learning javasc.";
let result = correctfn(sentance,"javasc","javascript");
console.log("Before: ",sentance);
console.log("After: ",result);
