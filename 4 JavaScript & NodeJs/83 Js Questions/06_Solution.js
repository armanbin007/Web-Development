// 6. The Vowel Counter:
//    You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

let str = "I am Iron Man"
// function vowelCounter(str){
//     let x = str.toUpperCase();
//     let y = x.split("");
//     let count = 0;
//     for(let i = 0; i < y.length; i++){
//         if(y[i] === "A" || y[i] === "E" || y[i] === "I" || y[i] === "O" || y[i] === "U"){
//             count++;
//         }
//     } return count;
// }

function vowelCounter(str){
    let x = str.toUpperCase();
    let counter = 0;
    for (const element of x){
        if("AEIOU".includes(element)){
            counter++;
        }
    } return counter;
}

let res = vowelCounter(str);
console.log(res);
