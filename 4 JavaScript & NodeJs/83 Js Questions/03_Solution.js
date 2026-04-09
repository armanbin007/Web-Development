// 3. The Mirror Mirror:
// Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

let x1 = "Durefishan";
let x2 = x1;

function reversed(x){
    let nArr = x.split("").reverse().join("");
    return x + nArr;
} 

let x3 = reversed(x1);
console.log(x3);
